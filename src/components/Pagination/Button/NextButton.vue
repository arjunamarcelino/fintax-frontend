<template>
  <button
    class="grid grid-cols-4 justify-items-center items-center text-blue-primary hover:text-white text-base font-bold font-roboto bg-white hover:bg-blue-primary box-border border-[3px] border-blue-primary h-11 w-64 rounded-md"
    type="button"
    @click="onClickHandler"
  >
    <p class="col-start-2 col-span-2">Next</p>
    <div>
      <fa :icon="['fas', 'chevron-right']" />
    </div>
  </button>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();

const onClickHandler = () => {
  store.commit('pages/NEXT_PAGE');
};
</script>
