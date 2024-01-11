<template>
  <div
    class="bg-slate-100 hover:bg-white cursor-pointer hover:shadow-2xl shadow rounded-lg p-4 md:w-64 w-80"
  >
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-medium">{{ title }}</h2>
    </div>
    <hr class="mt-16 border-t border-b-1 border-sky-200" />
    <p class="text-gray-700 mt-6">{{ content }}</p>
    <div class="mt-4">
      <slot></slot>
      <!-- This is where additional content can be added -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      default: "",
    },
  },
};
</script>
