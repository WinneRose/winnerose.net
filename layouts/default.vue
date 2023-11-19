
<template>
  <nav>
    <div
      class="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto p-4"
    >
      <a class="flex items-center space-x-3 rtl:space-x-reverse">
        <NuxtImg
          :src="
            $colorMode.value === 'dark' || $colorMode.value === 'sepia'
              ? '/logo.png'
              : '/logo-light.png'
          "
          class="custom-logo-class"
        />
      </a>

      <div class="text-center py-10 md:py-0">
        <ul class="font-poppins font-normal space-y-4">
          <li class="block md:inline-block">
            <a
              href="#"
              class="py-2 px-3 text-dark-main dark:text-white rounded-xl hover:bg-gray-300 dark:hover:bg-dark-main"
              >home</a
            >
          </li>
          <li class="block md:inline-block">
            <a
              href="#"
              class="py-2 px-3 text-dark-main dark:text-white rounded-xl hover:bg-gray-300 dark:hover:bg-dark-main"
              >about me</a
            >
          </li>
          <li class="block md:inline-block">
            <a
              href="#"
              class="py-2 px-3 text-dark-main dark:text-white rounded-xl hover:bg-gray-300 dark:hover:bg-dark-main"
              >projects</a
            >
          </li>
          <li class="block md:inline-block">
            <a
              href="#"
              class="py-2 px-3 text-dark-main dark:text-white rounded-xl hover:bg-gray-300 dark:hover:bg-dark-main"
              >playlists</a
            >
          </li>
          <li class="block md:inline-block">
            <USelectMenu
              v-model="$colorMode.preference"
              :options="modes"
              placeholder="Select Color Mode"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const modes = ["system", "light", "dark", "sepia"];
</script>

<style scoped>
.custom-logo-class {
  width: auto; /* or set a fixed width */
  max-height: 100%; /* or adjust as needed */
}
</style>