<script setup>
import { useHead } from "#app";

useHead({
  title: "Kialla Computers - Solutions",
});

definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSolution />
  </LandingContainer>
</template>
