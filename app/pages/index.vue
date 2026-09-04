<template>
  <main>
    <section class="relative overflow-hidden bg-[#0b1f3a] text-white">
      <div class="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_85%_20%,rgba(39,182,214,.45),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(35,103,209,.45),transparent_35%)]"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-14 md:py-20 grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
        <div>
          <p class="text-cyan-300 text-xs font-black uppercase tracking-[.2em]">Kialla Computers</p>
          <h1 class="mt-4 max-w-3xl text-4xl md:text-6xl font-black tracking-tight leading-[1.03]">Computers without the hassle.</h1>
          <p class="mt-5 max-w-2xl text-base md:text-lg leading-8 text-slate-300">Friendly local computer repairs, upgrades, sales and practical IT support for home users and small businesses.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/services" class="kc-btn-primary !px-6 !py-3.5">View our services</NuxtLink>
            <a href="https://shop.kiallacomputers.com.au" class="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 font-black text-white hover:bg-white/15 transition">Shop online</a>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div v-for="item in heroServices" :key="item.title" class="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur hover:bg-white/15 transition">
            <div class="text-cyan-300" v-html="item.icon"></div>
            <p class="mt-5 font-black text-white">{{ item.title }}</p>
            <p class="mt-2 text-sm leading-6 text-slate-300">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="border-b border-slate-200 bg-white">
      <div class="max-w-7xl mx-auto px-4 py-5 grid gap-4 sm:grid-cols-3">
        <div v-for="item in benefits" :key="item.title" class="flex items-center gap-3 sm:justify-center">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600" v-html="item.icon"></div>
          <div><p class="text-sm font-black text-[#0b1f3a]">{{ item.title }}</p><p class="text-xs text-slate-500">{{ item.text }}</p></div>
        </div>
      </div>
    </section>

    <div class="kc-page">
      <section>
        <div class="max-w-3xl">
          <p class="kc-eyebrow">Local help that makes sense</p>
          <h2 class="kc-title mt-2 text-3xl md:text-4xl">Practical technology support for home and business.</h2>
          <p class="mt-4 leading-7 text-slate-600">Whether your computer is running slowly, you need a new machine set up, you want extra storage or memory, or your business needs dependable day-to-day IT support, Kialla Computers keeps the process simple and straightforward.</p>
        </div>

        <div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink v-for="service in services" :key="service.title" :to="service.to" class="group kc-panel p-6 hover:-translate-y-1 hover:border-cyan-300 transition duration-200">
            <div class="kc-service-icon" v-html="service.icon"></div>
            <h3 class="mt-5 text-xl font-black text-[#0b1f3a] group-hover:text-blue-600 transition">{{ service.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-slate-600">{{ service.text }}</p>
            <span class="mt-5 inline-flex text-sm font-black text-blue-600">Learn more →</span>
          </NuxtLink>
        </div>
      </section>

      <section class="mt-14 rounded-[1.5rem] bg-[#0b1f3a] p-7 md:p-10 text-white overflow-hidden relative">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_10%,rgba(34,211,238,.8),transparent_30%)]"></div>
        <div class="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p class="text-cyan-300 text-xs font-black uppercase tracking-[.18em]">Need a new computer?</p>
            <h2 class="mt-2 text-3xl font-black">Browse the Kialla Computers online shop.</h2>
            <p class="mt-3 max-w-2xl text-slate-300 leading-7">Shop computers, parts and accessories online with secure checkout and Australian delivery.</p>
          </div>
          <a href="https://shop.kiallacomputers.com.au" class="kc-btn-primary !px-6 !py-3.5">Visit the shop</a>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
useHead({ title: 'Computer Sales, Repairs & IT Support' })

const icon = (path) => `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`
const heroServices = [
  { title:'Computer Repairs', text:'Fault finding, cleanup and reliable repairs.', icon:icon('<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3 2.4-2.4Z"/>') },
  { title:'Upgrades', text:'Memory, SSD and practical performance improvements.', icon:icon('<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>') },
  { title:'Security', text:'Virus and malware cleanup plus safer setup.', icon:icon('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>') },
  { title:'Business Support', text:'Straightforward IT help for small businesses.', icon:icon('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18"/>') }
]
const benefits = [
  { title:'Local support', text:'Friendly, practical help', icon:icon('<path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2"/>') },
  { title:'Straightforward advice', text:'No unnecessary complexity', icon:icon('<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>') },
  { title:'Online shop', text:'Secure Australian checkout', icon:icon('<path d="M3 6h18l-2 9H6L3 3H1"/><circle cx="8" cy="20" r="1"/><circle cx="17" cy="20" r="1"/>') }
]
const services = [
  { title:'Computer Repairs', text:'Desktop and laptop troubleshooting, fault diagnosis, cleanup and general repair work.', to:'/repairs', icon:heroServices[0].icon },
  { title:'Upgrades & Improvements', text:'SSD, memory and other sensible upgrades to extend the useful life of your computer.', to:'/services#upgrades', icon:heroServices[1].icon },
  { title:'Virus & Malware Cleaning', text:'Help removing unwanted software, threats and browser problems, with advice to reduce repeat issues.', to:'/services#security', icon:heroServices[2].icon },
  { title:'New Computer Setup', text:'Move into a new computer with updates, accounts, apps, printers and data configured properly.', to:'/services#setup', icon:icon('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>') },
  { title:'Small Business IT Support', text:'Practical assistance for workstations, Microsoft 365, networking, devices and everyday IT problems.', to:'/business-support', icon:heroServices[3].icon },
  { title:'Computer Sales', text:'Browse computers, components and accessories through our dedicated online shop.', to:'https://shop.kiallacomputers.com.au', icon:icon('<path d="M6 2 3 6v14h18V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>') }
]
</script>
