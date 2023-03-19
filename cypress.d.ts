import { mount } from "cypress/vue";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: Mount<typeof mount>;
      /**
       * Custom command to select DOM element by `data-cy` attribute.
       * @param value The `data-cy` value
       */
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
      /**
       * Custom command to access the Vue Test Utils wrapper in component testing.
       */
      vueWrapper(): Chainable<Cypress.Cypress["vueWrapper"]>;
    }
  }
}
