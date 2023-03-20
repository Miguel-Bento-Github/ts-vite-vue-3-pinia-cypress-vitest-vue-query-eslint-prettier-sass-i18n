# Welcome to our open-source repository!

We've developed a full-fledged web application using the latest technologies and tools. Our project is built with **TypeScript**, **Vite**, **Vue 3**, **Vue Router**, **Pinia**, **Cypress**, **Vitest**, **TanStack Query**, **ESLint**, **Prettier**, **Sass**, and **vue i18n**.

**TypeScript** brings static typing to JavaScript, making it more robust and maintainable. We've leveraged **Vite** to ensure fast development and quick builds, making it easier for developers to work on the project. **Vue 3**, **Vue Router**, and **Pinia** have been used together to create an efficient and responsive frontend framework, along with a robust state management solution.

We've used **Cypress** and **Vitest** to perform automated end-to-end testing, ensuring the quality of our application. **TanStack Query** has been incorporated to provide efficient and convenient data fetching and management. We've also used **ESLint** and **Prettier** to ensure our code adheres to industry-standard practices, making it more consistent, reliable, and maintainable.

In terms of styling, we've used **Sass** to write modular and scalable CSS code. And with **vue i18n**, we've made our application easily translatable, allowing users to switch between different languages.

Our repository is built with the latest technology and best practices to deliver a highly scalable and maintainable web application. Our code is clean, robust, and efficient, ensuring the highest quality and performance. If you're interested in contributing, please feel free to check out our repository!

## Tech

| Logo                                                                                                                       | Name            | Link                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------ |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript logo"> | Typescript      | [https://github.com/microsoft/TypeScript](https://github.com/microsoft/TypeScript)   |
| <img height="70" src="https://vitejs.dev/logo.svg" alt="Vite logo">                                                        | Vite            | [https://github.com/vitejs/vite](https://github.com/vitejs/vite)                     |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue 3 logo">             | Vue 3           | [https://github.com/vuejs/core](https://github.com/vuejs/core)                       |
| <img height="70" src="https://vitest.dev/logo.svg" alt="Vitest logo">                                                      | Vitest          | [https://github.com/vitest-dev/vitest](https://github.com/vitest-dev/vitest)         |
| <img height="70" src="https://www.cypress.io/images/layouts/navbar-brand.svg" alt="Cypress logo">                          | Cypress         | [https://github.com/cypress-io/cypress](https://github.com/cypress-io/cypress)       |
| <img height="70" src="https://pinia.vuejs.org/logo.svg" alt="Pinia logo">                                                  | Pinia           | [https://github.com/vuejs/pinia](https://github.com/vuejs/pinia)                     |
| <img height="70" src="https://vue-query.vercel.app/vue-query.svg" alt="TanStack Query logo">                               | TanStack Query  | [https://github.com/tanstack/query](https://github.com/tanstack/query)               |
| <img height="70" src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" alt="ESLint logo">              | ESLint          | [https://github.com/eslint/eslint](https://github.com/eslint/eslint)                 |
| <img height="70" src="https://prettier.io/icon.png" alt="Prettier logo">                                                   | Prettier        | [https://github.com/prettier/prettier](https://github.com/prettier/prettier)         |
| <img height="70" src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" alt="Sass logo">                           | Sass            | [https://github.com/sass/sass](https://github.com/sass/sass)                         |
| <img height="70" src="https://vue-i18n.intlify.dev/vue-i18n-logo.png" alt="Vue i18n logo">                                 | Vue i18n        | [https://github.com/intlify/vue-i18n-next](https://github.com/intlify/vue-i18n-next) |

| Script         | Description                                                                      |
| -------------- | -------------------------------------------------------------------------------- |
| `build`        | Compiles TypeScript files and builds the production-ready application with Vite. |
| `build:watch`  | Builds the application in watch mode, with minification disabled.                |
| `cy:e2e`       | Starts the development server and runs Cypress end-to-end tests.                 |
| `cy:component` | Opens Cypress for component testing.                                             |
| `test:unit`    | Runs unit tests with Vitest.                                                     |
| `lint`         | Runs ESLint on all relevant files, fixing errors and caching results.            |
| `dev`          | Starts the development server.                                                   |
| `i18n:report`  | Generates a report of translation keys used in Vue files and language files.     |
| `prod:preview` | Previews the production build on port 8261.                                      |

<pre>
.
├── README.md
├── cypress
│ ├── downloads
│ ├── e2e
│ │ └── home.cy.ts
│ ├── fixtures
│ │ └── data.json
│ ├── support
│ │ ├── commands.ts
│ │ ├── component-index.html
│ │ ├── component.ts
│ │ └── e2e.ts
│ └── tsconfig.json
├── cypress.config.ts
├── cypress.d.ts
├── env.d.ts
├── index.html
├── package.json
├── public
│ ├── android-icon-144x144.png
│ ├── android-icon-192x192.png
│ ├── android-icon-36x36.png
│ ├── android-icon-48x48.png
│ ├── android-icon-72x72.png
│ ├── android-icon-96x96.png
│ ├── apple-icon-114x114.png
│ ├── apple-icon-120x120.png
│ ├── apple-icon-144x144.png
│ ├── apple-icon-152x152.png
│ ├── apple-icon-180x180.png
│ ├── apple-icon-57x57.png
│ ├── apple-icon-60x60.png
│ ├── apple-icon-72x72.png
│ ├── apple-icon-76x76.png
│ ├── apple-icon-precomposed.png
│ ├── apple-icon.png
│ ├── browserconfig.xml
│ ├── favicon-16x16.png
│ ├── favicon-32x32.png
│ ├── favicon-96x96.png
│ ├── favicon.ico
│ ├── manifest.json
│ ├── ms-icon-144x144.png
│ ├── ms-icon-150x150.png
│ ├── ms-icon-310x310.png
│ └── ms-icon-70x70.png
├── src
│ ├── App.vue
│ ├── components
│ │ ├── LocaleChanger.vue
│ │ └── **tests**
│ │ └── LocaleChanger.cy.ts
│ ├── components.d.ts
│ ├── const
│ │ └── locale.ts
│ ├── keycloak.ts
│ ├── locales
│ │ ├── en-US.json
│ │ └── zh-CN.json
│ ├── main.ts
│ ├── plugins
│ │ ├── i18n.ts
│ │ ├── queryClient.ts
│ │ └── router.ts
│ ├── queries
│ │ ├── QueryKey.enum.ts
│ │ └── useProductQuery.ts
│ ├── router
│ │ ├── routes
│ │ │ ├── homeRoute.ts
│ │ │ ├── index.ts
│ │ │ └── notFound.ts
│ │ └── routes.enum.ts
│ ├── services
│ │ └── http
│ │ ├── README.md
│ │ ├── client
│ │ │ └── customFetch.ts
│ │ ├── errors
│ │ │ └── ResponseStatusError.ts
│ │ ├── index.ts
│ │ ├── methods
│ │ │ ├── get.ts
│ │ │ ├── index.ts
│ │ │ └── post.ts
│ │ └── types
│ │ ├── APIResponse.ts
│ │ ├── Endpoint.ts
│ │ ├── RequestOptions.ts
│ │ └── index.ts
│ ├── shims-vue.d.ts
│ ├── styles
│ │ ├── \_default.scss
│ │ ├── \_remedy.scss
│ │ └── boot.scss
│ ├── util
│ │ ├── setDocumentLang.ts
│ │ └── setLocalStorageLocale.ts
│ └── views
│ ├── 404.vue
│ └── HomeView.vue
├── tsconfig.json
├── vite-keycloak.config.js
└── vite.config.ts
</pre>
