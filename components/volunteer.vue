<template>
  <ContentQuery path="volunteer">
    <template #default="{ data }">
      <div class="p-5 space-y-4 bg-gray-200 dark:bg-dark-main rounded-lg">
        <h1 class="text-2xl text-dark-main dark:text-light-main font-black">
          Volunteer
        </h1>
        <ul>
          <li
            v-for="volunteer of sortedVolunteers(data)"
            :key="volunteer.title"
            class="text-dark-main dark:text-gray-200 font-bold p-3 rounded-lg flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4"
          >
            <p class="font-normal w-full md:w-24 ">{{ volunteer.date }}</p>
            <div class="flex-1">
              <h1 class="text-xl font-mono">{{ volunteer.title }}</h1>
              <p>
                {{ volunteer.role }} | {{ volunteer.location }}
                <Icon :name="'circle-flags:' + volunteer['location-code']" class="self-center"/>
              </p>
              <p class="font-mono pt-4">{{ volunteer.details }}</p>
              <p v-if="volunteer.website" class="pt-2">
  🔗 <a
    :href="volunteer.website"
    target="_blank"
    rel="noopener noreferrer"
    class="underline text-blue-600 hover:text-blue-800 transition-all"
  >
    {{ volunteer.website }}
  </a>
</p>

            </div>
          </li>
        </ul>
      </div>
    </template>
    <template #not-found>
      <p>There is no data for volunteer</p>
    </template>
  </ContentQuery>
</template>

<script>
export default {
  methods: {
    sortedVolunteers(data) {
      // Sort the volunteer array by date in ascending order (old to new)
      return data.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    },
  },
};
</script>

<style>
/* Add any custom styles if needed */
</style>
