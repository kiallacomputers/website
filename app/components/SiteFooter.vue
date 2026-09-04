<template>
  <footer class="mt-16 border-t border-cyan-400/70 bg-[#061a33] text-slate-200">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid gap-10 lg:grid-cols-[1.35fr_.75fr_.85fr_1fr]">
        <div class="flex gap-5">
          <NuxtLink to="/" class="shrink-0 self-start" aria-label="Kialla Computers home">
            <img src="/kc-footer-logo.png" alt="Kialla Computers KC" class="h-28 w-28 rounded-2xl object-cover shadow-[0_0_28px_rgba(34,211,238,0.18)] sm:h-32 sm:w-32" />
          </NuxtLink>
          <div class="pt-1">
            <h2 class="text-2xl font-black tracking-tight text-white sm:text-3xl">Kialla Computers</h2>
            <p class="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-300">Sales <span class="mx-1 text-cyan-400">•</span> Service <span class="mx-1 text-cyan-400">•</span> Support</p>
            <div class="mt-5 h-px w-full max-w-sm bg-cyan-400/80"></div>
            <p class="mt-5 max-w-sm text-sm leading-6 text-slate-300">Local computer sales, repairs and practical IT support without the hassle.</p>
          </div>
        </div>

        <div>
          <h3 class="text-base font-black text-white">Quick Links</h3>
          <nav class="mt-4 grid gap-3 text-sm text-slate-300">
            <NuxtLink to="/" class="footer-link">Home</NuxtLink>
            <NuxtLink to="/services" class="footer-link">Services</NuxtLink>
            <NuxtLink to="/repairs" class="footer-link">Repairs</NuxtLink>
            <NuxtLink to="/contact" class="footer-link">Contact Us</NuxtLink>
            <a href="https://shop.kiallacomputers.com.au" class="footer-link">Online Shop</a>
          </nav>
        </div>

        <div>
          <h3 class="text-base font-black text-white">Services</h3>
          <nav class="mt-4 grid gap-3 text-sm text-slate-300">
            <NuxtLink to="/repairs" class="footer-link">Computer Repairs</NuxtLink>
            <NuxtLink to="/services#upgrades" class="footer-link">Upgrades</NuxtLink>
            <NuxtLink to="/services#security" class="footer-link">Virus &amp; Malware</NuxtLink>
            <NuxtLink to="/business-support" class="footer-link">Business IT Support</NuxtLink>
            <NuxtLink to="/services#setup" class="footer-link">New Computer Setup</NuxtLink>
          </nav>
        </div>

        <div>
          <h3 class="text-base font-black text-white">Contact Us</h3>
          <div class="mt-4 grid gap-3 text-sm text-slate-300">
            <p class="flex gap-3"><span class="text-cyan-400">●</span><span>Kialla, Victoria, Australia</span></p>
            <a class="footer-link" href="mailto:sales@kiallacomputers.com.au">sales@kiallacomputers.com.au</a>
            <a class="footer-link" href="tel:+61488736282">0488 736 282</a>
            <p>Mon - Fri &nbsp;|&nbsp; 9:00am - 5:00pm</p>
          </div>
        </div>
      </div>

      <div class="mt-10 border-t border-cyan-300/20 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400">
        <p>Australian owned &amp; operated</p>
        <p>© {{ year }} Kialla Computers. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer-link { transition:.18s ease; }
.footer-link:hover { color:#67e8f9; }
</style>
