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
    price: "$1450.00",
    spec: "$1320.00",
    cost: "$899.00",
    popular: true,
    exp: "2026-03-31",
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
      link: "mailto:sales@kiallacomputers.com.au?Subject=Product Enquery nbm15f13mg21",
    },
  },
  {
    name: "Asus Expertbook P1 14",
    price: "$2220.00",
    spec: "$1998.00",
    cost: "$1550.00",
    popular: true,
    exp: "2026-03-31",
    features: [
      "Intel® Core™ i5-13420H Processor 2.1 GHz (12MB Cache, up to 4.6 GHz, 8 cores, 12 Threads)",
      "Non-touch screen, 14.0-inch, FHD (1920 x 1080) 16:9, Wide view, Anti-glare display, LED Backlit, 300nits, NTSC: 45%, Screen-to-body ratio: 87%",
      "16GB DDR5 SO-DIMM",
      "512GB M.2 2280 NVMe™ PCIe® 4.0 SSD",
      "Microsoft Windows 11 pro",
      "Dimensions (W x D x H) 32.45 x 21.44 x 1.97cm",
    ],
    image: "nbasp5405csa-41.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=Product Enquery nbasp5405csa-41",
    },
  },
  {
    name: "Guardian Rysen 5 5500",
    price: "$2810.00",
    spec: "$2600.00",
    cost: "$2007.50",
    popular: true,
    exp: "2026-03-31",
    features: [
      "AMD Ryzen 5 7500F AM5 CPU with Fan 3.7Ghz (Upto 5Ghz)",
      "Nvidia RTX5060 8G Video card",
      "32GB DDR5 - 5600mhz (2x 16GB) Memory",
      "1TB NVME M.2 Gen4 SSD",
      "Asus/Gigabyte or MSI B650M Motherboard with Wifi",
      "Cougar MX220 RGB BLACK Case 4x ARGB Fans USB-C",
      "750W 80+ Bronze Power supply",
      "No Windows included (Add Windows 11 as required)",
    ],
    image: "sysgr55050-1t32.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=Product Enquery sysgr55050-1t32",
    },
  },
  {
    name: "Guardian Rysen 5 5500",
    price: "$1750.00",
    spec: "$1600.00",
    cost: "$1237.50",
    popular: true,
    exp: "2026-03-31",
    features: [
      "AMD Ryzen 5 5500 6 Core CPU Wraith cooler Upto 4.2Ghz",
      "Asus / Gigabyte AMD Radeon RX6500XT 4GB video card",
      "Crucial or similar 1TB Gen4 NVMe SSD",
      "32GB (2x16G) DDR4-3200 UDIMM Memory",
      "Cougar AIRFACE PURE RGB Black or White Gaming Case",
      "Cougar STC500 500W ATX power supply",
      "No Windows included (Add Windows 11 as required)",
    ],
    image: "sysgr565xt1t32.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=Product Enquery sysgr565xt1t32",
    },
  },
];

// Get today's date, normalized to midnight for accurate comparison
const today = new Date();
today.setHours(0, 0, 0, 0); // Set time to midnight

const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");

const formatted = `${yyyy}-${mm}-${dd}`;

const filteredItems = specials.filter((item) => {
  const itemDate = item.exp;
  // itemDate.setHours(0, 0, 0, 0); // Normalize item's date to midnight
  return itemDate >= formatted;
});

console.log("Items with exp dates greater than today:");
filteredItems.forEach((item) => console.log(item.name, item.exp, formatted));
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Specials</template>
      <template v-slot:desc>Afforable pricing. No Surprises.</template>
    </LandingSectionhead>

    <div
      class="grid justify-self-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-screen-lg mt-12"
    >
      <LandingSpecials v-for="item in filteredItems" :plan="item" />
    </div>
  </LandingContainer>
</template>
