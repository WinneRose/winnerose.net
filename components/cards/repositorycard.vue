<template>
  <div class="text-dark-main dark:text-light-main font-bold bg-gray-200 dark:bg-dark-main p-3 rounded-lg h-36 flex flex-col justify-between">
    <div>
      <a :href="repository.html_url" target="_blank" rel="noopener noreferrer"><h3 class="text-light-main dark:text-gray-200">{{ repository.name }}</h3></a>
      <p class="mt-2 break-words truncate-4">{{ repository.description }}</p>
    </div>
    <div class="mt-4 flex space-x-4">
      <span><Icon name="bx:star" ></Icon>{{ repository.stargazers_count }}</span>
      <span><Icon name="bx:git-repo-forked"></Icon>{{ repository.forks_count }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repository: {
      type: Object,
      required: true
    }
  }
};
</script>


<style scoped>
.truncate-4 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines to show */
  -webkit-box-orient: vertical;
}
</style>