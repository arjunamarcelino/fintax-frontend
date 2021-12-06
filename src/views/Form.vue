<template>
  <div
    id="form-page"
    class="flex flex-col justify-center w-screen items-center space-y-10 md:space-y-20 overflow-hidden relative"
  >
    <Header />
    <Circle />
    <FloatingBox class="pt-7 pb-11 md:w-10/12">
      <PageIndicator />
      <template v-if="currentActivePageNumber === 1">
        <Form1 key="form1" />
      </template>
      <template v-else-if="currentActivePageNumber === 2">
        <Form2 key="form2" />
      </template>
      <template v-else>
        <Form3 key="form3" />
      </template>
      <FormNavigateButtonGroup />
    </FloatingBox>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Header from '../components/UI/Header.vue';
import Footer from '../components/UI/Footer.vue';
import FloatingBox from '../components/UI/FloatingBox.vue';
import PageIndicator from '../components/Pagination/PageIndicator.vue';
import FormNavigateButtonGroup from '../components/Pagination/FormNavigateButtonGroup.vue';
import Circle from '../components/UI/Circle.vue';
import Form1 from '../components/UI/Form1.vue';
import Form2 from '../components/UI/Form2.vue';
import Form3 from '../components/UI/Form3.vue';
import { useStore } from 'vuex';

const store = useStore();

const currentActivePageNumber = computed(() => store.state.pages.currentActivePageNumber);
</script>

<style>
input[type='text'],
input[type='number'],
input[type='date'] {
  width: 100%;
  height: 1.6rem;
}

form select {
  width: 100%;
}
</style>
