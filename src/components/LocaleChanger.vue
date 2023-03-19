<script setup lang="ts">
import { LOCALE, LocaleCode } from "@/const/locale";
import { setLocalStorageLocale } from "@/util/setLocalStorageLocale";
import { setDocumentLang } from "@/util/setDocumentLang";
import { Ref, watch } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

watch(locale as Ref<LocaleCode>, (newValue) => {
  setLocalStorageLocale(newValue);
  setDocumentLang(newValue);
});
</script>

<template>
  <select v-model="$i18n.locale" data-cy="locale-changer">
    <option
      v-for="locale in $i18n.availableLocales"
      :key="`locale-${locale}`"
      :value="locale"
    >
      {{ LOCALE[locale as LocaleCode].name }}
    </option>
  </select>
</template>
