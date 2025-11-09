<script setup>
defineProps(["plan"]);
</script>

<template>
  <div>
    <div
      class="flex flex-col items-stretch w-[310px] order-first lg:order-none border-4 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-lg"
    >
      <div class="text-center">
        <h4 class="text-lg font-medium text-ServiceHeader">{{ plan.name }}</h4>
        <p v-if="plan.image">
          <img :src="`/img/products/${plan.image}`" />
        </p>
        <p class="text-4xl font-bold text-ServicePrice md:text-3xl">
          {{ plan.spec }}
        </p>
        <p
          class="text-4xl font-bold text-ServicePriceOrg md:text-xl line-through"
        >
          {{
            plan.price && typeof plan.price === "object"
              ? plan.price.monthly
              : plan.price
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
          v-for="item of plan.features"
          class="flex items-start gap-3 text-ServiceItems"
        >
          <LandingTick v-if="item" className="w-6 h-6" />
          <span>{{ item }}</span>
        </li>
      </ul>
      <div class="flex mt-8 mt-auto">
        <LandingLink
          :href="plan.button.link || '#'"
          block
          :styleName="plan.popular ? 'primary' : 'outline'"
        >
          {{ plan.button.text || "Get Started" }}
        </LandingLink>
      </div>
    </div>
  </div>
</template>
