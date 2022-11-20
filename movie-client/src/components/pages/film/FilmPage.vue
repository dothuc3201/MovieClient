<template>
    <div class="m-auto" style="max-width: 1150px;">
        <div>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Phim sắp chiếu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Phim đang chiếu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Suất chiếu đặc biệt</a>
                </li>
            </ul>
        </div>
        <div class="film-page row">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 padding-right-30 padding-left-30 padding-bottom-30"
                v-for="(item, index) in filmList" :key="index">
                <FilmBox idField="_id" :data="item" />
            </div>
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
        this.controllLoader();
        await this.loadData();
        this.filmList = res.data;
        this.controllLoader();
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
                const res = await getPaging("film/get-films", param);
                if (res.data) {
                    current.filmList = res.data;
                }
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

<style>

.film-page{
    min-height: 600px;
}
</style>