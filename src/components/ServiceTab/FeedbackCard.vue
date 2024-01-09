<template>
  <div class="bg-gray-100 cursor-grab shadow-md p-4 w-80 mb-8">
    <div>
      <div class="flex items-center gap-4 mb-4">
        <img :src="cardImage" alt="Profile Image" class="card-img" />
        <div class="flex flex-col">
          <h2 class="text-lg font-semibold text-primary">{{ name }}</h2>
          <p class="text-sm text-gray-400">{{ request }}</p>
        </div>
      </div>
      <p class="text-secondary-200 mt-6">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedbackCard",

  props: {
    cardImage: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    request: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
  },
};
</script>
