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
    name: 'AOC C32G2e 31.5" Curve 240Hz 0.5ms Gaming Monitor',
    price: '$455.00',
    spec: '$410.00
    cost: '$324.50',
    popular: true,
    exp: '2026-04-25',
    features: [
      '240Hz Refresh Rate',
      '<1ms Response Time',
      '1500CR Curved',
      'Freesync Premium',
      'Low Input Lag & 6 Game Modes',
      'Dimensions (H x W x D) 524.4 x 709.9 x 244.9 inc Base',
    ],
    image: 'AOCC32G2zE.jpg',
    button: {
      text: 'Enquire',
      link: 'mailto:sales@kiallacomputers.com.au?Subject=Product Enquery AOC C32G2zE',
    },
  },
  {
    name: "Lenovo thinkbook 16 G6 I5,16inch,16G,512GHDD,W11P",
    price: "$1495.00",
    spec: "$1280.00",
    cost: "$1068.10",
    popular: true,
    exp: "2026-04-30",
    features: [
      "Intel® Core™ i5-1335U Processor 4.6GHz",
      "16.0inch, WUXGA (1920x1200) IPS 300nits Anit-Glare 45% NTSC",
      "16GB DDR5 SO-DIMM",
      "512GB M.2 2280 NVMe™ PCIe® 4.0 SSD, Capable of two NVMe Drives",
      "Microsoft Windows 11 pro",
      "Dimensions (W x D x H) 32.45 x 21.44 x 1.97cm",
    ],
    image: "nbl21kh00B6au.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=Product Enquery nbl21kh00B6au",
    },
  },
  {
    name: "Guardian Ryzen 5 5500",
    price: "$2810.00",
    spec: "$2500.00",
    cost: "$2007.50",
    popular: true,
    exp: "2026-04-30",
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
    spec: "$1480.00",
    cost: "$1237.50",
    popular: true,
    exp: "2026-04-30",
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
