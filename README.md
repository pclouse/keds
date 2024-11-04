# Kadro Edge Delivery Services Test Site
This project is for testing EDS deployments.

## Documentation
https://experienceleague.adobe.com/developer/commerce/storefront/

## Environments
- Preview: https://main--keds--pclouse.aem.page/
- Live: https://main--keds--pclouse.aem.live/

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Add your Adobe Commerce SaaS configuration in the `configs.xlsx` sheet in your content repository.
1. Install all dependencies using `npm i`.
1. Start AEM Proxy: `npm run up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)
