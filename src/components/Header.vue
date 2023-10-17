<template>
  <div class="flex items-center justify-center">
    <div class="flex items-center w-[900px] mt-2">
      <router-link to="/">
        <img
          src="../assets/KC-Logo-3K.svg"
          class="h-20 cursor-pointer hover:opacity-70 transition-all"
        />
      </router-link>
      <div class="grow"></div>
      <router-link to="/services">
        <div
          class="px-4 font-medium text-lg cursor-pointer hover:opacity-70 transition-all"
        >
          Services
        </div>
      </router-link>
      <router-link to="/contact">
        <div
          class="px-4 font-medium text-lg cursor-pointer hover:opacity-70 transition-all"
        >
          Contact Us
        </div>
      </router-link>
    </div>
  </div>
</template>
