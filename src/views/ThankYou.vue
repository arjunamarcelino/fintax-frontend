<template>
  <div class="flex flex-col w-screen min-h-screen items-center space-y-10 md:space-y-20 overflow-hidden relative">
    <!-- Header component begin -->
    <Header />
    <Circle />
    <!-- Header component end -->
    <!-- Floating Box component begin -->
    <FloatingBox class="py-10 md:py-20 md:w-8/12">
      <img class="w-48 md:w-auto" src="../assets/thank-you-phone.svg" />
      <h2 class="font-bold font-roboto text-xl md:text-4xl text-blue-primary">Thank You!</h2>
      <div class="font-normal font-roboto text-xs md:text-sm text-gray-secondary">
        Your data has been saved at Intern PMK ITB
      </div>
    </FloatingBox>
    <!-- Floating Box component end -->
    <!-- Contact Us component begin -->
    <Footer />
    <!-- Contact Us component end -->
  </div>
</template>

<script setup lang="ts">
import Header from '../components/UI/Header.vue';
import Footer from '../components/UI/Footer.vue';
import FloatingBox from '../components/UI/FloatingBox.vue';
import Circle from '../components/UI/Circle.vue';
</script>
