<script setup lang="ts">
import { ref } from "vue";

const products = ref([
  {
    id: 0,
    prodid: "sysegr5-1t16",
    proddesc:  "AMD Elite Gamer Series Gaming PC. AMD Ryzen 5 5500GT with integrated Radeon graphics, 1TB NVME SSD, 16G memory",
    prodprice: "$720.00ex",
    prodimage: "/products/productImage_sysegr5-1t16.jpg",
  },
  {
    id: 1,
    prodid: "sysaer556g-a",
    proddesc: "AMD Atomic Gaming PC. With AMD Ryzen 5 5500GT 6 core CPU, integrated Radeon graphics for casual gaming, 1TB SSD, 16G DDR4 memory and RGB case.",
    prodprice: "$810.00ex",
    prodimage: "/products/productImage_sysaer556g-a.jpg",
  },
  {
    id: 2, 
    prodid: 'sysegpr7-1t16', 
    proddesc: 'AMD Elite Gamer Pro Series Gaming PC. AMD Ryzen 7 5700G CPU with integrated Radeon graphics, 1TB NVME SSD, 16G Ram.', 
    prodprice: '$850.00ex', 
    prodimage: '/products/productImage_sysegpr7-1t16.jpg'
  },
  {
    id: 3, 
    prodid: 'MOAO24B20JH2', 
    proddesc: 'AOC 24B20JH2 23.8" IPS FHD Monitor 100Hz VGA HDMI', 
    prodprice: '$136.00ex', 
    prodimage: '/products/productImage_MOAO24B20JH2.jpg'
  },
])

</script>

<template>
  <div class="flex flex-col">
    <div class="-m-1.5 overflow-x-auto">
      <div class="p-1.5 min-w-full inline-block align-middle items-center">
        <div class="flex items-center justify-center overflow-hidden">
          <div class="flex items-center justify-center font-quest">
            <div class="flex items-center w-[900px] mt-2">
              <div class="flex flex-col mt-4 w-full">
                <div class="mb-10 mt-10 w-full">
                  <div class="flex flex-row items-center justify-center py-3 text-start text-black uppercase">
                    <div class="flex basis-1/2 border-2">
                      Code
                    </div>
                    <div class="flex basis-1/2 border-2">
                      &nbsp;
                    </div>
                    <div class="flex basis-1/2 border-2">
                      Description
                    </div>
                    <div class="flex basis-1/2 border-2">
                      Price
                    </div>
                  </div>
                  <div class="flex flex-row items-center justify-center w-fullpx-6 m-w-800px py-3 text-start text-black uppercase" v-for="product in products" :key="product.id">
                    <div class="flex items-center basis-1/2 border-2">
                      {{ product.prodid }}
                    </div>
                    <div class="flex border-2">
                      <img :src="product.prodimage" width="180" />
                    </div>
                    <div class="flex basis-1/2 border-2">
                      {{ product.proddesc }}
                    </div>
                    <div class="flex basis-1/2 border-2">
                      {{ product.prodprice }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
   <!--       
          <table
            class="max-w-900px divide-y divide-gray-200 dark:divide-neutral-700 md:table-fixed">
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
                  class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 w-36">
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
                v-for="product in products"
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
          </table>-->
        </div>
      </div>
    </div>
  </div>

</template>

<style></style>
