<template>
  <main>
    <PageHero eyebrow="Computer Repairs" title="Get your computer working properly again." text="Straightforward troubleshooting and repair for desktops and laptops, with clear advice before unnecessary money is spent." />
    <div class="kc-page grid gap-8 lg:grid-cols-[1fr_.72fr]">
      <section><p class="kc-eyebrow">What we can help with</p><h2 class="kc-title mt-2 text-3xl">Common computer problems</h2><div class="mt-6 grid gap-4 sm:grid-cols-2"><div v-for="problem in problems" :key="problem" class="kc-panel p-5 flex gap-3"><span class="text-cyan-600 font-black">✓</span><span class="font-bold text-[#0b1f3a]">{{ problem }}</span></div></div></section>
      <aside class="kc-panel p-7 self-start"><p class="kc-eyebrow">Simple process</p><h2 class="kc-title mt-2 text-2xl">We start with the problem.</h2><p class="mt-4 leading-7">Describe what has been happening, when it started and anything that changed beforehand. We can then work through diagnosis and the most sensible next step.</p><NuxtLink to="/contact" class="kc-btn-primary mt-6">Ask about a repair</NuxtLink></aside>
    </div>
  </main>
</template>
<script setup>
useHead({ title: 'Computer Repairs' })
const problems=['Computer will not start','Slow performance','Freezing or crashing','Storage problems','Windows issues','Overheating or noise','Internet or Wi-Fi issues','Software problems','Virus or malware concerns','Upgrade advice']
</script>
