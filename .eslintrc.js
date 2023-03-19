/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": "warn",
    "no-debugger": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@tanstack/query/exhaustive-deps": "off",
  },
  overrides: [
    {
      files: ["**/__tests__/*.cy.ts", "cypress/integration/**.cy.ts"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
};
