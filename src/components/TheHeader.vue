<script>
// import logo from "../assets/images/logo.png";
</script>

<template>
  <div class="text-sky-400 p-4 shadow-md fixed w-full z-50 bg-white">
    <div class="container mx-auto flex justify-between items-center">
      <div class="md:hidden flex">
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <div class="w-20 flex items-center justify-center">
        <img src="../assets/images/logo.png" alt="" />
      </div>

      <div class="hidden md:flex">
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
