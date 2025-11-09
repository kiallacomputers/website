<script setup>
defineProps(["special"]);
</script>

<template>
  <div>
    <div
      class="flex flex-col h-[550px] w-[310px] order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md"
    >
      <div class="text-center">
        <h4 class="text-lg font-medium text-ServiceHeader">
          {{ special.name }}
        </h4>
        <p class="mt-3 text-4xl font-bold text-ServicePrice md:text-4xl">
          {{
            special.price && typeof special.price === "object"
              ? special.price.monthly
              : special.price
          }}
        </p>
        <!-- {
        plan.price.original && (
          <p class="mt-1 text-xl font-medium text-gray-400 line-through md:text-2xl">
            {plan.price.original}
          </p>
        )
      } -->
      </div>
      <ul class="grid mt-8 text-left gap-y-4">
        <li
          v-for="item of special.features"
          class="flex items-start gap-3 text-ServiceItems"
        >
          <LandingTick v-if="item" className="w-6 h-6" />
          <span>{{ item }}</span>
        </li>
      </ul>
      <div class="flex mt-8 mt-auto">
        <LandingLink
          :href="special.button.link || '#'"
          block
          :styleName="special.popular ? 'primary' : 'outline'"
        >
          {{ special.button.text || "Get Started" }}
        </LandingLink>
      </div>
    </div>
  </div>
</template>
