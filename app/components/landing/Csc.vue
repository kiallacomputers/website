<template>
  <section class="py-12">
    <div class="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <p class="kc-eyebrow">Repairs & Upgrades</p>
        <h1 class="kc-heading mt-3 text-4xl sm:text-5xl">Computer Servicing</h1>
        <p class="mt-3 text-2xl font-black text-[#2367d1]">$88 / hour</p>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Our Computer Service provides complete solutions to keep your
          technology running smoothly. Whether it’s a slow computer, a broken
          part, or software problems, we deliver practical support to get you
          back up and running.
        </p>
        <ul class="mt-7 grid gap-4 text-slate-600">
          <li class="flex gap-3">
            <Icon
              name="uil:check-circle"
              class="mt-1 shrink-0 text-cyan-600"
            /><span
              ><b class="text-[#0b1f3a]">Computer Repairs</b> – hardware and
              software fault finding.</span
            >
          </li>
          <li class="flex gap-3">
            <Icon
              name="uil:check-circle"
              class="mt-1 shrink-0 text-cyan-600"
            /><span
              ><b class="text-[#0b1f3a]">Upgrades & Installations</b> – SSD, RAM
              and other hardware upgrades.</span
            >
          </li>
          <li class="flex gap-3">
            <Icon
              name="uil:check-circle"
              class="mt-1 shrink-0 text-cyan-600"
            /><span
              ><b class="text-[#0b1f3a]">System Tune-Ups</b> – improving speed
              and performance.</span
            >
          </li>
          <li class="flex gap-3">
            <Icon
              name="uil:check-circle"
              class="mt-1 shrink-0 text-cyan-600"
            /><span
              ><b class="text-[#0b1f3a]">Networking & Internet</b> – Wi-Fi
              troubleshooting and configuration.</span
            >
          </li>
          <li class="flex gap-3">
            <Icon
              name="uil:check-circle"
              class="mt-1 shrink-0 text-cyan-600"
            /><span
              ><b class="text-[#0b1f3a]">Business IT Support</b> – practical
              support for offices and small businesses.</span
            >
          </li>
        </ul>
      </div>
      <div class="kc-gradient rounded-[2rem] p-8 sm:p-12">
        <img
          src="~/assets/img/computerservice.png"
          alt="Computer servicing"
          class="mx-auto aspect-square w-full max-w-md rounded-[1.5rem] object-cover shadow-2xl"
        />
      </div>
    </div>
    <div class="kc-panel mt-12 p-6 sm:p-8">
      <h2 class="text-2xl font-black text-[#0b1f3a]">
        Request a computer service
      </h2>
      <p class="mb-6 mt-2 text-slate-600">
        Tell us what is happening and we’ll get back to you.
      </p>
      <LandingCsContactForm />
    </div>
  </section>
</template>
