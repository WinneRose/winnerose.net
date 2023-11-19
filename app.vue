
<template>
  <div
    class="p-10 dark:bg-dark-secondary min-h-screen container"
    :class="$colorMode.value == 'sepia' ? 'bg-gray-400' : 'bg-white' "
  >
    <NuxtLayout />
    <NuxtPage />
  </div>
</template>

<script setup>
const appConfig = useAppConfig();
const colorMode = useColorMode();



console.log(appConfig["default-mode"]);
</script>

