<script setup lang="ts">
import { ref } from "vue";

const products = ref([
  {
    id: 0,
    prodid: "officepackage1",
    proddesc:
      "Complete office PC package, AMD Ryzen 5500 CPU, MSI B450M Motherboard, 16GB Corsair DD4 Memory, 1TB Gen4 NVMe SSD Hard Drive, Cougar Purity Black Case, 650W power Supply, Shintaro Mouse & Keyboard, AOC 24inch 100Hz Monitor, Windows 11 Pro.",
    prodprice: "$830.00ex",
    prodimage: "/products/productImage_officepackage1.jpg",
  },
]);
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
                  <div
                    class="flex flex-row items-center justify-center py-3 text-start text-black uppercase"
                  >
                    <div class="flex basis-1/4 justify-center">Code</div>
                    <div class="flex basis-1/5 justify-center">&nbsp;</div>
                    <div class="flex basis-1/2">Description</div>
                    <div class="flex basis-1/5 justify-center">Price</div>
                  </div>
                  <div
                    class="flex flex-row items-center justify-center w-fullpx-6 m-w-800px py-3 text-start text-black uppercase"
                    v-for="product in products"
                    :key="product.id"
                  >
                    <div class="flex items-center basis-1/4 justify-center">
                      {{ product.prodid }}
                    </div>
                    <div class="flex basis-1/5 items-center justify-center">
                      <img :src="product.prodimage" width="100" />
                    </div>
                    <div class="flex basis-1/2">
                      {{ product.proddesc }}
                    </div>
                    <div class="flex basis-1/5 justify-center">
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
