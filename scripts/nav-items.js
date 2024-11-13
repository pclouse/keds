

function buildNavItemUrl() {
  let fileName = 'nav-items.json';
  return new URL(`${window.location.origin}/${fileName}`);
}

const getNavItemsJSON = async () => {
  try {
    const navItemJSON = window.sessionStorage.getItem(`nav-item`);
    if (!navItemJSON) {
      throw new Error('No nav-item in session storage');
    }

    const parsedConfig = JSON.parse(navItemJSON);
    if (!parsedConfig[':expiry'] || parsedConfig[':expiry'] < Math.round(Date.now() / 1000)) {
      throw new Error('Config expired');
    }

    return parsedConfig;
  } catch (e) {
    let navItemJSON = await fetch(buildNavItemUrl());
    if (!navItemJSON.ok) {
      throw new Error(`Failed to fetch nav-items`);
    }
    navItemJSON = await navItemJSON.json();
    navItemJSON[':expiry'] = Math.round(Date.now() / 1000) + 7200;
    window.sessionStorage.setItem(`nav-item`, JSON.stringify(navItemJSON));
    return navItemJSON;
  }
};

/**
 * This function retrieves a configuration value for a given environment.
 *
 * @param {string} configParam - The configuration parameter to retrieve.
 * @returns {Promise<string|undefined>} - The value of the configuration parameter, or undefined.
 */
export const getNavItems = async (configParam) => {
  const navItems = await getNavItemsJSON();
  const navItemElements = navItems.data;
  return navItemElements.find((c) => c.key === configParam)?.value;
};
