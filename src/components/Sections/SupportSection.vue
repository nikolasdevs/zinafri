<template>
  <div
    class="supportForm md:mt-24 mt-16 flex relative z-20 bg-hero-section bg-cover bg-center bg-fixed" id="supportSection"
  >
    <div
      class="bg-black bg-opacity-50 z-40 flex absolute top-0 bottom-0 left-0 right-0"
    ></div>
    <div
      class="container mx-auto flex flex-col md:flex-row w-full items-center justify-between gap-8 my-32 z-50 px-4"
    >
      <div
        class="left-container flex flex-col gap-4 md:w-2/5 w-full justify-center text-white"
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
      <div class="form-box md:w-4/12 w-full rounded-xl bg-slate-100 px-8">
        <div class="text-xl font-semibold py-8 text-center text-secondary-200">
          Request Free Consultation
        </div>
        <form class="flex flex-col gap-4">
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
</template>
