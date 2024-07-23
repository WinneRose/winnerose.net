
<template>
   
<div class="flex flex-col space-y-4 pb-12 animate-fade-in relative">
  
  <Profilecard/>
  <Statuscard />
  <Aboutme id="aboutme"/>
  <Projects id="projects"/>
  <Github/>
</div>

</template>
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