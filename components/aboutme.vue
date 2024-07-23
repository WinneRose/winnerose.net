<template>
  <div class="flex flex-col space-y-4 overflow-y-scroll">
    <Experience />
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
