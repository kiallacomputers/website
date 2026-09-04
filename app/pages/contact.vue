<template>
  <main>
    <PageHero eyebrow="Contact" title="How can we help?" text="Get in touch with Kialla Computers for repairs, upgrades, sales or small-business IT support." />
    <div class="kc-page grid gap-7 lg:grid-cols-[.85fr_1.15fr]">
      <section class="kc-panel p-7 md:p-8">
        <p class="kc-eyebrow">Kialla Computers</p><h2 class="kc-title mt-2 text-3xl">Contact details</h2>
        <div class="mt-6 grid gap-5 text-sm">
          <div><p class="font-black text-[#0b1f3a]">Phone</p><a class="mt-1 inline-block text-blue-600 font-bold" href="tel:+61488736282">0488 736 282</a></div>
          <div><p class="font-black text-[#0b1f3a]">Email</p><a class="mt-1 inline-block text-blue-600 font-bold" href="mailto:sales@kiallacomputers.com.au">sales@kiallacomputers.com.au</a></div>
          <div><p class="font-black text-[#0b1f3a]">Location</p><p class="mt-1 text-slate-600">Kialla, Victoria, Australia</p></div>
          <div><p class="font-black text-[#0b1f3a]">Hours</p><p class="mt-1 text-slate-600">Monday - Friday, 9:00am - 5:00pm</p></div>
        </div>
      </section>
      <section class="kc-panel p-7 md:p-8">
        <p class="kc-eyebrow">Before you contact us</p><h2 class="kc-title mt-2 text-3xl">A few details help us help you.</h2>
        <p class="mt-4 leading-7 text-slate-600">For computer problems, include the type of computer, what is happening, when it started and any error message you can see. For business support, let us know roughly how many users or computers are affected.</p>
        <div class="mt-7 flex flex-wrap gap-3"><a href="mailto:sales@kiallacomputers.com.au" class="kc-btn-primary">Email us</a><a href="tel:+61488736282" class="kc-btn-secondary">Call 0488 736 282</a></div>
      </section>
    </div>
  </main>
</template>
<script setup>useHead({ title: 'Contact Us' })</script>
