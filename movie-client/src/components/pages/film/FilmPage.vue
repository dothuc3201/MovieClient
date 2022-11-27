<template>
    <div class="m-auto mt-3" style="max-width: 1150px;">
        <div>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="#" style="font-size: 24px">Phim sắp chiếu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="font-size: 24px">Phim đang chiếu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="font-size: 24px">Suất chiếu đặc biệt</a>
                </li>
            </ul>
        </div>
        <div class="film-page row mt-3">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 padding-right-30 padding-left-30 padding-bottom-30"
                v-for="(item, index) in filmList" :key="index">
                <FilmBox idField="_id" :data="item" @openShowtimesPopup='openShowtimesPopup'/>
            </div>
        </div>
    </div>
    <ShowtimePopup v-if="isShowTimePopup"/>
</template>
<script>
import { getPaging } from '@/js/api/getApi';
import { mapActions } from 'vuex';
import FilmBox from './FilmBox.vue'
import ShowtimePopup from '../showtimes/ShowtimePopup.vue';
export default {
    components: { FilmBox, ShowtimePopup },
    data() {
        return {
            filmList: [],
            isShowTimePopup: false
        }
    },
    async created() {
        this.controllLoader();
        await this.loadData();        
    },
    methods: {
        /**
         * load dữ liệu phim
         * DVTHUC 30/10/2022
         */
        async loadData() {
            try {
                let current = this;
                
                let param = {
                    limit: 6,
                    skipPage: 0,
                    type: 3
                }
                const res = await getPaging("film/get-films", param);
                if (res.data) {
                    current.filmList = res.data.data;
                }
                this.controllLoader();
            } catch (error) {
                console.log(error);
                this.controllLoader();
            }
        },

        openShowtimesPopup(){
            this.isShowTimePopup = true;
        },

        // ẩn/ hiện loading
        ...mapActions(['controllLoader']),
    },
    computed: {

    },
}
</script>

<style>

.film-page{
    min-height: 600px;
}
</style>