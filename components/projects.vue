<template>
  <div class="flex-col space-y-3">
    <div class="flex justify-between items-center space-x-4">
      <h1 class="text-2xl text-dark-main dark:text-light-main font-black">
        Projects
      </h1>
      <Pagination
        :totalPages="totalPages"
        :currentPage="currentPage"
        @page-change="handlePageChange"
      />
    </div>

    <div v-if="loading">Loading...</div>
    <div v-else>
      <div class="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-8">
        <RepositoryCard
          v-for="repo in paginatedRepos"
          :key="repo.id"
          :repository="repo"
          class="transition-transform duration-500 transform hover:scale-110"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RepositoryCard from "~/components/cards/repositorycard.vue";
import Pagination from "~/components/pagination.vue";

const USER_PER_PAGE = 6; // Define your USER_PER_PAGE constant here

export default {
  components: {
    RepositoryCard,
    Pagination,
  },
  data() {
    return {
      repos: [],
      totalPages: 0,
      loading: true,
      currentPage: 1,
    };
  },
  async mounted() {
    await this.fetchData();
  },
  computed: {
    paginatedRepos() {
      const startIndex = (this.currentPage - 1) * USER_PER_PAGE;
      const endIndex = startIndex + USER_PER_PAGE;
      return this.repos.slice(startIndex, endIndex);
    },
  },
  methods: {
    async fetchData() {
      try {
        const username = "WinneRose"; // Replace with your GitHub username
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );

        // Initialize counters
        let totalStars = 0;
        let totalForks = 0;

        // Iterate through repositories to sum up stars and forks
        this.repos.forEach((repo) => {
          totalStars += repo.stargazers_count;
          totalForks += repo.forks_count;
        });

        // Assign calculated values to instance variables or state
        this.totalStars = totalStars;
        this.totalForks = totalForks;
        
        console.log(response);
        this.repos = response.data;
        this.totalPages = Math.ceil(this.repos.length / USER_PER_PAGE);
        this.loading = false;
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    },
    handlePageChange(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>
