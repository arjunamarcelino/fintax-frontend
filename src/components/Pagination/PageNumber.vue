<template>
  <div
    class="flex w-9 h-9 border-2 rounded-md justify-center items-center border-gray-primary text-base font-medium hover:cursor-pointer"
    :class="{ 'bg-blue-primary text-white': active, 'text-gray-500': !active }"
    @click="onClickHandler"
  >
    {{ number }}
  </div>
</template>

<script setup="props" lang="ts">
import { defineProps } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps<{
  number: number;
  active: boolean;
}>();

const onClickHandler = () => {
  store.commit('pages/CHANGE_PAGE', props.number);
};
</script>
