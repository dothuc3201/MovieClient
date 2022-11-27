<template>
    <div>
        <base-carousel></base-carousel>
        <film-page class="mt-4"></film-page>
    </div>
</template>
<script>
import BaseCarousel from '@/components/base/carousel/BaseCarousel.vue';
import FilmPage from '@/components/pages/film/FilmPage.vue';
export default {
  components: { BaseCarousel, FilmPage },
    
}
</script>