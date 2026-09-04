<template>
  <section
    class="kc-gradient -mx-5 overflow-hidden text-white sm:rounded-b-[2rem] lg:mt-6 lg:rounded-[2rem]"
  >
    <div
      class="grid items-center gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.15fr_.85fr] lg:px-14 lg:py-20"
    >
      <div>
        <p class="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
          Kialla Computers
        </p>
        <h1
          class="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
        >
          IT without the hassle.
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
          Friendly local computer repairs, upgrades, sales and practical IT
          support for home users and small businesses across Kialla and the
          Shepparton region.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <NuxtLink
            to="/services"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#22d3ee] px-6 py-3.5 font-black text-[#0b1f3a] transition hover:bg-cyan-300"
          >
            View Our Services <Icon name="uil:arrow-right" />
          </NuxtLink>
          <a
            href="https://shop.kiallacomputers.com.au"
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-black text-white transition hover:bg-white/15"
          >
            <Icon name="uil:shopping-cart" /> Shop Online
          </a>
        </div>
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <NuxtLink
          to="/computerservice"
          class="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:bg-white/15"
        >
          <Icon name="uil:desktop" class="h-7 w-7 text-cyan-300" />
          <h3 class="mt-4 font-black">Computer Repairs</h3>
          <p class="mt-1 text-sm leading-6 text-slate-300">
            Fault finding, repairs, upgrades and tune-ups.
          </p>
        </NuxtLink>
        <NuxtLink
          to="/virusclean"
          class="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:bg-white/15"
        >
          <Icon name="uil:shield-check" class="h-7 w-7 text-cyan-300" />
          <h3 class="mt-4 font-black">Security Cleaning</h3>
          <p class="mt-1 text-sm leading-6 text-slate-300">
            Virus, malware and browser threat removal.
          </p>
        </NuxtLink>
        <NuxtLink
          to="/datarecovery"
          class="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:bg-white/15"
        >
          <Icon name="uil:database" class="h-7 w-7 text-cyan-300" />
          <h3 class="mt-4 font-black">Data Recovery</h3>
          <p class="mt-1 text-sm leading-6 text-slate-300">
            Help recovering lost or inaccessible files.
          </p>
        </NuxtLink>
        <NuxtLink
          to="/solutions"
          class="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:bg-white/15"
        >
          <Icon name="uil:briefcase-alt" class="h-7 w-7 text-cyan-300" />
          <h3 class="mt-4 font-black">Business Support</h3>
          <p class="mt-1 text-sm leading-6 text-slate-300">
            Straightforward IT help for small business.
          </p>
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="grid gap-4 py-8 md:grid-cols-3">
    <div class="kc-card flex items-start gap-4">
      <span class="rounded-xl bg-cyan-50 p-3 text-[#2367d1]"
        ><Icon name="uil:map-marker" class="h-6 w-6"
      /></span>
      <div>
        <h3 class="font-black text-[#0b1f3a]">Local Support</h3>
        <p class="mt-1 text-sm leading-6 text-slate-500">
          Based in Kialla and supporting our local community.
        </p>
      </div>
    </div>
    <div class="kc-card flex items-start gap-4">
      <span class="rounded-xl bg-cyan-50 p-3 text-[#2367d1]"
        ><Icon name="uil:comment-alt-check" class="h-6 w-6"
      /></span>
      <div>
        <h3 class="font-black text-[#0b1f3a]">Straightforward Advice</h3>
        <p class="mt-1 text-sm leading-6 text-slate-500">
          Practical recommendations without unnecessary complexity.
        </p>
      </div>
    </div>
    <!-- <div class="kc-card flex items-start gap-4">
      <span class="rounded-xl bg-cyan-50 p-3 text-[#2367d1]"
        ><Icon name="uil:shopping-bag" class="h-6 w-6"
      /></span>
      <div>
        <h3 class="font-black text-[#0b1f3a]">Online Shop</h3>
        <p class="mt-1 text-sm leading-6 text-slate-500">
          Computers, parts and accessories available online.
        </p>
      </div>
    </div> -->
  </section>
</template>
