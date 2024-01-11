<script>
import ServiceCard from "@/components/ServiceTab/ServiceCard.vue"; // Import the ServiceCard

export default {
  components: {
    ServiceCard,
  },
  data() {
    return {
      cardData: [
        {
          title: "Quota Management",

          content:
            "Learn about quota system that controls the number of foreign nationals allowed to enter, work, or reside in Nigeria...",
        },
        {
          title: "Work Authorization",

          content:
            "Learn about work authorization issued that allows foreign nationals to legally work and reside in Nigeria... ",
        },
        {
          title: "Business",

          content:
            "Learn about business visa that allows foreign nationals only do business in Nigeria and allows Visa on Arrival ...",
        },
        {
          title: "Audit and Reviews",

          content:
            "A comprehensive review, examination, or assessment carried out to ensure compliance with immigration laws, regulations, and policies...",
        },

        {
          title: "Training",

          content:
            "Zinafri provides trainings and workshops for individuals, professionals or organizations to provide them with knowledge and skills related to immigration laws...",
        },
        {
          title: "Consulting",

          content:
            "Zinafri provides Immigration consulting  which involves providing guidance, advice, and assistance to individuals, families, businesses, or organizations ...",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="service flex items-center justify-center max-w-4xl mx-auto">
    <div
      class="container flex flex-col md:mt-24 mt-16 items-center justify-center px-4"
    >
      <div>
        <p class="text-header">What we do</p>
      </div>

      <!-- Immigration Services -->

      <div class="flex flex-wrap gap-16 md:gap-4 justify-center mt-8 md:mt-16">
        <div v-for="(card, index) in cardData" :key="index">
          <ServiceCard :title="card.title" :content="card.content">
            <!-- Additional content, if needed -->

            <button
              class="bg-sky-400 text-white px-3 py-3 rounded-full text-sm hover:bg-sky-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </ServiceCard>
        </div>
        <div class="flex flex-col items-center gap-4 mt-6 text-center">
          <p class="text-2xl font-semibold text-secondary-200">
            High-class specialists are ready to help you at any time!
          </p>
          <p class="text-base text-secondary-200">
            Are you interested in immigrating, or are you just a creative
            looking to collaborate? Get in touch with us.
          </p>
          <button
            class="bg-sky-400 hover:bg-sky-500 text-white px-10 py-6 rounded-full text-sm mt-8 font-bold w-full md:w-2/5"
          >
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
