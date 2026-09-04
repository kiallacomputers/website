<template>
  <section class="relative overflow-hidden bg-[#0b1f3a] text-white">
    <div class="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_85%_20%,rgba(39,182,214,.45),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(35,103,209,.45),transparent_35%)]"></div>
    <div class="relative max-w-7xl mx-auto px-4 py-14 md:py-20">
      <p class="text-cyan-300 text-xs font-black uppercase tracking-[.2em]">{{ eyebrow }}</p>
      <h1 class="mt-4 max-w-4xl text-4xl md:text-6xl font-black tracking-tight leading-[1.03]">{{ title }}</h1>
      <p class="mt-5 max-w-2xl text-base md:text-lg leading-8 text-slate-300">{{ text }}</p>
      <div v-if="$slots.actions" class="mt-8 flex flex-wrap gap-3"><slot name="actions" /></div>
    </div>
  </section>
</template>

<script setup>
defineProps({ eyebrow: String, title: String, text: String })
</script>
