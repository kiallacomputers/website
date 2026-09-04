<script setup>
const menuitems = [
  { title: "Solutions", path: "/solutions" },
  { title: "Services", path: "/services" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];
const open = ref(false);
</script>

<template>
  <div class="bg-[#0b1f3a] text-white">
    <LandingContainer>
      <div
        class="flex min-h-9 items-center justify-between gap-4 text-xs font-semibold text-slate-200"
      >
        <span>Local computer sales, parts & support</span>
        <span class="hidden sm:inline">Australian owned & operated</span>
      </div>
    </LandingContainer>
  </div>

  <header
    class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur"
  >
    <LandingContainer>
      <div class="flex min-h-[96px] items-center justify-between gap-5">
        <NuxtLink
          to="/"
          class="flex items-center"
          aria-label="Kialla Computers home"
        >
          <img
            src="/kialla-computers-logo.png"
            alt="Kialla Computers"
            class="h-[74px] w-auto object-contain sm:h-[82px]"
          />
        </NuxtLink>

        <button
          class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#0b1f3a] lg:hidden"
          aria-label="Toggle navigation"
          @click="open = !open"
        >
          <Icon :name="open ? 'uil:times' : 'uil:bars'" class="h-6 w-6" />
        </button>

        <nav class="hidden items-center gap-1 lg:flex">
          <NuxtLink
            v-for="item in menuitems"
            :key="item.path"
            :to="item.path"
            class="rounded-lg px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50 hover:text-[#2367d1]"
            >{{ item.title }}</NuxtLink
          >
          <!-- <a
            href="https://shop.kiallacomputers.com.au"
            class="ml-3 inline-flex items-center gap-2 rounded-xl bg-[#22d3ee] px-5 py-3 text-sm font-black text-[#0b1f3a] transition hover:bg-cyan-300"
          >
            <Icon name="uil:shopping-cart" class="h-5 w-5" />
            Shop Online
          </a> -->
        </nav>
      </div>

      <nav v-if="open" class="border-t border-slate-100 pb-5 lg:hidden">
        <div class="grid gap-1 pt-3">
          <NuxtLink
            v-for="item in menuitems"
            :key="item.path"
            :to="item.path"
            class="rounded-lg px-3 py-3 font-bold text-slate-700"
            @click="open = false"
            >{{ item.title }}</NuxtLink
          >
          <a
            href="https://shop.kiallacomputers.com.au"
            class="mt-2 rounded-xl bg-[#22d3ee] px-4 py-3 text-center font-black text-[#0b1f3a]"
            >Shop Online</a
          >
        </div>
      </nav>
    </LandingContainer>
  </header>
</template>
