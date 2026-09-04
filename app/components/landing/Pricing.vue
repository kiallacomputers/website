<script setup>
defineProps(['plan'])
</script>
<template>
  <div class="kc-card flex h-full flex-col p-7">
    <div class="flex items-start justify-between gap-4">
      <div><h3 class="text-xl font-black text-[#0b1f3a]">{{ plan.name }}</h3><p class="mt-2 text-3xl font-black text-[#2367d1]">{{ plan.price }}</p></div>
      <span class="rounded-xl bg-cyan-50 p-3 text-[#2367d1]"><Icon name="uil:check-circle" class="h-6 w-6" /></span>
    </div>
    <ul class="mt-6 grid gap-3 text-sm leading-6 text-slate-600">
      <li v-for="item in plan.features" :key="item" class="flex items-start gap-3"><Icon name="uil:check" class="mt-1 h-4 w-4 shrink-0 text-cyan-600" /><span>{{ item }}</span></li>
    </ul>
    <div class="mt-auto pt-7">
      <NuxtLink :to="plan.button.link" class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#22d3ee] px-5 py-3 font-black text-[#0b1f3a] transition hover:bg-cyan-300">{{ plan.button.text }} <Icon name="uil:arrow-right" /></NuxtLink>
    </div>
  </div>
</template>
