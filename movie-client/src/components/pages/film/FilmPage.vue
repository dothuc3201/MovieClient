<template>
<div class="container pt-5">
    <div id="user-film-page" class="m-auto" style="max-width: 1150px;">
        <div>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="#" style="font-size: 24px" @click="loadData(1, $event)">PHIM SẮP CHIẾU</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#" style="font-size: 24px" @click="loadData(2, $event)">PHIM ĐANG CHIẾU</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="font-size: 24px" @click="loadData(3, $event)">SUẤT CHIẾU ĐẶC BIỆT</a>
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
    <ShowtimePopup v-if="isShowTimePopup" @closeDialog="closeDialog" :data="data" />
</div>
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
            isShowTimePopup: false,
            data: {},
        }
    },
    async created() {        
        await this.loadData(2);        
    },
    methods: {
        /**
         * load dữ liệu phim
         * DVTHUC 30/10/2022
         */
        async loadData(type, event) {
            this.controllLoader();
            try {
                if (event) {
                    document.querySelector("#user-film-page .active").classList.remove("active");
                    event.target.classList.add("active");
                }
                let current = this;
                let param = {
                    limit: 6,
                    skipPage: 0,
                    type: type
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
        /**
         * mở showtimespopup
         */
        openShowtimesPopup(data){
            this.isShowTimePopup = true;
            this.data = data;
        },
        /**
         * đóng popup
         */
        closeDialog(){
            this.isShowTimePopup = false;
        },

        

        // ẩn/ hiện loading
        ...mapActions(['controllLoader']),
    },
    computed: {

    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;422&display=swap');
.nav-link {
    font-family: 'Oswald', sans-serif;
    font-size: 30px;
    line-height: 1.5em;
    font-weight: 300;
    margin-bottom: 10px;
}
/* .film-page{
    min-height: 600px;
} */
</style>