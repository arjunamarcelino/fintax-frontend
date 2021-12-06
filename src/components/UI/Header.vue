<template>
  <header class="flex flex-col w-screen relative overflow-hidden">
    <div class="flex flex-col mx-auto w-full justify-center items-center space-y-5 max-w-screen-xl z-10">
      <img class="h-14 w-14 mt-16 md:mt-24" :src="logo" alt="Logo PMB PMK ITB 2021" />
      <h1 class="font-roboto font-bold text-2xl text-blue-primary md:text-5xl md:leading-[56px]">PMB PMK ITB 2021</h1>
    </div>
  </header>
</template>

<script setup lang="ts">
import logo from '../../assets/logo.png';
</script>
