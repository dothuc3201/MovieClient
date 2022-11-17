<template>
  <TheHeader />
  <TheContainer />
  <TheFooter />
  
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheContainer from './components/layout/TheContainer.vue';
import TheFooter from './components/layout/TheFooter.vue';


export default {
  name: 'App',
  components: {
    TheHeader,
    TheContainer,
    TheFooter
  }
}
</script>

<style>

body {
  margin: 0;
  background-color: #F1F1F1;
}
@import url(./css/main.css);

</style>
