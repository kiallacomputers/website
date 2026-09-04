<script setup>
definePageMeta({ layout: "landing" });
useHead({ title: "Home" });
</script>

<template>
  <LandingContainer>
    <LandingHero />

    <section class="py-12">
      <div class="max-w-2xl">
        <p class="kc-eyebrow">What we do</p>
        <h2 class="kc-heading mt-3 text-3xl sm:text-4xl">
          Local technology support that makes sense.
        </h2>
        <p class="mt-4 text-lg leading-8 text-slate-600">
          Whether your computer needs repairing, your business needs reliable IT
          support, or you simply want the right upgrade, Kialla Computers is
          here to help.
        </p>
      </div>

      <div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink to="/computerservice" class="kc-card"
          ><Icon name="uil:wrench" class="h-8 w-8 text-[#2367d1]" />
          <h3 class="mt-5 text-xl font-black text-[#0b1f3a]">
            Computer Service
          </h3>
          <p class="mt-2 leading-7 text-slate-600">
            Repairs, diagnostics, upgrades, software help and performance
            improvements.
          </p></NuxtLink
        >
        <NuxtLink to="/virusclean" class="kc-card"
          ><Icon name="uil:shield-check" class="h-8 w-8 text-[#2367d1]" />
          <h3 class="mt-5 text-xl font-black text-[#0b1f3a]">Virus Cleaning</h3>
          <p class="mt-2 leading-7 text-slate-600">
            Thorough malware, spyware and browser threat removal with practical
            security advice.
          </p></NuxtLink
        >
        <NuxtLink to="/datarecovery" class="kc-card"
          ><Icon name="uil:database" class="h-8 w-8 text-[#2367d1]" />
          <h3 class="mt-5 text-xl font-black text-[#0b1f3a]">Data Recovery</h3>
          <p class="mt-2 leading-7 text-slate-600">
            Assistance recovering important files from failed, damaged or
            inaccessible storage.
          </p></NuxtLink
        >
        <NuxtLink to="/solutions" class="kc-card"
          ><Icon name="uil:briefcase-alt" class="h-8 w-8 text-[#2367d1]" />
          <h3 class="mt-5 text-xl font-black text-[#0b1f3a]">IT Solutions</h3>
          <p class="mt-2 leading-7 text-slate-600">
            Practical support for workstations, networking, Microsoft 365 and
            everyday IT problems.
          </p></NuxtLink
        >
        <!-- <a href="https://shop.kiallacomputers.com.au" class="kc-card"
          ><Icon name="uil:desktop-cloud-alt" class="h-8 w-8 text-[#2367d1]" />
          <h3 class="mt-5 text-xl font-black text-[#0b1f3a]">Computer Sales</h3>
          <p class="mt-2 leading-7 text-slate-600">
            Browse computers, accessories and parts from the Kialla Computers
            online shop.
          </p></a
        > -->
        <NuxtLink to="/contact" class="kc-card"
          ><Icon
            name="uil:comment-alt-message"
            class="h-8 w-8 text-[#2367d1]"
          />
          <h3 class="mt-5 text-xl font-black text-[#0b1f3a]">
            Need Something Else?
          </h3>
          <p class="mt-2 leading-7 text-slate-600">
            Tell us what is happening and we can help work out the next step.
          </p></NuxtLink
        >
      </div>
    </section>

    <!-- <section class="kc-gradient my-8 overflow-hidden rounded-[2rem] px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12">
      <div class="max-w-2xl"><p class="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Kialla Computers Online Shop</p><h2 class="mt-3 text-3xl font-black">Need a computer, upgrade or accessory?</h2><p class="mt-3 leading-7 text-slate-300">Browse our current range online with Australian pricing and local support behind every purchase.</p></div>
      <a href="https://shop.kiallacomputers.com.au" class="mt-6 inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#22d3ee] px-6 py-3.5 font-black text-[#0b1f3a] lg:mt-0">Visit the Shop <Icon name="uil:arrow-up-right" /></a>
    </section> -->
  </LandingContainer>
</template>
