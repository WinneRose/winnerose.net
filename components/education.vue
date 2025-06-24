<template>
  <ContentQuery path="education">
    <template #default="{ data }">
      <div class="p-5 space-y-4 bg-gray-200 dark:bg-dark-main rounded-lg">
        <h1 class="text-2xl text-dark-main dark:text-light-main font-black">
          Education
        </h1>
        <ul>
          <li
            v-for="education of sortedEducation(data)"
            :key="education.title"
            class="text-dark-main dark:text-gray-200 font-bold p-3 rounded-lg flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4"
          >
            <p class="font-normal w-full md:w-24 ">{{ education.date }}</p>
            <div class="flex-1">
              <h1 class="text-xl font-mono">{{ education.title }}</h1>
              <p>
                {{ education.degree }} | {{ education.location }}
                <Icon :name="'circle-flags:' + education['location-code']" class="self-center"/>
              </p>
              <p class="font-mono pt-4">{{ education.details }}</p>
              <p v-if="education.website" class="pt-2">
                🎓 <a
                  :href="education.website"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline text-blue-600 hover:text-blue-800 transition-all"
                >
                  {{ education.website }}
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </template>

    <template #not-found>
      <p>There is no data for education</p>
    </template>
  </ContentQuery>
</template>

<script>
export default {
  methods: {
    sortedEducation(data) {
      return data.slice().sort((a, b) => {
        const dateA = new Date(a.sortDate || a.date);
        const dateB = new Date(b.sortDate || b.date);
        return dateA - dateB;
      });
    },
  },
};
</script>

