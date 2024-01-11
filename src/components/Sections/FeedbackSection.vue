<script>
import FeedbackCard from "@/components/ServiceTab/FeedbackCard.vue"; // Import the ServiceCard
import profileImage1 from "@/assets/images/review-1.jpg";
import profileImage2 from "@/assets/images/review-2.jpg";
import profileImage3 from "@/assets/images/review-3.jpg";
import profileImage4 from "@/assets/images/review-4.jpg";

export default {
  components: {
    FeedbackCard,
  },
  data() {
    return {
      feedData: [
        {
          imageUrl: profileImage1,
          name: "John Doe",
          request: "(Business Visa)",
          content:
            "Zinafri provides Immigration consulting  which involves providing guidance, advice, and assistance to individuals, families, businesses, or organizations  Our team comprises experienced immigration consultants dedicated to providing personalized guidance tailored to your specific needs.",
        },
        {
          imageUrl: profileImage2,
          name: "John Doe",
          request: "(Business Visa)",
          content:
            "Zinafri provides Immigration consulting  which involves providing guidance, advice, and assistance to individuals, families, businesses, or organizations  Our team comprises experienced immigration consultants dedicated to providing personalized guidance tailored to your specific needs.",
        },
        {
          imageUrl: profileImage3,
          name: "John Doe",
          request: "(Business Visa)",
          content:
            "Zinafri provides Immigration consulting  which involves providing guidance, advice, and assistance to individuals, families, businesses, or organizations  Our team comprises experienced immigration consultants dedicated to providing personalized guidance tailored to your specific needs.",
        },
        {
          imageUrl: profileImage4,
          name: "John Doe",
          request: "(Business Visa)",
          content:
            "Zinafri provides Immigration consulting  which involves providing guidance, advice, and assistance to individuals, families, businesses, or organizations  Our team comprises experienced immigration consultants dedicated to providing personalized guidance tailored to your specific needs.",
        },
        {
          imageUrl: profileImage3,
          name: "John Doe",
          request: "(Business Visa)",
          content:
            "Zinafri provides Immigration consulting  which involves providing guidance, advice, and assistance to individuals, families, businesses, or organizations  Our team comprises experienced immigration consultants dedicated to providing personalized guidance tailored to your specific needs.",
        },
        {
          imageUrl: profileImage4,
          name: "John Doe",
          request: "(Business Visa)",
          content:
            "Zinafri provides Immigration consulting  which involves providing guidance, advice, and assistance to individuals, families, businesses, or organizations  Our team comprises experienced immigration consultants dedicated to providing personalized guidance tailored to your specific needs.",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="feedback">
    <div class="container mx-auto md:mt-24 mt-16 px-4">
      <div class="flex flex-col items-center md:w-4/5 mx-auto">
        <p class="text-center text-3xl text-header">What Our Clients Say</p>
        <p class="mt-8 font-normal text-lg text-center text-secondary-200">
          At Zinafri, we take immense pride in our commitment to providing
          exceptional professional service and fostering strong relationships
          with our clients. Here's what some of our esteemed clients have to say
          about their experience working with us
        </p>
      </div>
      <div class="data container mx-auto">
        <div
          class="flex items-start my-16 gap-4 px-8 xl:px-0 overflow-x-scroll no-scrollbar"
        >
          <div v-for="(feed, index) in feedData" :key="index">
            <FeedbackCard
              :cardImage="feed.imageUrl"
              :name="feed.name"
              :request="feed.request"
              :content="feed.content"
            >
            </FeedbackCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
