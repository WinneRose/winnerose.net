import { NuxtImg } from '../.nuxt/components';
<template>
  <div v-if="discordstatus" class="flex flex-col space-y-4">
    <div class="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
      <div class="flex flex-col space-y-4 w-full">
        <div
          :class="getStatusClass()"
          class="px-4 lg:px-16 py-4 justify-center text-center flex flex-col rounded-2xl w-full text-dark-main font-bold text-lg h-full"
        >
          <h1>Discord Status</h1>
          <h1 class="font-semibold">{{ getMotdMessage() }}</h1>
        </div>

        <div
          v-if="activityname == 'Code'"
          class="py-6 lg:px-16 lg:py-36 justify-center text-center flex flex-col rounded-2xl text-dark-main dark:text-light-main font-bold bg-gray-200 dark:bg-dark-main items-center w-full"
        >
          <h1 class="text-lg">Visual Studio Code</h1>
          <h1>{{ activitydetails }}</h1>
        </div>
      </div>
      <div
        v-if="spotifybg"
        class="px-4 lg:px-16 py-4 flex flex-row space-x-10 rounded-2xl text-dark-main dark:text-light-main font-bold bg-gray-200 dark:bg-dark-main justify-center items-center w-full"
      >
        <NuxtImg
          :src="spotifybg"
          class="h-24 lg:h-36 xl:h-64 rounded-xl"
          alt="Spotify Album İmage"
        />
        <div class="flex flex-col text-lg space-y-2">
          <h1 class="text-lg lg:text-3xl">Listening Spotify</h1>
          <div class="text-dark-main dark:text-light-main font-semibold">
            <p>
              {{ songname }}
            </p>
            <p>
              {{ artistname }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <h1 class="text-dark-main dark:text-light-main font-bold">
      Loading Discord Data
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playingspotify: null,
      spotifybg: null,
      songname: null,
      artistname: null,
      activityname: null,
      activityimg: null,
      activitydetails: null,
      discordstatus: null,
    };
  },
  async mounted() {
    const url = "https://api.lanyard.rest/v1/users/701896585604497490";
    const options = {};

    try {
      const data = await this.useFetch(url, options);

      this.playingspotify = data.data.listening_to_spotify;
      this.discordstatus = data.data.discord_status;

      if (this.playingspotify) {
        this.spotifybg = data.data.spotify.album_art_url;
        this.songname = data.data.spotify.song;
        this.artistname = data.data.spotify.artist;
      } else {
        // Handle case when not listening to Spotify
        // You can set default values or leave variables as null
      }

      // Check if custom activity data is available
      if (
        data.data.activities &&
        data.data.activities.length > 1 &&
        this.playingspotify == true
      ) {
        this.activityname = data.data.activities[2].name;
        this.activityimg = data.data.activities[2].name;
        this.activitydetails = data.data.activities[2].state;
      } else if (
        data.data.activities &&
        data.data.activities.length > 1 &&
        this.playingspotify == false
      ) {
        this.activityname = data.data.activities[1].name;
        this.activityimg = data.data.activities[1].name;
        this.activitydetails = data.data.activities[1].state;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },

  methods: {
    async useFetch(url, options) {
      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    getStatusClass() {
      // Customize these classes based on your desired colors for each status
      const statusClasses = {
        online: "bg-green-500", // Example: green background for online status
        idle: "bg-yellow-500", // Example: yellow background for idle status
        offline: "bg-gray-500", // Example: gray background for offline status
        dnd: "bg-red-500",
        // Add more statuses as needed
      };

      // Return the class based on the current Discord status
      return statusClasses[this.discordstatus] || "bg-gray-500"; // Default to gray if status not found
    },
    getMotdMessage() {
      // Customize the messages based on Discord status
      const messages = {
        online: "Welcome! Active in Discord",
        idle: "Taking a break. Be back soon!",
        offline: "Currently offline. Check back later!",
        // Add more statuses as needed
        unknown: "Discord status unknown.",
      };

      // Return the message based on the current Discord status
      return messages[this.discordstatus] || messages.unknown;
    },
  },
};
</script>

<style scoped>
/* Your scoped styles here */
</style>
