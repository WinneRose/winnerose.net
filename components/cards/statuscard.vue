<template >
   <div
      class="text-dark-main dark:text-gray-200 font-semibold bg-gray-200 dark:bg-dark-main p-3 rounded-lg space-y-3 shadow-md"
    >
      <p>
        I have been working in the software and design sector since I became
        aware of myself, and my childhood dream was actually to prepare myself
        for the worlds of tomorrow by researching and I aim to share these
        research and my work with people and expand my knowledge base
      </p>

      <p>
        <span class="dark:text-green-500 text-light-main"
          >In the software development side,</span
        >
        I have mostly worked as a front-end developer, but I also have
        sufficient knowledge on back-end development and I am preparing myself
        for newer technologies. I actively continue my research in product hunt
        and GitHub to find and use these technologies
      </p>

      <p>
        <span class="dark:text-green-500 text-light-main"
          >In the design aspect,</span
        >
        I try to create modern and eye-catching designs that appeal to people.
        In this direction, I actively use Dribbble and Behance to get inspired,
        so that I can add a new perspective to myself.
      </p>
    </div>

  <div v-if="discordstatus" class="flex flex-col space-y-4">
    <div class="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
      <div class="flex flex-col space-y-4 w-full">
        <div
          :class="getStatusClass()"
          class="px-4 lg:px-16 py-4 justify-center text-center flex flex-col rounded-2xl w-full text-gray-100 font-bold text-lg h-full dark:text-dark-main shadow-md"
        >
          <h1>Discord Status</h1>
          <h1 class="font-semibold">{{ getMotdMessage() }}</h1>
        </div>

        <div
          v-if="activityname == 'Code'"
          class="py-6 lg:px-16 lg:py-12 justify-center text-center flex flex-col rounded-2xl text-dark-main dark:text-light-main font-bold bg-gray-200 dark:bg-dark-main items-center w-full shadow-md"
        >
          <h1 class="text-lg">Visual Studio Code</h1>
          <h1>{{ activitydetails }}</h1>
        </div>

        <Socialmedia />
      </div>

       <div
    v-if="spotifybg"
    class="relative px-6 lg:px-12 py-8 flex flex-row space-x-6 rounded-3xl text-dark-main dark:text-light-main font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 justify-center items-center w-full h-auto shadow-md"
  >
    <div class="relative w-1/3 lg:w-1/4">
      <NuxtImg
        :src="spotifybg"
        class="object-cover rounded-xl shadow-lg transition-transform duration-500 transform hover:rotate-6 hover:scale-110"
        alt="Spotify Album Image"
      />
    </div>
    <div class="flex flex-col justify-center items-center w-2/3 lg:w-3/4">
      <h1 class="text-2xl lg:text-4xl text-white drop-shadow-lg mb-4">Listening to Spotify</h1>
      <div class="font-semibold space-y-1 text-center">
        <p class="text-white text-xl lg:text-2xl">
          {{ songname }}
        </p>
        <p class="text-gray-200 text-lg lg:text-xl">
          {{ artistname }}
        </p>
      </div>
    </div>
    <div class="absolute bottom-2 right-2 text-sm text-gray-300 dark:text-gray-500">
      Powered by Spotify & Lanyard
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
      activitydetails: null,
      discordstatus: null,
    };
  },
  async mounted() {
    // Initial fetch of data
    await this.fetchDiscordData();

    // Schedule fetching data every 5 minutes
    this.interval = setInterval(async () => {
      await this.fetchDiscordData();
    }, 5 * 60 * 1000); // 5 minutes in milliseconds
  },
  beforeDestroy() {
    // Clean up the interval when the component is destroyed
    clearInterval(this.interval);
  },
  methods: {
    async fetchDiscordData() {
      const url = "https://api.lanyard.rest/v1/users/701896585604497490";
      const options = {};

      try {
        const discord_data = await this.useFetch(url, options);

        this.playingspotify = discord_data.data.listening_to_spotify;
        this.discordstatus = discord_data.data.discord_status;

        if (this.playingspotify) {
          this.spotifybg = discord_data.data.spotify.album_art_url;
          this.songname = discord_data.data.spotify.song;
          this.artistname = discord_data.data.spotify.artist;
        }

        let isCoding = discord_data.data.activities.some(
          (coding) => coding.application_id === "782685898163617802"
        );
        if (isCoding) {
          const code_activity = discord_data.data.activities.find(
            (activity) => activity.id === "a8bf9e64e3af4b15"
          );
          this.activityname = code_activity.name;
          this.activitydetails = code_activity.state;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
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
      const statusClasses = {
        online: "bg-green-500",
        idle: "bg-yellow-500",
        offline: "bg-gray-500",
        dnd: "bg-red-500",
      };

      return statusClasses[this.discordstatus] || "bg-gray-500";
    },
    getMotdMessage() {
      const messages = {
        online: "Welcome! Active in Discord",
        idle: "Taking a break. Be back soon!",
        offline: "Currently offline. Check back later!",
        dnd: "I'm currently occupied. Please, no disturbances. Thank you!",
        unknown: "Discord status unknown.",
      };

      return messages[this.discordstatus] || messages.unknown;
    },
  },
};

</script>

<style scoped>
/* Your scoped styles here */
</style>
