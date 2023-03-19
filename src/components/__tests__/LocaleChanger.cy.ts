import { createPinia } from "pinia";
import i18n from "@/plugins/i18n";
import LocaleChanger from "../LocaleChanger.vue";
import { LocaleCode } from "@/const/locale";

describe("Locale Changes", () => {
  it("Should change locale to 中文", () => {
    cy.mount(LocaleChanger, {
      extensions: { use: [i18n, createPinia()] },
    });

    cy.dataCy("locale-changer")
      .get("select")
      .select("中文")
      .should("have.value", LocaleCode.ZH_CN);
  });
});
