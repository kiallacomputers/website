<script setup>
definePageMeta({
  layout: "landing",
});
<<<<<<< HEAD
import { useHead } from "#app";

useHead({
  title: "Kialla Computers - Services",
});
=======

>>>>>>> 1806ee6291393952912ed735a7e6686f13609e26
const pricing = [
  {
    name: "Computer Service",
    price: "$66/H",
<<<<<<< HEAD
    popular: true,
=======
    popular: false,
>>>>>>> 1806ee6291393952912ed735a7e6686f13609e26
    features: [
      "Computer Repairs & Upgrades",
      "Network Setup & Support",
      "Software Isntallation & Support",
      "IT Security Solutions",
      "Printer Setups & Configuration",
      "iPad and Tablet Setup",
    ],
    button: {
<<<<<<< HEAD
      text: "Request a Service",
      link: "computerservice",
=======
      text: "Request Servicing",
      link: "#",
>>>>>>> 1806ee6291393952912ed735a7e6686f13609e26
    },
  },
  {
    name: "Virus Cleaning",
    price: "$120/H",
<<<<<<< HEAD
    popular: true,
=======
    popular: false,
>>>>>>> 1806ee6291393952912ed735a7e6686f13609e26
    features: [
      "Backup Import Files",
      "Scan and Clean PC",
      "Malware Cleaning",
      "Reset Browser",
      "Update PC OS",
<<<<<<< HEAD
      "Install Reputable Antivirus",
    ],
    button: {
      text: "Request Virus Clean",
      link: "virusclean",
    },
  },
  {
    name: "Data Recovery",
    price: "$220/H",
    popular: true,
    features: [
      "Hard Drive & SSD Data Recovery",
      "USB & External Hard Drive Recovery",
      "Laptop & Desktop Data Retrieval",
      "Malware or Ransomware Attacks Recovery",
    ],
    button: {
      text: "Request Data Recovery",
      link: "datarecovery",
=======
      "Install reputable Antivirus",
      "Schedule Scans & Updates",
    ],
    button: {
      text: "Request Virus Clean",
      link: "/",
    },
  },
  {
    name: "Data Recovery & Storage",
    price: "$220/H",
    popular: false,
    features: [
      "Data Recovery",
      "Harddrive Datarecovery",
      "Data Storage Solution",
      "Backup Solutions",
    ],
    button: {
      text: "Request Data Recovery",
      link: "#",
>>>>>>> 1806ee6291393952912ed735a7e6686f13609e26
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

<<<<<<< HEAD
    <div class="grid md:grid-flow-col gap-10 mx-auto max-w-screen-lg mt-12">
=======
    <div
      class="grid md:grid-flow-col auto-rows-[550px] gap-10 mx-auto max-w-screen-lg mt-12"
    >
>>>>>>> 1806ee6291393952912ed735a7e6686f13609e26
      <LandingPricing v-for="item of pricing" :plan="item" />
    </div>
  </LandingContainer>
</template>
