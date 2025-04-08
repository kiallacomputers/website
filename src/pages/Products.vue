<script setup lang="ts">
import ProductCard from "../components/ProductCard.vue";
import products from "../stores/products";

import { ref } from "vue";

function calculatePrecentage(percent, num) {
  let discount = num * (percent / 100);
  let newprice = num - discount;
  return newprice.toFixed(0);
}
</script>

<template>
  <div class="flex flex-wrap items-center justify-center">
    <div
      class="flex items-center justify-center min-w-[350px] px-2 py-2 text-start text-black uppercase"
      v-for="product in products"
      :key="product.id"
    >
      <!-- Product Card-->
      <div
        class="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
      >
        <a
          class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            class="peer absolute top-0 right-0 h-full w-full object-cover"
            :src="product.prodimage"
          />
          <div
            class="absolute bottom-0 mb-4 flex space-x-4 w-full justify-center"
          ></div>
          <span
            v-if="product.prodpercentoff"
            class="absolute top-0 left-0 m-2 rounded-full bg-red-600 px-2 text-center text-sm font-medium text-white"
            >{{ product.prodpercentoff }}% OFF</span
          >
        </a>
        <div class="mt-4 px-5 pb-5">
          <div class="text-center">
            <a href="#">
              <h5 class="text-xl tracking-tight text-slate-900">
                {{ product.prodtitle }}
              </h5>
            </a>
          </div>
          <div
            class="mt-2 mb-5 flex flex-col items-center justify-between text-sm"
          >
            <a v-for="desc in product.proddesc">
              {{ desc }}
            </a>
          </div>
          <div class="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span
                v-if="product.prodpercentoff"
                class="text-2xl font-bold text-slate-900 mr-1"
                >${{
                  calculatePrecentage(product.prodpercentoff, product.prodprice)
                }}</span
              >
              <span
                v-if="!product.prodpercentoff"
                class="text-2xl font-bold text-slate-900 mr-1"
                >${{ product.prodprice }}</span
              >
              <span
                v-if="product.prodpercentoff"
                class="text-base font-bold text-red-600 line-through"
                >${{ product.prodprice }}</span
              >
            </p>
          </div>
          <div class="mb-2 text-center">Lead time 2-3 days for building</div>
          <a
            href="/contact"
            class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <!--<svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>-->
            Call to Order</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
