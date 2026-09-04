<template>
  <section class="py-12">
    <div class="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <p class="kc-eyebrow">Home & Business Networking</p>
        <h1 class="kc-heading mt-3 text-4xl sm:text-5xl">Wi-Fi Mesh</h1>
        <p class="mt-5 text-lg leading-8 text-slate-600">Upgrade your home or office network with seamless whole-space coverage. A properly designed Wi-Fi Mesh system can reduce dead zones and dropouts while keeping devices connected to a strong signal as you move around.</p>
        <p class="mt-4 leading-7 text-slate-600">It’s a practical option for busy households, streaming, gaming and working from home, with the flexibility to expand coverage as your needs grow.</p>
        <div class="mt-7 grid gap-3 sm:grid-cols-2">
          <div v-for="item in ['Better whole-home coverage','Fewer Wi-Fi dead zones','Expandable as needs grow','Setup & placement advice']" :key="item" class="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 font-bold text-[#0b1f3a]"><Icon name="uil:wifi" class="text-[#2367d1]" />{{ item }}</div>
        </div>
        <NuxtLink to="/contact" class="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#22d3ee] px-6 py-3.5 font-black text-[#0b1f3a]">Ask for a quote <Icon name="uil:arrow-right" /></NuxtLink>
      </div>
      <div class="kc-gradient rounded-[2rem] p-8 sm:p-12"><img src="~/assets/img/wifi-mesh.png" alt="Wi-Fi mesh network" class="mx-auto w-full max-w-md rounded-[1.5rem] object-cover shadow-2xl" /></div>
    </div>
  </section>
</template>
