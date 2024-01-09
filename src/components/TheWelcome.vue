<script>
import ServiceCard from "@/components/ServiceTab/ServiceCard.vue"; // Import the ServiceCard
import FeedbackCard from "@/components/ServiceTab/FeedbackCard.vue"; // Import the ServiceCard
import BlogCard from "@/components/ServiceTab/BlogCard.vue"; // Import the ServiceCard
import profileImage1 from "@/assets/images/review-1.jpg";
import profileImage2 from "@/assets/images/review-2.jpg";
import profileImage3 from "@/assets/images/review-3.jpg";
import profileImage4 from "@/assets/images/review-4.jpg";
import blogImage from "@/assets/images/review-4.jpg";

export default {
  components: {
    ServiceCard,
    FeedbackCard,
    BlogCard, // Register the CardComponent
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

      blogData: [
        {
          blogImageUrl: blogImage,
          blogCategory: "Types of Work Visa in Nigeria",
          blogTime: "- 2 min read",
          blogTitle: "How to Apply for a Business Visa?",
          blogContent:
            "Zinafri provides Immigration consulting  which involves providing guidance, advice, and assistance to individuals, families, businesses, or organizations  Our team comprises experienced immigration consultants dedicated to providing personalized guidance tailored to your specific needs",
          blogAuthor: "John Doe",
          blogDate: "January 10, 2024",
        },
        {
          blogImageUrl: blogImage,
          blogCategory: "Types of Work Visa in Nigeria",
          blogTime: "- 3 min read",
          blogTitle: "How to Apply for a TWP Visa?",
          blogContent:
            "Zinafri provides Immigration consulting  which involves providing guidance, advice, and assistance to individuals, families, businesses, or organizations  Our team comprises experienced immigration consultants dedicated to providing personalized guidance tailored to your specific needs",
          blogAuthor: "Joan Doe",
          blogDate: "January 05, 2024",
        },
        {
          blogImageUrl: blogImage,
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
  <div class="hero bg-hero-section bg-cover bg-center py-48 relative mt-24">
    <div class="container mx-auto flex md:px-0 items-center justify-start z-40">
      <div
        class="flex flex-col w-full md:w-1/3 lg:w-56 xl:w-3/5 text-gray-800 px-28"
      >
        <p class="text-sm font-medium">We have 15+ years experience in</p>

        <p class="text-6xl font-black leading-snug text-primary">
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
      <div class="mb-16">
        <p class="text-header">What we do</p>
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
        <div class="flex flex-col items-center gap-4 mt-6 text-center">
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

  <div
    class="flex items-center justify-between mx-auto mt-16 w-full gap-24 px-8"
  >
    <div class="w-3/5">
      <img src="../assets/images/christina.jpg" alt="" class="rounded-xl" />
    </div>

    <div class="mx-auto flex flex-col gap-2 items-start w-2/4 pe-20">
      <p class="text-3xl text-header">
        Immigration services from experienced lawyers
      </p>
      <p class="text-lg text-sky-500 font-medium">
        Trusted by 1224+ clients from 20 countries
      </p>

      <p class="mt-8 text-lg">
        We’ve been helping old and new businesses settle down in Nigeria with
        100% immigration compliance.
      </p>

      <ul class="mt-4 text-base flex flex-col gap-2">
        <li class="flex gap-4 items-center">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-6 h-6 text-sky-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg> </span
          >We are Passionate about Immigration services
        </li>
        <li class="flex gap-4 items-center">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-6 h-6 text-sky-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg> </span
          >Accountability is our watchword
        </li>
        <li class="flex gap-4 items-center">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-6 h-6 text-sky-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg> </span
          >Our Solutions are Flexible
        </li>
        <li class="flex gap-4 items-center">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-6 h-6 text-sky-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg> </span
          >Committed to Service Excellence
        </li>
      </ul>
      <button
        class="bg-sky-400 hover:bg-sky-500 text-white px-10 py-6 rounded-full text-sm mt-8 font-bold"
      >
        About us
      </button>
    </div>
  </div>

  <div class="why_us my-24">
    <div class="container mx-auto flex flex-col gap-4 items-center w-3/5">
      <p class="text-center text-header">Why Choose Us?</p>
      <p class="font-medium text-lg text-center text-secondary-200">
        We have provided immigration solutions to over 200 expatriates from
        different nationalities. <br />
        Our impact is speak louder than our word.
      </p>
    </div>
    <div class="data container mx-auto px-28">
      <div
        class="flex flex-wrap justify-between items-start my-16 gap-y-8 px-8 xl:px-0"
      >
        <div class="data-info flex gap-4 items-center justify-center w-80">
          <h2 class="text-6xl font-medium text-primary">1.8M+</h2>
          <p class="text-base font-semibold">Visitor Visa issued in 2020</p>
        </div>
        <div class="data-info flex gap-4 items-center justify-center w-80">
          <h2 class="text-6xl font-medium text-primary">6M+</h2>
          <p class="text-base font-semibold">Travel documents were issued</p>
        </div>
        <div class="data-info flex gap-4 items-center justify-center w-80">
          <h2 class="text-6xl font-medium text-primary">127K</h2>
          <p class="text-base font-semibold">
            Permanent residents were admitted
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="supportForm flex relative z-20">
    <div
      class="bg-hero-section bg-cover bg-center absolute top-0 bottom-0 left-0 right-0 bg-fixed"
    ></div>
    <div
      class="bg-black bg-opacity-50 z-40 flex absolute top-0 bottom-0 left-0 right-0"
    ></div>
    <div
      class="container mx-auto flex items-center justify-between px-28 my-32 z-50"
    >
      <div
        class="left-container flex flex-col gap-4 w-2/5 justify-center text-white"
      >
        <p class="font-semibold">FREE 24/7 SUPPORT</p>
        <p class="text-5xl font-medium my-5">
          Get Free & Quality Online Consultation
        </p>
        <p class="font-semibold">
          Euismod risus auctor egestas augue mauri viverra euismod tortor eugiat
          a mauris placerat
        </p>
        <p>
          Fringilla risus nec, luctus mauris orci auctor purus euismod and
          pretium purus at pretium ligula rutrum viverra tortor sapien sodales
          and primis ligula risus auctor egestas augue mauri viverra tortor in
          iaculis placerat eugiat mauris ipsum viverra tortor gravida
        </p>
      </div>
      <div class="form-box w-4/12 rounded-xl bg-slate-100 px-8">
        <div class="text-xl font-semibold py-8 text-center">
          Request Free Consultation
        </div>
        <form class="flex flex-col gap-4">n
          <input class="input" type="text" placeholder="Enter Your Name" />
          <input
            class="input"
            type="email"
            placeholder="Enter Your Email Address"
          />
          <input
            class="input"
            type="text"
            placeholder="Enter Your Phone Number"
          />
          <select class="input">
            <option>Visa For</option>
            <option>Tourist Visa</option>

            <option>Business Visa</option>

            <option>TWP Visa</option>

            <option>STR Visa</option>
          </select>

          <button
            class="p-4 bg-sky-400 hover:bg-sky-500 mt-6 mb-12 font-semibold text-white text-sm tracking-wide rounded-md"
            type="submit"
          >
            SEND REQUEST
          </button>
        </form>
      </div>
    </div>
  </div>
  <div class="feedback">
    <div class="container mx-auto px-28">
      <div class="flex flex-col mt-16 items-center w-4/5 mx-auto">
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

  <div
    class="blog container mx-auto px flex flex-wrap items-center justify-center"
  >
    <div class="flex flex-col gap-4 items-center w-3/6">
      <p class="text-header">Our Stories & Latest News</p>
      <p class="text-base text-center text-secondary-200">
        Cursus porta, feugiat primis in ultrice ligula risus auctor tempus dolor
        feugiat, felis lacinia risus interdum auctor id viverra dolor iaculis
        luctus placerat and massa
      </p>
    </div>
    <div class="flex gap-8 mt-16">
      <div v-for="(blog, index) in blogData" :key="index">
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
