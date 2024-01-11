<script>
import HeroSection from "./Sections/HeroSection.vue";
import ServiceSection from "./Sections/ServiceSection.vue";
import AboutUsSection from "./Sections/AboutUsSection.vue";
import WhyUsSection from "./Sections/WhyUsSection.vue";
import SupportSection from "./Sections/SupportSection.vue";
import FeedbackSection from "./Sections/FeedbackSection.vue";
import BlogSection from "./Sections/BlogSection.vue";
import SubscribeSection from "./Sections/SubscribeSection.vue";

export default {
  components: {
    HeroSection,
    ServiceSection,
    AboutUsSection,
    WhyUsSection,
    SupportSection,
    FeedbackSection,
    BlogSection,
    SubscribeSection,
  },
};
</script>

<template>
  <HeroSection />
  <ServiceSection />
  <AboutUsSection />
  <WhyUsSection />
  <SupportSection />
  <FeedbackSection />
  <BlogSection />
  <SubscribeSection />
</template>
