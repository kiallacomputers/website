<script setup lang="ts">
interface Props {
  size?: "md" | "lg";
  block?: boolean;
  styleName?: "outline" | "primary" | "inverted";
  className?: string;
  [x: string]: any;
}

withDefaults(defineProps<Props>(), {
  size: "md",
  styleName: "primary",
});

const sizes = {
  md: "px-5 py-2.5",
  lg: "px-6 py-3",
};

const styles = {
  outline:
<<<<<<< HEAD
    "border-2 border-ButtonOutline hover:bg-ButtonOutline text-ButtonOutline hover:text-ButtonOutlineHoverText",
  primary:
    "bg-ButtonPrimaryBg text-ButtonPrimaryText hover:bg-ButtonPrimaryHover hover:border-ButtonPrimaryHoverB hover:text-ButtonPrimaryHoverText border-2 border-transparent",
=======
    "border-2 border-ButtonOutline hover:bg-ButtonOutline text-ButtonOutline hover:text-ButtonOutlineHover",
  primary:
    "bg-ButtonPrimary text-ButtonPrimaryText hover:bg-ButtonPrimaryHover hover:text-ButtonPrimaryHoverText border-2 border-transparent",
>>>>>>> 1806ee6291393952912ed735a7e6686f13609e26
};
</script>

<template>
  <button
    :class="[
      'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200',
<<<<<<< HEAD
      block && 'sm:w-full lg:w-1/2 font-bold',
=======
      block && 'w-full',
>>>>>>> 1806ee6291393952912ed735a7e6686f13609e26
      sizes[size],
      styles[styleName],
      className,
    ]"
  >
    <slot />
  </button>
</template>
