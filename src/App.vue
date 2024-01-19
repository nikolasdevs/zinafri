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
    },
  },
};
</script>

<template>
  <header>
    <div
      class="text-sky-400 p-4 shadow-md fixed w-full z-50 bg-white bg-opacity-95"
    >
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
              class="w-6 h-6"
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
            <div class="flex flex-col gap-8 ps-6">
              <router-link :to="{ name: 'Home' }" class="hover:text-sky-500"
                >HOME</router-link
              >
              <router-link :to="{ name: 'Service' }" class="hover:text-sky-500"
                >SERVICES</router-link
              >
              <router-link :to="{ name: 'News' }" class="hover:text-sky-500"
                >NEWS</router-link
              >
              <router-link :to="{ name: 'Contact' }" class="hover:text-sky-500"
                >CONTACT</router-link
              >
            </div>
          </div>
        </transition>

        <div class="w-8 md:w-20 flex items-center justify-center">
          <a href=""><img src="/src/assets/images/logo.png" alt="logo" /></a>
        </div>

        <div class="hidden md:flex gap-10" id="nav">
          <router-link :to="{ name: 'Home' }">HOME</router-link>
          <router-link :to="{ name: 'Service' }">SERVICES</router-link>
          <router-link :to="{ name: 'News' }">NEWS</router-link>
          <router-link :to="{ name: 'Contact' }">CONTACT</router-link>
        </div>

        <div class="flex gap-4">
          <a class="font-semibold" href="#">TRAVEL BLOG</a>
        </div>
      </div>
    </div>
    <router-view />
  </header>
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
