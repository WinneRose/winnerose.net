<template>
  <nav>
    <div>
      <SpeedInsights />
      <div class="grid grid-cols-3 w-[100vw] justify-between  py-4  md:flex md:w-auto ">
        <div class="visible md:hidden" >
          <button
            class="md:hidden p-2  text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none rounded-lg"
            @click="toggleMobileMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        
        <div class="justify-self-center content-center">
          <a href="/" >
            <NuxtImg
              :src="
                $colorMode.value === 'dark' || $colorMode.value === 'sepia'
                  ? '/images/logo-dark.png'
                  : '/images/logo-light.png'
              "
              alt="Logo"
              width="50px"
              height="auto"
            />
          </a>
        </div>

        <div class="hidden md:flex items-center space-x-4">
          <ul class="flex space-x-4">
            <li><a href="/" class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</a></li>
            <li><a href="#aboutme" class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About Me</a></li>
            <li><a href="#projects" class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a></li>
           
          </ul>

          <div>
            <USelectMenu
              v-model="$colorMode.preference"
              :options="modes"
              class="py-2 px-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              placeholder="Select Color Mode"
            />
          </div>
        </div>
      </div>

      <div :class="['md:hidden', isMobileMenuOpen ? 'block' : 'hidden']">
        <ul class="py-2 space-y-2">
          <li><a href="/" class="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Home</a></li>
          <li><a href="#aboutme" class="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">About Me</a></li>
          <li><a href="#projects" class="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Projects</a></li>
          <li>
            <USelectMenu
              v-model="$colorMode.preference"
              :options="modes"
              class="py-2 px-4 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none w-56"
              placeholder="Select Color Mode"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { ref } from 'vue';

const modes = ["light", "dark", "sepia"];
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
