<script>
import ServiceCard from "@/components/ServiceTab/ServiceCard.vue"; // Import the ServiceCard

export default {
  components: {
    ServiceCard, // Register the CardComponent
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
  <div class="hero bg-hero-section bg-cover bg-center py-48">
    <div class="container mx-auto flex md:px-0 items-center justify-start">
      <div class="flex flex-col w-full md:w-1/3 lg:w-56 xl:w-2/5 text-gray-800">
        <p class="text-sm font-medium">We have 15+ years experience in</p>

        <p class="text-6xl font-black leading-snug text-sky-700">
          IMMIGRATION SERVICES & VISA CONSULTATION
        </p>

        <p class="text-sm font-medium">
          Our team comprises experienced immigration consultants dedicated to
          providing personalized guidance tailored to your specific needs.
        </p>
      </div>
    </div>
  </div>

  <div class="service flex items-center justify-center max-w-4xl mx-auto">
    <div class="container flex flex-col mt-24 items-center justify-center">
      <div class="mb-8">
        <p class="font-semibold text-2xl">What we do</p>
      </div>

      <!-- Immigration Services -->

      <div class="flex flex-wrap gap-16 justify-center">
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
        <div class="flex flex-col items-center gap-4 mt-6">
          <p class="text-2xl font-semibold">
            High-class specialists are ready to help you at any time!
          </p>
          <p class="text-base">
            Are you interested in immigrating, or are you just a creative
            looking to collaborate? Get in touch with us.
          </p>
          <button
            class="bg-sky-400 hover:bg-sky-500 text-white px-10 py-6 rounded-full text-sm mt-8 font-bold"
          >
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
