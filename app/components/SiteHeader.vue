<template>
  <div>
    <div class="bg-[#0b1f3a] text-slate-200">
      <div class="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4 text-xs sm:text-sm">
        <p class="font-semibold">Local computer sales, service &amp; support</p>
        <p class="hidden sm:block text-slate-400">Australian owned &amp; operated</p>
      </div>
    </div>

    <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div class="max-w-7xl mx-auto px-4 h-[102px] flex items-center gap-5">
        <NuxtLink to="/" class="flex items-center shrink-0" aria-label="Kialla Computers home">
          <img src="/kialla-computers-logo.png" alt="Kialla Computers" class="h-[88px] w-[210px] object-contain object-left sm:w-[230px]" />
        </NuxtLink>

        <nav class="hidden lg:flex items-center gap-1 ml-4">
          <NuxtLink to="/" class="desktop-nav">Home</NuxtLink>
          <NuxtLink to="/services" class="desktop-nav">Services</NuxtLink>
          <NuxtLink to="/repairs" class="desktop-nav">Repairs</NuxtLink>
          <NuxtLink to="/business-support" class="desktop-nav">Business Support</NuxtLink>
          <NuxtLink to="/contact" class="desktop-nav">Contact</NuxtLink>
        </nav>

        <div class="ml-auto flex items-center gap-2 sm:gap-3">
          <a href="https://shop.kiallacomputers.com.au" class="hidden sm:inline-flex kc-btn-primary !py-2.5 !px-4">Shop Online</a>
          <button type="button" class="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#0b1f3a]" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle menu">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      <Transition enter-active-class="transition duration-200" enter-from-class="opacity-0 -translate-y-2" leave-active-class="transition duration-150" leave-to-class="opacity-0 -translate-y-2">
        <div v-if="mobileMenuOpen" class="lg:hidden border-t border-slate-200 bg-white shadow-xl">
          <nav class="max-w-7xl mx-auto px-4 py-3 grid gap-1">
            <NuxtLink to="/" class="mobile-menu-item" @click="closeMenu">Home</NuxtLink>
            <NuxtLink to="/services" class="mobile-menu-item" @click="closeMenu">Services</NuxtLink>
            <NuxtLink to="/repairs" class="mobile-menu-item" @click="closeMenu">Repairs</NuxtLink>
            <NuxtLink to="/business-support" class="mobile-menu-item" @click="closeMenu">Business Support</NuxtLink>
            <NuxtLink to="/contact" class="mobile-menu-item" @click="closeMenu">Contact</NuxtLink>
            <a href="https://shop.kiallacomputers.com.au" class="mobile-menu-item text-cyan-700" @click="closeMenu">Shop Online</a>
          </nav>
        </div>
      </Transition>
    </header>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)
const closeMenu = () => { mobileMenuOpen.value = false }
</script>

<style scoped>
.desktop-nav { padding:.7rem .78rem; border-radius:.65rem; color:#334155; font-weight:800; font-size:.86rem; transition:.18s ease; white-space:nowrap; }
.desktop-nav:hover, .router-link-active.desktop-nav { color:#2367d1; background:#f1f5f9; }
.mobile-menu-item { display:flex; align-items:center; width:100%; padding:.85rem 1rem; border-radius:.7rem; color:#0b1f3a; font-weight:800; transition:.18s ease; }
.mobile-menu-item:hover { background:#f1f5f9; color:#2367d1; }
</style>
