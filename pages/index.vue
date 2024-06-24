
<template>
<div class="flex flex-col space-y-4 pb-12">
  
  <ProfileCard />
  <Statuscard />
  <Aboutme id="aboutme"/>
  <Projects id="projects"/>
</div>

</template>

<script>
import ProfileCard from '~/components/ProfileCard.vue';
import Statuscard from '~/components/StatusCard.vue';
import Aboutme from '~/components/AboutMe.vue';
import Projects from '~/components/Projects.vue';

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