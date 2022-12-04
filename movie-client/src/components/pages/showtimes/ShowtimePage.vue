<template>
    <div id="showtime-page" class="m-auto mt-3" style="max-width: 900px;">
        <div>
            <ul class="nav justify-content-center nav-bar">
                <li class="nav-item">
                    <a class="nav-link active" href="#" style="font-size: 24px" @click="loadData">
                        {{ getDate(nowTime) }}
                        <span style="font-size: 16px">/{{ getMonth(nowTime) }}</span></a>
                </li>
                <li class="nav-item" v-for="n in 5" :key="n">
                    <a class="nav-link" href="#" style="font-size: 24px" @click="loadDataByDate(n, $event)">
                        {{ getDate(new Date(nowTime.getTime() + n * 86400000)) }}
                        <span style="font-size: 16px">/{{ getMonth(new Date(nowTime.getTime() + n * 86400000)) }}
                        </span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="showtime-film row">
            <div v-for="(item, index) in filmList" :key="index" class="col-6 showtime-film-item">
                <ShowtimeBox :data=item @openDetail="openDetail" />
            </div>
        </div>
    </div>
    <ShowtimeDetail v-if="isShowShowtimeDetail" @closeDialog="closeDialog" />
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ShowtimeBox from './ShowtimeBox.vue';
import { getPaging } from '@/js/api/getApi';
import ShowtimeDetail from './ShowtimeDetail.vue';

export default {
    data() {
        return {
            nowTime: new Date(),
            filmList: [],
            isShowShowtimeDetail: false,
        };
    },
    components: { ShowtimeBox, ShowtimeDetail },
    async created() {

        await this.loadData();
    },
    computed: {
        ...mapState({
            cinemaId: state => state.cinemaId
        })
    },
    methods: {

        async loadData(event) {

            this.controllLoader();
            try {
                if (event) {
                    document.getElementById("showtime-page").querySelector(".active").classList.remove("active");
                    event.target.classList.add("active");
                }
                var current = this;
                const res = await getPaging("film-schedule/get-film-schedules-by-cinema", {
                    cinemaId: current.cinemaId,
                    date: new Date(current.nowTime.getFullYear(), current.nowTime.getMonth(), current.nowTime.getDate(), 7)
                });
                if (res.data) {

                    current.filmList = res.data.data;
                }

                current.controllLoader();
            } catch (error) {
                console.log(error);
                current.controllLoader();
            }
        },

        getDate(time) {
            let day = (new Date(time)).getDate();
            day = day < 10 ? `0${day}` : day;
            return day;
        },

        getMonth(time) {
            // let day = (new Date(time)).getDate();
            // day = day < 10 ? `0${day}` : day;
            let month = (new Date(time)).getMonth() + 1;
            month = month < 10 ? `0${month}` : month;
            return month;
        },

        async loadDataByDate(n, event) {
            document.getElementById("showtime-page").querySelector(".active").classList.remove("active");
            event.target.classList.add("active");
            this.controllLoader();
            try {
                var current = this;
                let queryDate = new Date(current.nowTime.getTime() + n * 86400000);
                const res = await getPaging("film-schedule/get-film-schedules-by-cinema", {
                    cinemaId: current.cinemaId,
                    date: new Date(queryDate.getFullYear(), queryDate.getMonth(), queryDate.getDate(), 7)
                });
                if (res.data) {
                    current.filmList = res.data.data;
                }

            } catch (error) {
                console.log(error);
            }
            this.controllLoader();
        },

        closeDialog() {
            this.isShowShowtimeDetail = false;
        },

        openDetail() {
            this.isShowShowtimeDetail = true;
        },

        ...mapActions(['controllLoader']),
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;422&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
    .nav-bar {
        margin-bottom: 25px;
        li {
            border-bottom: 1px solid #7e7b7b;
        }
    }
    .showtime-film-item {
        margin: 10px 10px 30px 10px;
        width: 47%;
    }
</style>
