<script setup>
defineProps({ align: { default: 'center' } })
</script>
<template>
  <div :class="['pt-14', align === 'center' && 'text-center']">
    <p class="kc-eyebrow">Kialla Computers</p>
    <h1 class="kc-heading mt-3 text-4xl lg:text-5xl"><slot name="title">Title</slot></h1>
    <p class="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600"><slot name="desc" /></p>
  </div>
</template>
