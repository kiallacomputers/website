<template>
  <div class="flex items-center justify-center">
    <div class="flex items-center w-[900px] mt-2">
      <router-link to="/">
        <img
          src="../assets/KC-Logo-3K.svg"
          class="h-14 md:h-20 cursor-pointer hover:opacity-60 transition-all" />
      </router-link>
      <div class="grow"></div>
      <router-link to="/services">
        <div
          class="px-4 md:text-lg cursor-pointer hover:opacity-70 transition-all .inter">
          Services
        </div>
      </router-link>
      <div class="grow"></div>
      <router-link to="/products">
        <div
          class="px-4 md:text-lg cursor-pointer hover:opacity-70 transition-all">
          Products
        </div>
      </router-link>
      <div class="grow"></div>
      <router-link to="/contact">
        <div
          class="px-2 md:text-lg cursor-pointer hover:opacity-70 transition-all">
          Contact Us
        </div>
      </router-link>
    </div>
  </div>
</template>
