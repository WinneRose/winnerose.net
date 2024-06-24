<template>
  <nav>
    <ul class="flex space-x-4 pt-3">
      <li
        v-for="page in totalPages"
        :key="page"
        :class="[
          'w-8 flex justify-center items-center text-lg rounded-lg cursor-pointer',
          page === currentPage ? 'bg-light-main text-gray-200' : 'bg-gray-200 dark:bg-dark-main text-dark-main dark:text-gray-200',
          'hover:bg-gray-300 dark:hover:bg-gray-700'
        ]"
      >
        <button
          @click="changePage(page)"
          class="w-full h-full flex justify-center items-center"
        >
          {{ page }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    changePage(pageNumber) {
      this.$emit('page-change', pageNumber);
    }
  }
};
</script>

<style scoped>
/* Scoped styles, if needed */
</style>
