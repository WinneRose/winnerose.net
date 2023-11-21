<template>
  <div
    class="flex flex-col space-y-4 p-4 overflow-y-scroll h-[85vh] scroll-container"
  >
    <h1 class="text-2xl text-dark-main dark:text-light-main font-black">
      About Me
    </h1>

    <div
      class="text-dark-main dark:text-light-main font-bold bg-gray-200 dark:bg-dark-main p-3 rounded-lg space-y-3"
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

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Education />
      <Experience />
    </div>
  </div>
</template>

<style scoped>
/* Webkit browsers (Chrome, Safari) */
.scroll-container::-webkit-scrollbar {
  width: 4px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: #130d34; /* Adjust the color as needed */
}

.scroll-container::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>