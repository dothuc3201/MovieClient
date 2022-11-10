<template>
    <div id="loading-bg" v-show="isShowLoading">
        <div class="loading-modal"></div>
        <div class="loading">
            <div class="effect-1 effects"></div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['isShowLoading']),
    }
}
</script>
<style>
@import url(./loading.css);
</style>