<script setup>
import { useHead } from '#app';

useHead({
  title: 'Kialla Computers - Contact Us',
});

definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Contact</template>
      <template v-slot:desc>We are here to help.</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-8 mx-auto max-w-5xl mt-12">
      <div class="kc-panel p-7 sm:p-8">
        <h2 class="font-black text-2xl text-Primary">
          Contact Kialla Computers
        </h2>
        <p class="text-lg leading-relaxed text-PrimaryLight mt-3">
          Have a question or need help? I am here to help. Fill up the form or
          send email.
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-PrimaryLight">
            <Icon class="text-IconColor w-4 h-4" name="uil:map-marker" />
            <span>Kialla, Victoria, Australia</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-PrimaryLight">
            <Icon class="text-IconColor w-4 h-4" name="uil:envelope" /><a
              href="mailto:sales@kiallacomputers.com.au"
              >sales@kiallacomputers.com.au</a
            >
          </div>
          <div class="flex items-center mt-2 space-x-2 text-PrimaryLight">
            <Icon class="text-IconColor w-4 h-4 mr-2" name="uil:phone" />
            0488 736 282
          </div>
        </div>
      </div>
      <div class="kc-panel p-7 sm:p-8">
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>
</template>
