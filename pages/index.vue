
<template>
<div class="flex flex-col space-y-4 pb-12 animate-fade-in">
  
  <ProfileCard />
  <Statuscard />
  <Aboutme id="aboutme"/>
  <Projects id="projects"/>
</div>

</template>

<script>
import ProfileCard from '~/components/cards/profilecard.vue';
import Statuscard from '~/components/cards/statuscard.vue';
import Aboutme from '~/components/aboutme.vue';
import Projects from '~/components/projects.vue';

export default {
  components: {
    ProfileCard,
    Statuscard,
    Aboutme,
    Projects
  },
  // Your data, methods, computed properties, etc.
}
</script>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}</style>