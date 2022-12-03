<template>
  <div class="d-flex flex-column">
    <TheHeader />
    <TheContainer class="flex-fill" />
    <TheFooter v-if="!isAdmin" />
  </div>

</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheContainer from './components/layout/TheContainer.vue';
import TheFooter from './components/layout/TheFooter.vue';
import { mapActions, mapState } from 'vuex';


export default {
  name: 'App',
  components: {
    TheHeader,
    TheContainer,
    TheFooter
  },

  computed: {
    ...mapState({
      isAdmin: state => state.isAdmin
    })
  },

  methods:{
    ...mapActions(['changeToken']),
    ...mapActions(['changeIsAdmin']),
  },

  created(){
    this.changeIsAdmin(localStorage.getItem("isAdmin") == 'true' ? true : false);
    this.changeToken(localStorage.getItem("token"));
  },
  
}
</script>

<style>
body {
  margin: 0;
  background-color: #F1F1F1;
}

@import url(./css/main.css);

@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
