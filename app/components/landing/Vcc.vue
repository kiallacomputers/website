<template>
  <section class="py-12">
    <div class="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <p class="kc-eyebrow">Security & Cleanup</p>
        <h1 class="kc-heading mt-3 text-4xl sm:text-5xl">Virus Cleaning</h1>
        <p class="mt-3 text-2xl font-black text-[#2367d1]">$150 / hour</p>
        <p class="mt-5 text-lg leading-8 text-slate-600">
          Our Virus Cleaning Service is designed to remove viruses, malware,
          spyware and other malicious threats. We perform a thorough inspection
          and cleanup to help return your system to a safe and stable state.
        </p>
        <ul class="mt-7 grid gap-3 text-slate-600">
          <li
            v-for="item in [
              'Full system diagnostics and threat detection',
              'Virus, spyware, ransomware and trojan removal',
              'Browser hijacker and malicious software cleanup',
              'System file and security setting repair',
              'Antivirus installation or updates',
              'Final system scan and practical prevention advice',
            ]"
            :key="item"
            class="flex gap-3"
          >
            <Icon
              name="uil:shield-check"
              class="mt-1 shrink-0 text-cyan-600"
            /><span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <div class="kc-gradient rounded-[2rem] p-8 sm:p-12">
        <img
          src="~/assets/img/virusclean.png"
          alt="Virus cleaning"
          class="mx-auto aspect-square w-full max-w-md rounded-[1.5rem] object-cover shadow-2xl"
        />
      </div>
    </div>
    <div class="kc-panel mt-12 p-6 sm:p-8">
      <h2 class="text-2xl font-black text-[#0b1f3a]">Request a virus clean</h2>
      <p class="mb-6 mt-2 text-slate-600">
        Tell us what you are seeing on your computer and we’ll get back to you.
      </p>
      <LandingVcContactForm />
    </div>
  </section>
</template>
