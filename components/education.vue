
<template>
  <ContentQuery path="education">
    <template #default="{ data }">
      <ul class="pt-5 space-y-4">
        <h1 class="text-2xl text-dark-main dark:text-light-main font-black">
          Education
        </h1>
        <li
          v-for="education of sortedEducations(data)"
          :key="education.title"
          class="text-dark-main dark:text-light-main font-bold bg-gray-200 dark:bg-dark-main p-3 rounded-lg flex justify-between"
        >
          <div>
            <h1 class="text-xl font-semibold">{{ education.title }}</h1>
            <p>{{ education.role }}</p>
          </div>

          <p class="font-normal">{{ education.date }}</p>
        </li>
      </ul>
    </template>
    <template #not-found>
      <p>There is no data for education</p>
    </template>
  </ContentQuery>
</template>

<script>
export default {
  methods: {
    sortedEducations(data) {
      // Sort the educations array by date in ascending order (old to new)
      return data.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    },
  },
};
</script>

<style>
</style>
