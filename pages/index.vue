
<template>
<div class="flex flex-col space-y-4 pb-12">
  
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
}
</script>