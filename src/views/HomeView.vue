<script setup lang="ts">
import { useQuestionStepQuery } from "@/queries/useProductQuery";
/**¨
 * To test an HTTP response status code simply pass the code to the method argument
 * eg: @method useQuestionStepQuery(404); // Status Code: 🔴 401
 */
const { isLoading, isError, data } = useQuestionStepQuery();
</script>

<template>
  <h1>{{ $t("welcome") }}</h1>
  <p :aria-busy="isLoading">
    <TransitionGroup name="content">
      <span key="loading" v-if="isLoading"> {{ $t("loading") }}</span>
      <div key="error" v-if="isError">{{ $t("error") }}</div>
      <span key="not-loading" data-cy="home-content" v-else>{{
        data?.message
      }}</span>
    </TransitionGroup>
  </p>
</template>

<style lang="scss" scoped>
.content-move,
.content-enter-active {
  transition: all 0.5s ease;
}

.content-leave-active {
  transition-duration: 0.25s;
}

.content-enter-from,
.content-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.content-leave-active,
.content-enter-active {
  position: absolute;
}
</style>
