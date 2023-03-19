// https://on.cypress.io/configuration

import "./commands";

import { mount } from "cypress/vue";

// Import style sheets
import "@/styles/boot.scss";

// Custom mount command that exposes the Vue Test Utils wrapper
// https://docs.cypress.io/guides/component-testing/custom-mount-vue
Cypress.Commands.add("mount", (...args) => {
  return mount(...args).then((wrapper) => {
    return cy.wrap(wrapper).as("vue");
  });
});

// Custom command that accesses the Vue Test Utils wrapper
Cypress.Commands.add("vueWrapper", () => {
  return cy.get<Cypress.Cypress["vueWrapper"]>("@vue");
});
