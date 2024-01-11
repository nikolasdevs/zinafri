<template>
  <div
    class="subscribe flex relative bg-hero-section bg-cover bg-center top-0 left-0 bottom-0 right-0 bg-fixed z-10 md:mt-24 mt-16"
  >
    <div
      class="absolute top-0 left-0 bottom-0 right-0 bg-gray-700 bg-opacity-80 z-30"
    ></div>
    <div
      class="container mx-auto md:my-24 my-16 md:py-24 z-50 flex flex-col md:flex-row items-center md:gap-24 gap-16 px-4"
    >
      <div class="left-text">
        <p
          class="md:text-5xl text-3xl font-medium w-full text-white text-center md:leading-snug"
        >
          Stay up to date with immigration tips & news
        </p>
      </div>
      <div class="right-text">
        <div class="input-group bg-white w-full p-2 ps-4 rounded-full flex">
          <input
            class="text-base font-medium w-4/5 px-4 outline-none"
            type="email"
          />
          <button
            class="bg-primary text-white font-bold rounded-full py-4 md:px-16 px-8"
          >
            Subscribe
          </button>
        </div>
        <p class="mt-4 text-white text-center md:text-start">
          By signing and clicking Subscribe, you affirm you have read and agree
          to the
          <a class="hover:text-primary underline" href="">Privacy Policy</a> and
          <a class="hover:text-primary underline" href="">Terms of Use</a> and
          want to receive news.
        </p>
      </div>
    </div>
  </div>
</template>
