<script setup>
definePageMeta({
  layout: "landing",
});
import { useHead } from "#app";

useHead({
  title: "Kialla Computers - Services",
});
const Specials = [
  {
    name: "MSI Modern 15 F13MG-218AU Notebook",
    price: "$1150.00",
    popular: true,
    features: [
      "Intel i7-1355U",
      "15.6inch Screen",
      "16G DDR Memory",
      "512G SSD Hard Drive",
      "Windows 11",
      "",
    ],
    image: "nbm15f13mg218.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=NBM15F13MG218",
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Services</template>
      <template v-slot:desc>Simple & Afforable pricing. No Surprises.</template>
    </LandingSectionhead>

    <div class="grid md:grid-flow-col gap-10 mx-auto max-w-screen-lg mt-12">
      <LandingPricing v-for="item of specials" :plan="item" />
    </div>
  </LandingContainer>
</template>
