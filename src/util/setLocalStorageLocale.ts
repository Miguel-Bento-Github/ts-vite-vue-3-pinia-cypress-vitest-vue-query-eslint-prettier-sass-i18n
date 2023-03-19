import { LocaleCode } from "@/const/locale";

export const setLocalStorageLocale = (
  localeCode?: LocaleCode,
  fallbackLocale?: LocaleCode
) => {
  localStorage.locale = localeCode || fallbackLocale || LocaleCode.EN_US;
  return localStorage.locale;
};
