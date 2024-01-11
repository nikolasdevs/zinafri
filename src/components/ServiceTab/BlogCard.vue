<template>
  <div class="gap-2 mb-8 flex-wrap w-full flex ">
    <div class="flex flex-col gap-4 mb-4">
      <img :src="blogCardImage" alt="Profile Image" class="p-0" />

      <p class="text-base font-bold text-secondary-200 px-4">
        {{ blogCategory }} <span>{{ blogTime }}</span>
      </p>
      <p class="text-2xl font-bold text-primary cursor-pointer px-4">
        {{ blogTitle }}
      </p>
    </div>
    <p class="text-secondary-200 px-4">{{ blogContent }}</p>
    <p class="px-4 mb-4">
      by <span class="font-bold">{{ blogAuthor }}</span> - {{ blogDate }}
    </p>
  </div>
</template>

<script>
export default {
  name: "BlogCard",

  props: {
    blogCardImage: {
      type: String,
      required: true,
    },
    blogCategory: {
      type: String,
      required: true,
    },
    blogTime: {
      type: String,
      required: true,
    },
    blogTitle: {
      type: String,
      required: true,
    },

    blogContent: {
      type: String,
      required: true,
    },

    blogAuthor: {
      type: String,
      required: true,
    },
    blogDate: {
      type: String,
      required: true,
    },
  },
};
</script>
