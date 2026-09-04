<template>
  <main>
    <PageHero eyebrow="Services" title="Computer help without the technical runaround." text="From everyday repairs and upgrades to security cleanups and new computer setup, we focus on practical solutions that make sense." />
    <div class="kc-page">
      <div class="grid gap-6 md:grid-cols-2">
        <section id="repairs" class="kc-panel p-7"><p class="kc-eyebrow">Repair</p><h2 class="kc-title mt-2 text-2xl">Computer fault finding &amp; repairs</h2><p class="mt-4 leading-7">Help with computers that will not start, run slowly, freeze, crash, overheat or behave unpredictably. We diagnose the problem first and explain the sensible repair options.</p></section>
        <section id="upgrades" class="kc-panel p-7"><p class="kc-eyebrow">Improve</p><h2 class="kc-title mt-2 text-2xl">SSD, memory &amp; performance upgrades</h2><p class="mt-4 leading-7">A well-chosen upgrade can make an older computer much more useful. We can help determine whether extra memory, faster storage or another improvement is worthwhile.</p></section>
        <section id="security" class="kc-panel p-7"><p class="kc-eyebrow">Protect</p><h2 class="kc-title mt-2 text-2xl">Virus &amp; malware cleaning</h2><p class="mt-4 leading-7">Removal of malware, unwanted programs, browser hijackers and other common threats, followed by sensible security checks and advice.</p></section>
        <section id="setup" class="kc-panel p-7"><p class="kc-eyebrow">Set up</p><h2 class="kc-title mt-2 text-2xl">New computer setup &amp; data transfer</h2><p class="mt-4 leading-7">Updates, user accounts, email, applications, printers, browser setup and data transfer so your new computer is ready to use properly.</p></section>
      </div>
      <div class="mt-10 kc-panel p-7 md:p-9 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><h2 class="kc-title text-2xl">Not sure which service you need?</h2><p class="mt-2 text-slate-600">Tell us what the computer is doing and we can point you in the right direction.</p></div><NuxtLink to="/contact" class="kc-btn-primary">Contact us</NuxtLink></div>
    </div>
  </main>
</template>
<script setup>useHead({ title: 'Computer Services' })</script>
