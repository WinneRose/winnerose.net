<template>
  <div
    class="flex flex-col space-y-4  overflow-y-scroll "
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Education />
      <Experience />
    </div>
  </div>
</template>

<style scoped>
/* Webkit browsers (Chrome, Safari) */
.scroll-container::-webkit-scrollbar {
  width: 4px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: #130d34; /* Adjust the color as needed */
}

.scroll-container::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>