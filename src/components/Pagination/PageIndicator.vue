<template>
  <div class="flex flex-row w-full px-8 justify-between">
    <PageNumber v-for="page in pages" :key="page.pageNum" :active="page.active" :number="page.pageNum" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import PageNumber from './PageNumber.vue';

const store = useStore();

const pages = computed(() => store.state.pages.pages);
</script>
