<template>
  <template v-if="currentActivePageNumber === 1">
    <div class="flex justify-center md:justify-end items-center w-full px-8">
      <NextButton key="next-button" />
    </div>
  </template>
  <template v-else-if="currentActivePageNumber === MAX_PAGE_NUMBER">
    <div class="flex justify-between items-center w-full px-8">
      <BackButton key="back-button" />
      <SubmitButton key="submit-button" />
    </div>
  </template>
  <template v-else>
    <div class="flex justify-between items-center w-full px-8">
      <BackButton key="back-button" />
      <NextButton key="next-button" />
    </div>
  </template>
</template>

<script setup lang="ts">
import NextButton from './Button/NextButton.vue';
import SubmitButton from './Button/SubmitButton.vue';
import BackButton from './Button/BackButton.vue';
import { MAX_PAGE_NUMBER } from '../../constants';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const currentActivePageNumber = computed(() => store.state.pages.currentActivePageNumber);
</script>
