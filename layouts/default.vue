<template>
  <nav>
    <div>
    
      <div class="flex   justify-between  py-4  md:flex md:w-auto ">
        <div class="visible md:hidden" >
          <button
            class="md:hidden p-2  text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none rounded-lg "
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
        
          <div class="hidden md:flex items-center space-x-4">
          <ul class="flex space-x-4">
            <li><a href="/" class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:animate-pulse">Home</a></li>
            <li><a href="#aboutme" class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:animate-pulse">About Me</a></li>
            <li><a href="#projects" class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:animate-pulse">Projects</a></li>
           
          </ul>

         
        </div>
        <div class="justify-self-center content-center">
         
   <button
    @click="toggleDarkMode($colorMode.preference === 'dark' ? 'light' : 'dark')"
    class="relative px-4 py-1 rounded-xl bg-gray-200 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300 "
  >
    <span
      class="  flex items-center justify-center transform transition-transform duration-500 ease-in-out"
     
    >
      <Icon
        v-if="$colorMode.preference === 'dark'"
        name="solar:sun-bold-duotone"
        size="20px"
        class="text-white"
      />
      <Icon
        v-else
        name="solar:moon-bold-duotone"
        size="20px"
        class="text-gray-800"
      />
    </span>
  </button>
 
        </div>

      
      </div>

      <div :class="['md:hidden', isMobileMenuOpen ? 'block' : 'hidden']">
        <ul class="py-2 space-y-2">
          <li><a href="/" class="block py-2 px-4 text-gray-700 dark:text-gray-300   hover:bg-gray-200 dark:hover:bg-gray-700  hover:animate-pulse">Home</a></li>
          <li><a href="#aboutme" class="block py-2 px-4 text-gray-700 dark:text-gray-300  hover:bg-gray-200 dark:hover:bg-gray-700 hover:animate-pulse">About Me</a></li>
          <li><a href="#projects" class="block py-2 px-4 text-gray-700 dark:text-gray-300  hover:bg-gray-200 dark:hover:bg-gray-700 hover:animate-pulse">Projects</a></li>
         
        </ul>
      </div>
    </div>
      
  </nav>
  <SpeedInsights />
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

function toggleDarkMode(theme) {
  useColorMode().preference = theme
}
</script>
