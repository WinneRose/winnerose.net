
<template>
  <div
    class="px-8 dark:bg-dark-secondary min-h-screen w-full"
    :class="$colorMode.value == 'sepia' ? 'bg-gray-400' : 'bg-white'"
  >
    <NuxtLayout/>
    <NuxtPage />
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const appConfig = useAppConfig();
colorMode.value = appConfig["default-mode"];

</script>

