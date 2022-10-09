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

</style>
