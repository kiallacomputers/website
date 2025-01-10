<script>
const items = [
    {
      prodid: 'sys15mb',
      description: 'Computer',
      price: '$1200.00',
    },
    // ... more items
  ]
</script>
<template>
    <div class="flex flex-col mx-8 lg:mr-8 lg:ml-8 items-center justify-center">
      <div class="w-[900px] h-[156px] text-center justify-center">
        <p class="font-bold text-4xl font-quest text-[#144C84] mt-10 capitalize">
          Products
        </p>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div class="flex items-center w-[900px] mt-2 justify-center">
        <div class="flex flex-col mt-10 w-full">
          <v-data-table :items="items"></v-data-table>
        </div>
      </div>
    </div>
  </template>
  <style>
  </style>