<template>
  <footer class="mt-20 border-t-4 border-[#22d3ee] bg-[#061a33] text-slate-300">
    <LandingContainer>
      <div class="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div class="lg:col-span-1">
          <img src="/kc-footer-logo.png" alt="Kialla Computers" class="h-16 w-auto" />
          <h2 class="mt-4 text-xl font-black text-white">Kialla Computers</h2>
          <p class="mt-1 text-sm font-bold text-cyan-300">Sales • Service • Support</p>
          <p class="mt-4 max-w-xs text-sm leading-6 text-slate-400">Local computer sales, parts & support without the hassle.</p>
        </div>

        <div>
          <h3 class="font-black text-white">Quick Links</h3>
          <div class="mt-4 grid gap-2 text-sm">
            <NuxtLink to="/services" class="hover:text-cyan-300">Services</NuxtLink>
            <NuxtLink to="/solutions" class="hover:text-cyan-300">Solutions</NuxtLink>
            <NuxtLink to="/about" class="hover:text-cyan-300">About</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-cyan-300">Contact</NuxtLink>
          </div>
        </div>

        <div>
          <h3 class="font-black text-white">Services</h3>
          <div class="mt-4 grid gap-2 text-sm">
            <NuxtLink to="/computerservice" class="hover:text-cyan-300">Computer Service</NuxtLink>
            <NuxtLink to="/virusclean" class="hover:text-cyan-300">Virus & Malware Cleaning</NuxtLink>
            <NuxtLink to="/datarecovery" class="hover:text-cyan-300">Data Recovery</NuxtLink>
            <a href="https://shop.kiallacomputers.com.au" class="hover:text-cyan-300">Online Shop</a>
          </div>
        </div>

        <div>
          <h3 class="font-black text-white">Contact Us</h3>
          <div class="mt-4 grid gap-3 text-sm">
            <div class="flex gap-2"><Icon name="uil:map-marker" class="mt-0.5 text-cyan-300" /><span>Kialla, Victoria, Australia</span></div>
            <a href="mailto:sales@kiallacomputers.com.au" class="flex gap-2 hover:text-cyan-300"><Icon name="uil:envelope" class="mt-0.5 text-cyan-300" /><span>sales@kiallacomputers.com.au</span></a>
            <a href="tel:+61488736282" class="flex gap-2 hover:text-cyan-300"><Icon name="uil:phone" class="mt-0.5 text-cyan-300" /><span>0488 736 282</span></a>
            <div class="flex gap-2"><Icon name="uil:clock" class="mt-0.5 text-cyan-300" /><span>Mon - Fri | 9:00am - 5:00pm</span></div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright © {{ new Date().getFullYear() }} Kialla Computers. All rights reserved.</p>
        <p>Australian owned & operated</p>
      </div>
    </LandingContainer>
  </footer>
</template>
