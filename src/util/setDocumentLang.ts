import { LOCALE, LocaleCode } from "@/const/locale";

export const setDocumentLang = (localeCode: LocaleCode) => {
  const htmlElement = document.documentElement;
  htmlElement.setAttribute("lang", localeCode);

  if (LOCALE[localeCode].dir !== "ltr") {
    htmlElement.setAttribute("dir", LOCALE[localeCode].dir);
  } else {
    htmlElement.removeAttribute("dir");
  }
};
