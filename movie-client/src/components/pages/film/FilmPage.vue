<template>
    <div class="film-page row">
        <div class="col-lg-4 col-md-4 col-sm-8 col-xs-16 padding-right-30 padding-left-30 padding-bottom-30"
            v-for="(item, index) in filmList" :key="index">
            <FilmBox idField="_id" :data="item" />
        </div>
    </div>
</template>
<script>
import { getPaging } from '@/js/api/getApi';
import { mapActions } from 'vuex';
import FilmBox from './FilmBox.vue'
import { res } from '@/js/constants';
export default {
    components: { FilmBox },
    data() {
        return {
            filmList: []
        }
    },
    async created() {
        await this.loadData();
        console.log(res.data);
        this.filmList = res.data;
        console.log(this.filmList);
    },
    methods: {
        /**
         * load dữ liệu phim
         * DVTHUC 30/10/2022
         */
        async loadData() {
            try {
                var current = this;
                let param = {
                    limit: 6,
                    skipPage: 0,
                    type: 3
                }
                current.controllLoader();
                const res = await getPaging("film/get-films", param);
                if (res.data) {
                    current.filmList = res.data;
                }
                current.controllLoader();
            } catch (error) {
                console.log(error);
            }
        },

        // ẩn/ hiện loading
        ...mapActions(['controllLoader']),
    },
    computed: {

    }
}
</script>