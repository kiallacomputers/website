<template>
  <main>
    <PageHero eyebrow="Small Business IT" title="Practical IT support for small businesses and home offices." text="Technology should help your business, not become another problem to manage. Kialla Computers provides sensible assistance without enterprise-sized complexity." />
    <div class="kc-page">
      <div class="max-w-3xl"><p class="kc-eyebrow">Business support</p><h2 class="kc-title mt-2 text-3xl">Support that fits smaller organisations.</h2><p class="mt-4 leading-7 text-slate-600">We can assist with everyday computer issues, device setup, Microsoft 365, printers, networking and workstation maintenance. The focus is on keeping things understandable and reliable.</p></div>
      <div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"><div v-for="item in items" :key="item.title" class="kc-panel p-6"><h3 class="text-lg font-black text-[#0b1f3a]">{{ item.title }}</h3><p class="mt-3 text-sm leading-6 text-slate-600">{{ item.text }}</p></div></div>
      <div class="mt-10 rounded-2xl bg-[#0b1f3a] p-7 md:p-9 text-white flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><h2 class="text-2xl font-black">Need help with an IT issue?</h2><p class="mt-2 text-slate-300">Tell us what you are trying to solve and we’ll discuss the practical options.</p></div><NuxtLink to="/contact" class="kc-btn-primary">Contact Kialla Computers</NuxtLink></div>
    </div>
  </main>
</template>
<script setup>
useHead({ title: 'Small Business IT Support' })
const items=[
 {title:'Workstation support',text:'Setup, troubleshooting and maintenance for business desktops and laptops.'},
 {title:'Microsoft 365',text:'Practical help with accounts, Outlook, Microsoft apps and common configuration issues.'},
 {title:'Networking & Wi-Fi',text:'Assistance with small-office connectivity, routers, switches and wireless problems.'},
 {title:'Printers & peripherals',text:'Setup and troubleshooting for printers, screens, docks and other workplace devices.'},
 {title:'New staff setup',text:'Get new users and computers prepared with the accounts and applications they need.'},
 {title:'General IT advice',text:'Clear guidance when you need to replace, improve or simplify your technology.'}
]
</script>
