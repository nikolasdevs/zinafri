<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      // isMenuClose: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      // if (this.isMenuOpen) {
      //   document.body.classList.add("menu-open");
      //   document.body.classList.remove("menu-close");
      // } else {
      //   document.body.classList.remove("menu-open");
      //   document.body.classList.add("menu-close");
      // }
    },
  },
};
</script>

<template>
  <div class="text-sky-400 p-4 shadow-md fixed w-full z-50 bg-white">
    <div class="container mx-auto flex justify-between items-center">
      <div class="md:hidden flex cursor-pointer" @click="toggleMenu">
        <span v-if="isMenuOpen"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6 text-red-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
        <span v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
      </div>

      <transition class="md:hidden flex cursor-pointer" name="slide">
        <div class="menu menu-open" v-if="isMenuOpen">
          <ul class="flex flex-col gap-8 ps-6">
            <li class="">
              <a class="font-medium hover:text-sky-500" href="#">Home</a>
            </li>
            <li class="">
              <a class="font-medium hover:text-sky-500" href="#">Services</a>
            </li>
            <li class="">
              <a class="font-medium hover:text-sky-500" href="#">News</a>
            </li>
            <li class="">
              <a class="font-medium hover:text-sky-500" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </transition>

      <div class="w-20 flex items-center justify-center">
        <img src="../assets/images/logo.png" alt="" />
      </div>

      <div class="hidden md:flex ">
        <ul class="flex gap-16">
          <li class="hover:text-sky-500">
            <a class="font-medium" href="#">Home</a>
          </li>
          <li class="hover:text-sky-500">
            <a class="font-medium" href="#">Services</a>
          </li>
          <li class="hover:text-sky-500">
            <a class="font-medium" href="#">Info</a>
          </li>
          <li class="hover:text-sky-500">
            <a class="font-medium" href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div class="flex gap-4">
        <a class="font-bold" href="#">Travel Blog</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transform: translateX(-100%);
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
