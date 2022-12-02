<template>
    <div>
        <base-carousel></base-carousel>
        <film-page class="mt-4"></film-page>
        <ChooseCinema v-if="!cinemaId" />
    </div>
</template>
<script>
import BaseCarousel from '@/components/base/carousel/BaseCarousel.vue';
import FilmPage from '@/components/pages/film/FilmPage.vue';
import ChooseCinema from './ChooseCinema.vue';
import { mapState } from 'vuex';
export default {
  components: { BaseCarousel, FilmPage, ChooseCinema },
    computed:{
      ...mapState({
        cinemaId: state => state.cinemaId
      })
    }
}
</script>