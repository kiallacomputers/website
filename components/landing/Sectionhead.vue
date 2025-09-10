<script setup>
defineProps({
  align: {
    default: "center",
  },
});
</script>

<template>
  <div :class="['mt-16', align === 'center' && 'text-center']">
    <h1
      class="text-4xl lg:text-5xl font-bold lg:tracking-tight text-PageHeader"
    >
      <slot name="title">Title</slot>
    </h1>
    <p class="text-lg mt-4 text-PageHeaderLight">
<<<<<<< HEAD
      <slot name="desc"></slot>
=======
      <slot name="desc">Some description goes here</slot>
>>>>>>> 1806ee6291393952912ed735a7e6686f13609e26
    </p>
  </div>
</template>
