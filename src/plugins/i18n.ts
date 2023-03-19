import enJSON from "@/locales/en-US.json";
import messages from "@intlify/unplugin-vue-i18n/messages";
import { createI18n, IntlDateTimeFormat } from "vue-i18n";
import { LOCALE, LocaleCode } from "@/const/locale";

/**
 * The schema is defined in `@/locales/en-GB.json`
 */
type MessageSchema = typeof enJSON;

const createDateTimeFormats = (): Record<LocaleCode, IntlDateTimeFormat> => {
  const defaultFormats: IntlDateTimeFormat = {
    shortest: { year: "numeric", month: "numeric", day: "numeric" },
  };

  return Object.fromEntries(
    Object.keys(LOCALE).map((locale) => [locale, defaultFormats])
  ) as Record<LocaleCode, IntlDateTimeFormat>;
};

export default createI18n<[MessageSchema], LocaleCode, false>({
  messages,
  legacy: false,
  locale: localStorage.locale || LocaleCode.EN_US,
  fallbackLocale: LocaleCode.EN_US,
  datetimeFormats: createDateTimeFormats(),
});
