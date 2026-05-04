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
    name: "TP-Link Deco E4(2-pack) AC1200 Whole Home Mesh WiFi System",
    price: "$185.00",
    spec: "$160.00",
    cost: "$130.64",
    popular: true,
    exp: "2026-05-30",
    features: [
      "TP-Link Mesh Technology Optional Ethernet backhaul work together to link Deco units to provide seamless coverage",
      "2 Antennas (Internal) Multiple antennas form a signal-boosting array to cover more directions and large areas",
      "Dual-Band Distribute devices to different bands for optimal performance",
      "MU-MIMO Simultaneously communicates with multiple MU-MIMO clients",
      "Router Mode & Access Point Mode",
      "Dimensions mm (H x W x D) 90.7 x 90.1 x 190",
    ],
    image: "DECOE4-2P.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=Product Enquery TP Link DECOE4-2P",
    },
  },
  {
    name: "TP-Link Deco E4(3-pack) AC1200 Whole Home Mesh WiFi System",
    price: "$230.00",
    spec: "$215.00",
    cost: "$168.04",
    popular: true,
    exp: "2026-05-30",
    features: [
      "TP-Link Mesh Technology Optional Ethernet backhaul work together to link Deco units to provide seamless coverage",
      "2 Antennas (Internal) Multiple antennas form a signal-boosting array to cover more directions and large areas",
      "Dual-Band Distribute devices to different bands for optimal performance",
      "MU-MIMO Simultaneously communicates with multiple MU-MIMO clients",
      "Router Mode & Access Point Mode",
      "Dimensions mm (H x W x D) 90.7 x 90.1 x 190",
    ],
    image: "DECOE4-3P.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=Product Enquery TP Link DECOE4-3P",
    },
  },
  {
    name: 'AOC C32G2ZE 31.5" Curve 240Hz 0.5ms Gaming Monitor',
    price: "$455.00",
    spec: "$410.00",
    cost: "$324.50",
    popular: true,
    exp: "2026-04-25",
    features: [
      "240Hz Refresh Rate",
      "<1ms Response Time",
      "1500CR Curved",
      "Freesync Premium",
      "Low Input Lag & 6 Game Modes",
      "Dimensions mm (H x W x D) 524.4 x 709.9 x 244.9 inc Base",
    ],
    image: "AOCC32G2zE.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=Product Enquery AOC C32G2zE",
    },
  },
  {
    name: "Intel Business Elite Ultra 5 Desktop PC 16G Ram 500G SSD",
    price: "$1650.00",
    spec: "$1350.00",
    cost: "$1127.50",
    popular: true,
    exp: "2026-05-30",
    features: [
      "Intel Core Ultra5 225 Processor with 20M cache upto 4.9Ghz",
      "500GB NVME Gen4 M.2 SSD",
      "16GB DDR5 memory (expandable)",
      "Asus, MSI or Gigabyte H810M Motherboard with Wifi",
      "Cougar Purity with 400W PSU - Pure and elegant mini tower case with clean and minimalistic design",
      "System build, Testing & Windows installation (Windows sold separately)",
      "2 Years RTB System Warranty",
    ],
    image: "sysbeu5-16g400.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=Product Enquery sysbeu5-16g400",
    },
  },
  {
    name: 'MSI MAG 27C6F 27" Curved Rapid VA 180Hz Gaming Monitor',
    price: "$300.00",
    spec: "$260.00",
    cost: "$209.00",
    popular: true,
    exp: "2026-05-30",
    features: [
      "Rapid VA Panel – Provides 0.5ms (GtG, Min.) response time, optimizes screen colors and brightness.",
      "180Hz Refresh Rate – Respond faster with smoother frames.",
      "0.5ms (GtG, Min.) Response Time – Eliminate screen tearing and choppy frame rates.",
      "AI Vision – The new AI Vision technology can not only reveal details in dark areas but also enhance overall brightness and saturate colors.",
      "Adaptive-Sync Technology - Tear free, stutter free, fluid gaming.",
      "HDR Ready-Provide eye-catching detail through contrast and shadows adjustment.",
      "Less Blue Light – Use a software solution to reduce the light emission in the blue-violet region of the blue light spectrum.",
    ],
    image: "MOMMAG27C6F.png",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=Product Enquery MOMMAG27C6F",
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
