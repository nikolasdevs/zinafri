<script>
import BlogCard from "@/components/ServiceTab/BlogCard.vue";
import blogImage4 from "@/assets/images/review-4.jpg";
import blogImage1 from "@/assets/images/review-1.jpg";
import blogImage3 from "@/assets/images/review-6.jpg";

export default {
  components: { BlogCard },
  data() {
    return {
      blogData: [
        {
          blogImageUrl: blogImage4,
          blogCategory: "Types of Work Visa in Nigeria",
          blogTime: "- 2 min read",
          blogTitle: "How to Apply for a Business Visa?",
          blogContent:
            "Zinafri provides Immigration consulting  which involves providing guidance, advice, and assistance to individuals, families, businesses, or organizations  Our team comprises experienced immigration consultants dedicated to providing personalized guidance tailored to your specific needs",
          blogAuthor: "John Doe",
          blogDate: "January 10, 2024",
        },
        {
          blogImageUrl: blogImage1,
          blogCategory: "Types of Work Visa in Nigeria",
          blogTime: "- 3 min read",
          blogTitle: "How to Apply for a TWP Visa?",
          blogContent:
            "Zinafri provides Immigration consulting  which involves providing guidance, advice, and assistance to individuals, families, businesses, or organizations  Our team comprises experienced immigration consultants dedicated to providing personalized guidance tailored to your specific needs",
          blogAuthor: "Joan Doe",
          blogDate: "January 05, 2024",
        },
        {
          blogImageUrl: blogImage3,
          blogCategory: "Types of Work Visa in Nigeria",
          blogTime: "- 1 min read",
          blogTitle: "How to Apply for a STR Visa?",
          blogContent:
            "Zinafri provides Immigration consulting  which involves providing guidance, advice, and assistance to individuals, families, businesses, or organizations  Our team comprises experienced immigration consultants dedicated to providing personalized guidance tailored to your specific needs",
          blogAuthor: "Michael Odin",
          blogDate: "December 28, 2023",
        },
      ],
    };
  },
};
</script>
<template>
  <div
    class="blog container mx-auto flex flex-wrap items-center justify-center md:mt-24 mt-16"
  >
    <div class="flex flex-col gap-4 items-center md:w-4/6 px-4">
      <p class="text-header text-center">Our Stories & Latest News</p>
      <p class="text-base text-center text-secondary-200">
        Cursus porta, feugiat primis in ultrice ligula risus auctor tempus dolor
        feugiat, felis lacinia risus interdum auctor id viverra dolor iaculis
        luctus placerat and massa
      </p>
    </div>
    <div
      class="flex flex-col md:flex-row mt-16 gap-3"
    >
      <div
        v-for="(blog, index) in blogData"
        :key="index"
        class="w-full hover:shadow-md"
      >
        <BlogCard
          :blogCardImage="blog.blogImageUrl"
          :blogCategory="blog.blogCategory"
          :blogTitle="blog.blogTitle"
          :blogTime="blog.blogTime"
          :blogContent="blog.blogContent"
          :blogAuthor="blog.blogAuthor"
          :blogDate="blog.blogDate"
        >
          <!-- Blog Card Component -->
        </BlogCard>
      </div>
    </div>
  </div>
</template>
