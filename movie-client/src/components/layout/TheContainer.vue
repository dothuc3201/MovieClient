<template>
    <div class="content">
        <BaseCarousel />
        <router-view>Content</router-view>
    </div>
</template>
<script setup>
import BaseCarousel from '../base/carousel/BaseCarousel.vue';
</script>
