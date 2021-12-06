<template>
  <button
    class="grid grid-cols-4 justify-items-center items-center text-blue-primary hover:text-white text-base font-bold font-roboto bg-white hover:bg-blue-primary box-border border-[3px] border-blue-primary h-11 w-64 rounded-md"
    type="button"
  >
    <p class="col-start-2 col-span-2">Submit</p>
    <div>
      <fa :icon="['fas', 'check']" />
    </div>
  </button>
</template>
