<template>
  <section class="py-12">
    <div class="grid items-center gap-10 lg:grid-cols-2">
      <div>
        <p class="kc-eyebrow">Files & Storage</p>
        <h1 class="kc-heading mt-3 text-4xl sm:text-5xl">Data Recovery</h1>
        <p class="mt-3 text-2xl font-black text-[#2367d1]">$250 / hour</p>
        <p class="mt-5 text-lg leading-8 text-slate-600">
          We help recover lost, deleted, corrupted or inaccessible data from a
          range of storage devices. Whether the cause is accidental deletion,
          hardware failure, a system crash or malware, we can assess the best
          available recovery path.
        </p>
        <ul class="mt-7 grid gap-3 text-slate-600">
          <li
            v-for="item in [
              'Hard drive & SSD recovery',
              'USB & external drive recovery',
              'Laptop & desktop data retrieval',
              'Malware or ransomware related recovery',
            ]"
            :key="item"
            class="flex gap-3"
          >
            <Icon
              name="uil:database"
              class="mt-1 shrink-0 text-cyan-600"
            /><span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <div class="kc-gradient rounded-[2rem] p-8 sm:p-12">
        <img
          src="~/assets/img/dr.png"
          alt="Data recovery"
          class="mx-auto aspect-square w-full max-w-md rounded-[1.5rem] object-cover shadow-2xl"
        />
      </div>
    </div>
    <div class="kc-panel mt-12 p-6 sm:p-8">
      <h2 class="text-2xl font-black text-[#0b1f3a]">Request data recovery</h2>
      <p class="mb-6 mt-2 text-slate-600">
        Describe the device and what happened to the data.
      </p>
      <LandingDrContactForm />
    </div>
  </section>
</template>
