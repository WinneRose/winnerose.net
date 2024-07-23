<template>
  <div >
   

    <div class="flex flex-col md:flex-row w-full space-x-0 md:space-x-4 space-y-6 md:space-y-0 font-mono">
      
      <div class="stats-container flex flex-col bg-gray-200 shadow rounded-lg p-6 md:w-1/3 justify-center">
         <h1 class="text-xl md:text-2xl font-bold text-gray-800 mb-6">{{ username }}'s Contribution Graph</h1>
        <div class="stat-item flex justify-between mb-6">
          <div class="stat-title text-gray-600">Total Stars</div>
          <div class="stat-value text-lg font-semibold text-gray-800">{{ totalStars }}</div>
        </div>
        <div class="stat-item flex justify-between">
          <div class="stat-title text-gray-600">Total Forks</div>
          <div class="stat-value text-lg font-semibold text-gray-800">{{ totalForks }}</div>
        </div>
      </div>
      <div class="contribution-graph-container flex flex-col bg-gray-200 shadow rounded-lg p-6 md:w-2/3">
        <div v-if="days.length === 0" class="text-gray-500 text-center">
          No contributions data available
        </div>
        <div v-else class="contribution-graph grid grid-cols-12 gap-2 mb-4">
          <div
            v-for="day in days"
            :key="day.date"
            :class="getClass(day.count)"
            class="contribution-cell w-full h-6 flex items-center justify-center rounded"
            :data-date="day.date"
            :data-count="day.count"
          >
            <span v-if="showCounts" class="text-xs text-center text-white">
              {{ day.count }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { createClient } from "~/services/github";
import { GET_USER_CONTRIBUTIONS } from "~/queries/github";
import axios from "axios";

const days = ref([]);
const showCounts = ref(false);
const totalStars = ref(0);
const totalForks = ref(0);

const client = createClient();

const username = "WinneRose"; // Replace with your GitHub username

async function fetchInfo() {
  try {
    // Fetch user's repositories
    const sfres = await axios.get(`https://api.github.com/users/${username}/repos`);
    calculateTotals(sfres.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function calculateTotals(data) {
  let stars = 0;
  let forks = 0;

  data.forEach((repo) => {
    stars += repo.stargazers_count;
    forks += repo.forks_count;
  });

  totalStars.value = stars;
  totalForks.value = forks;
}

async function fetchContributions(cursor = null) {
  try {
    const response = await client.request(GET_USER_CONTRIBUTIONS, { cursor });
    days.value = transformData(response);

    // Fetch more pages if available
    if (response.user.repositories.pageInfo.hasNextPage) {
      const nextCursor = response.user.repositories.pageInfo.endCursor;
      await fetchContributions(nextCursor);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function transformData(data) {
  const contributions = {};

  if (data.user && data.user.repositories && data.user.repositories.nodes) {
    data.user.repositories.nodes.forEach((repo) => {
      if (
        repo.defaultBranchRef &&
        repo.defaultBranchRef.target &&
        repo.defaultBranchRef.target.history
      ) {
        repo.defaultBranchRef.target.history.nodes.forEach((node) => {
          const date = new Date(node.committedDate).toISOString().split("T")[0];
          if (!contributions[date]) {
            contributions[date] = 0;
          }
          contributions[date] += 1;
        });
      }
    });
  }

  // Generate dates for the last 3 months
  const endDate = new Date();
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 3); // 3 months ago

  const dateRange = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    const dateString = currentDate.toISOString().split("T")[0];
    dateRange.push({
      date: dateString,
      count: contributions[dateString] || 0,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateRange;
}

function getClass(count) {
  if (count >= 10) return "bg-green-800";
  if (count >= 5) return "bg-green-600";
  if (count >= 1) return "bg-green-400";
  return "bg-gray-300";
}

onMounted(async () => {
  await fetchInfo();
  await fetchContributions();

  // Initialize Tippy tooltips
  const tippy = useNuxtApp().$tippy;
  tippy("[data-date]", {
    content: (reference) => {
      const date = reference.getAttribute("data-date");
      const count = reference.getAttribute("data-count");
      return `${date}: ${count} contributions`;
    },
    theme: "light",
    placement: "top",
  });
});
</script>


<style scoped>

</style>
