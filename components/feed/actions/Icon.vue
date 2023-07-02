<template>
  <div class="group flex items-center gap-1" @click.prevent="$emit('clicked')">
    <div
      :class="`${defaultTransition} flex items-center justify-center p-2 text-gray-500 rounded-full group-hover:bg-${color}-200 dark:group-hover:bg-${color}-400`"
    >
      <slot
        name="icon"
        :classes="`w-5 h-5  group-hover:text-${color}-400 dark:group-hover:text-${color}-100`"
      ></slot>
    </div>
    <p :class="`dark:text-gray-500 group-hover:text-${color}-400 `">
      <slot>{{ randomNumber }}</slot>
    </p>
  </div>
</template>

<script setup>
let { defaultTransition } = useTailwind();
let emit = defineEmits(["clicked"]);
let { color } = defineProps({
  color: {
    type: String,
    default: "blue",
  },
});
let randomNumber = computed(() => {
  return Math.floor(Math.random() * 100);
});
</script>
