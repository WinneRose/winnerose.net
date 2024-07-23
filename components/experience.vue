<template>
  <ContentQuery path="experience">
    <template #default="{ data }">
      <div class="p-5 space-y-4 bg-gray-200 dark:bg-dark-main rounded-lg">
        <h1 class="text-2xl text-dark-main dark:text-light-main font-black">
          Experience
        </h1>
        <ul>
          <li
            v-for="experience of sortedExperiences(data)"
            :key="experience.title"
            class="text-dark-main dark:text-gray-200 font-bold p-3 rounded-lg flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4"
          >
            <p class="font-normal w-full md:w-24 ">{{ experience.date }}</p>
            <div class="flex-1">
              <h1 class="text-xl font-mono">{{ experience.title }}</h1>
            <p>{{ experience.role }} | {{ experience.location }} <Icon :name="'circle-flags:' + experience['location-code']" class="self-center"/></p>
              <p class="font-mono pt-4">{{ experience.details }}</p>
            </div>
          </li>
        </ul>
      </div>
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
/* Add any custom styles if needed */
</style>
