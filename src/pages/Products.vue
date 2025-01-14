<script setup lang="ts">
import { ref } from "vue";

const products = ref([
  {id: 0, prodid: 'sysegr5-1t16', proddesc: 'AMD Elite Gamer Series Gaming PC. AMD Ryzen 5 5500GT with integrated Radeon graphics, 1TB NVME SSD, 16G memory', prodprice: '$720.00ex', prodimage: '../assets/products/productImage_sysegr5-1t16.jpg'},
  {id: 1, prodid: 'sysaer556g-a', proddesc: 'AMD Atomic EX Gaming PC. With AMD Ryzen 5 5500GT 6 core CPU, integrated Radeon graphics for casual gaming, 1TB SSD, 16G DDR4 memory and RGB case.', prodprice: '$810.00ex', prodimage: '../assets/products/productImage_sysegr5-1t16.jpg'},
  {id: 2, prodid: 'sysegpr7-1t16', proddesc: 'AMD Elite Gamer Pro Series Gaming PC. AMD Ryzen 7 5700G CPU with integrated Radeon graphics, 1TB NVME SSD, 16G Ram.', prodprice: '$850.00ex', prodimage: '../assets/products/productImage_sysegr5-1t16.jpg'}
])

function getImageUrl(name, ext) {
  return new URL(`${products.prodimage}`, import.meta.url).href
}
</script>

<template>
  <div class="flex flex-col">
    <div class="-m-1.5 overflow-x-auto">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div class="overflow-hidden">
          <table
            class="mr-10 max-w-900px divide-y divide-gray-200 dark:divide-neutral-700">
            <thead>
              <tr>
                <td
                  scope="col"
                  class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                  Code
                </td>
                <td
                  scope="col"
                  class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"></td>
                <td
                  scope="col"
                  class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                  Description
                </td>
                <td
                  scope="col"
                  class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                  Price
                </td>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
              <tr
                class="hover:bg-gray-100 dark:hover:bg-neutral-700"
                v-for="(product, index) in products"
                :key="product.id">
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 capitalize">
                  {{ product.prodid }}
                </td>
                <td class="w-10 h-10">
                  <img :src="product.prodimage" />
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                  {{ product.proddesc }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                  {{ product.prodprice }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!--<div v-for='(product, index) in products' :key='product.id' >
    
  {{ product.prodid }} - {{ product.proddesc }} 
  </div>-->
</template>

<style></style>
