<template>
  <div class="flex items-center justify-center">
    <div class="flex items-center w-[900px] mt-2">
      <router-link to="/">
        <img
          src="../assets/kialla_logo_small.png"
          class="h-14 md:h-20 cursor-pointer hover:opacity-60 transition-all"
        />
      </router-link>
      <div class="grow"></div>
      <router-link to="/services">
        <div
          class="px-4 md:text-lg cursor-pointer hover:opacity-70 transition-all .inter text-blue-900"
        >
          Services
        </div>
      </router-link>
      <div class=""></div>
      <router-link to="/products">
        <div
          class="px-4 md:text-lg cursor-pointer hover:opacity-70 transition-all text-blue-900"
        >
          Products
        </div>
      </router-link>
      <div class=""></div>
      <router-link to="/contact">
        <div
          class="px-2 md:text-lg cursor-pointer hover:opacity-70 transition-all text-blue-900"
        >
          Contact Us
        </div>
      </router-link>
    </div>
  </div>
</template>
