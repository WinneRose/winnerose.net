
<template>
  <ContentQuery path="experience">
    <template #default="{ data }">
      <ul class="pt-5 space-y-4">
        <h1 class="text-2xl text-dark-main dark:text-light-main font-black">
          Experience
        </h1>
        <li
          v-for="experience of sortedExperiences(data)"
          :key="experience.title"
          class="text-dark-main dark:text-light-main font-bold bg-gray-200 dark:bg-dark-main p-3 rounded-lg flex justify-between"
        >
          <div>
            <h1 class="text-xl font-semibold">{{ experience.title }}</h1>
            <p>{{ experience.role }}</p>
          </div>

          <p class="font-normal">{{ experience.date }}</p>
        </li>
      </ul>
    </template>
    <template #not-found>
      <p>There is no data for experience</p>
    </template>
  </ContentQuery>
</template>

<script>
export default {
  methods: {
    sortedExperiences(data) {
      // Sort the experiences array by date in ascending order (old to new)
      return data.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    },
  },
};
</script>

<style>
</style>
