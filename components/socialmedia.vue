<template>
  <ContentQuery path="socialmedia">
    <template #default="{ data }">
      <div class="w-full">
         <ul class="space-x-4 flex justify-center w-full">
    <li
      v-for="social in data"
      :key="social.id"
      class="text-dark-main dark:text-light-main font-bold bg-gray-200 dark:bg-dark-main p-3 rounded-lg flex-1 shadow-md "
    >
      <div class="flex justify-center focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300">
        <a :href="social.url" class="flex space-x-2 icon-hover-animation">
          <Icon :name="social.icon" :size="iconSize" />
        </a>
      </div>
    </li>
  </ul>
      </div>
    </template>
    <template #not-found>
      <p>There is no data for social</p>
    </template>
  </ContentQuery>
</template>

<script>
export default {
  data() {
    return {
      iconSize: "1.5rem", // Default size
    };
  },
  mounted() {
    this.setIconSize(); // Set the initial icon size
    window.addEventListener("resize", this.setIconSize); // Update size on window resize
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setIconSize); // Remove the event listener on component destruction
  },
  methods: {
    setIconSize() {
      // Customize this method to return the appropriate icon size based on the screen width
      const screenWidth = window.innerWidth;
      this.iconSize = screenWidth < 768 ? "2rem" : "2.2rem"; // Adjust as needed
    },
  },
};
</script>
<style>



.icon-hover-animation:hover {
  transform: scale(1.1);
}
</style>