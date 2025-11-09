<script setup>
definePageMeta({
  layout: "landing",
});
import { useHead } from "#app";

useHead({
  title: "Kialla Computers - Specials",
});
const specials = [
  {
    name: "MSI Modern 15 F13MG-218AU",
    price: "$1180.00",
    spec: "$1060.00",
    cost: "$825.00",
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
  {
    name: "Asus Expertbook P1",
    price: "$1250.00",
    spec: "$1125.00",
    cost: "$875.00",
    popular: true,
    features: [
      "Intel i5-13420H",
      "15.6inch Screen",
      "16G DDR Memory",
      "512G SSD Hard Drive",
      "Windows 11 pro",
      "",
    ],
    image: "nbasp1503cva-50.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=NBM15F13MG218",
    },
  },
  {
    name: "AOC 34in 3K Curved Monitor",
    price: "$480.00",
    spec: "$430.00",
    cost: "$335.00",
    popular: true,
    features: [
      "Screen Szie 34inch",
      "Flat/Curved : Curved",
      "Panel Resolution : 3440x1440",
      "Max Refresh Rate : 180Hz",
      "Inputs : HMDI 2.0 x 2, DisplayPort 1.4 x 1",
      "Audio : Headphone (3.5mm)",
    ],
    image: "moaocu34g4.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=NBM15F13MG218",
    },
  },
  {
    name: "Asus Expoertbook P5",
    price: "$2220.00",
    spec: "$1998.00",
    cost: "$1550.00",
    popular: true,
    features: [
      "Intel i5-13420H",
      "14inch Screen",
      "16G DDR Memory",
      "512G M.2 NVME SSD Hard Drive",
      "Windows 11 pro",
      "",
    ],
    image: "nbasp5405csa-41.jpg",
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
      <template v-slot:title>Specials</template>
      <template v-slot:desc>Afforable pricing. No Surprises.</template>
    </LandingSectionhead>

    <div
      class="grid sm:justify-self-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-auto max-w-screen-lg mt-12 content-center"
    >
      <LandingSpecials v-for="item of specials" :plan="item" />
    </div>
  </LandingContainer>
</template>
