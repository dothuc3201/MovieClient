<template>
    <div>
        <div class="m-auto mt-5" id="film-detail-info">
            <div class="row">
                <div class="product-item no-padding col-3">
                    <div class="pi-img-wrapper">
                        <img class="img-responsive border-radius-20 m-auto" alt="" :src="data.avatarUrl">
                        <!-- <span style="position: absolute; top: 10px; left: 10px;">
                            <img src="/Assets/Common/icons/films/c-18.png" class="img-responsive">
                        </span> -->
                    </div>
                    <div class="sticker sticker-new"></div>
                </div>
                <div class="col-9">
                    <div class="film-info film-xs-info">
                        <h3 class="film-name d-flex align-items-center text-center text-sm-left text-xs-left bold font-sm-18 font-xs-14"
                            style="max-height: 50px; min-height: 50px;">
                            {{ data.name }}
                        </h3>
                        <div class="fiml-description">{{ data.description }}</div>
                        <div class="row mt-3">
                            <div class="col-3 film-lable">ĐẠO DIỄN:</div>
                            <div class="col-9 fiml-description">{{ data.director }}</div>
                        </div>
                        <div class="row">
                            <div class="col-3 film-lable">DIỄN VIÊN:</div>
                            <div class="col-9 fiml-description">{{ data.actors }}</div>
                        </div>
                        <div class="row">
                            <div class="col-3 film-lable">THỂ LOẠI:</div>
                            <div class="col-9 fiml-description">{{ data.genre }}</div>
                        </div>
                        <div class="row">
                            <div class="col-3 film-lable">THỜI LƯỢNG:</div>
                            <div class="col-9 fiml-description">{{ data.durationMin }} phút</div>
                        </div>
                        <div class="row">
                            <div class="col-3 film-lable">ĐỘ TUỔI:</div>
                            <div class="col-9 fiml-description">{{ data.ageRestriction }} tuổi</div>
                        </div>
                        <div class="row">
                            <div class="col-3 film-lable">NGÀY KHỞI CHIẾU:</div>
                            <div class="col-9 fiml-description">{{ getDate(data.openingDay) }}-{{getMonth(data.openingDay)}}-{{(new Date(data.openingDay)).getFullYear()}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="m-auto mt-3" id="film-detail-showtime" style="min-height: 200px;">
            <div class="modal-show-time border-bottom ">

                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" href="#" style="font-size: 24px" @click="loadDataByDate(0, $event)">
                            {{ getDate(nowTime) }}
                            <span style="font-size: 16px">/{{ getMonth(nowTime) }}</span></a>
                    </li>
                    <li class="nav-item" v-for="n in 5" :key="n">
                        <a class="nav-link" href="#" style="font-size: 24px" @click="loadDataByDate(n, $event)">
                            {{ getDate(new Date(nowTime.getTime() + n * 86400000)) }}
                            <span style="font-size: 16px">/{{ getMonth(new Date(nowTime.getTime() + n * 86400000))
                            }}
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="" style="min-height: 200px;">
                <div class=""><b>2D phụ đề</b></div>
                <div class="row">
                    <div class="col-2" v-for="(item, index) in schedules" :key="index">
                        <div class="text-center showtime-time m-2 p-2" @click="openDetail(item)">
                            {{ bindingTime(item.time) }}</div>
                        <div class="text-center">{{ item.numEmptySeat }} ghế trống</div>
                    </div>
                </div>
            </div>
        </div>
        <div id="film-detail-trailer">
            <div class="trailer-container">
                <div class="trailer-header">
                    <span class="header-text">Trailer</span>
                </div>
                <div class="trailer-content">
                    <iframe class="fiml-video" src="https://youtube.com/embed/93p2lOgxjdw"></iframe>
                    
                    <!-- <video id="my_video_1" class="video-js vjs-fluid vjs-default-skin" controls preload="auto"
                        data-setup='{}'>
                            <source src="https://stg-cdn.famtechvn.com/shared/videos/af437239-e293-4616-952d-dfa39538d748/af437239-e293-4616-952d-dfa39538d748-playlist.m3u8" type="application/x-mpegURL">
                        </video> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getById, getPaging } from '@/js/api/getApi';
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            data: {},
            nowTime: new Date()
        }
    },
    computed: {
        ...mapState({
            filmId: state => state.filmId,
            cinemaId: state => state.cinemaId,
            cinemaName: state => state.cinemaName
        })
    },
    async created() {
        //console.log(this.$route.params.id);
        this.changeFilmId(this.$route.params.id);
        
        await this.loadData();
        await this.loadDataByDate(0);
    },
    methods: {
        async loadData(event) {
            this.controllLoader();
            try {
                if (event) {
                    document.getElementById("film-detail-showtime").querySelector(".active").classList.remove("active");
                    event.target.classList.add("active");
                }
                let current = this;
                const res = await getById("film/get-film", current.filmId);
                //const res = await getPaging("film/get-films", param);
                if (res.data) {
                    current.data = res.data.data;
                }
                this.controllLoader();
            } catch (error) {
                console.log(error);
                this.controllLoader();
            }
        },

        async loadDataByDate(n, event) {
            this.controllLoader();
            try {
                if (event) {
                    document.getElementById("film-detail-showtime").querySelector(".active").classList.remove("active");
                    event.target.classList.add("active");
                }
                var current = this;
                let queryDate = new Date(current.nowTime.getTime() + n * 86400000);
                const res = await getPaging("film-schedule/get-film-schedules", {
                    filmId: current.data._id,
                    cinemaId: current.cinemaId,
                    date: new Date(queryDate.getFullYear(), queryDate.getMonth(),queryDate.getDate(), 7)
                });
                if (res.data) {
                    current.schedules = res.data.data[current.cinemaName];
                }
                
            } catch (error) {
                console.log(error);
            }
            this.controllLoader();
        },

        bindingTime(time) {
            let minute = (new Date(time)).getUTCMinutes()
            minute = minute < 10 ? `0${minute}` : minute;
            return `${(new Date(time)).getUTCHours()}:${minute}`
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

        // ẩn/ hiện loading
        ...mapActions(['controllLoader']),

        ...mapActions(['changeFilmId']),
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;422&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
    #film-detail-info, #film-detail-showtime {
        max-width: 900px;
    }
    .img-responsive {
        border-radius: 10px;
    }
    .film-name {
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
    }
    .fiml-description {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 15px;
    }
    .film-lable {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 14px;
        font-weight: 600;
    }
    #film-detail-trailer {
        background-color: #3c3e4d;
        width: 100%;
        height: auto;
        min-height: 400px;
        display: flex;
        justify-content: center;
    }
    .trailer-container {
        width: 700px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        margin-bottom: 100px;
    }
    .trailer-header {
        margin: 40px 0 20px 0;
        display: flex;
        justify-content: center;
    }
    .header-text {
        font-family: 'Oswald', sans-serif;
        line-height: 1.5em;
        font-size: 26px;
        padding-bottom: 7px;
        margin: 0 0 15px;
        text-transform: uppercase;
        font-weight: bold;
        color: #fff;
        border-bottom: 4px solid transparent;
        border-image: linear-gradient(to right, #39adf0 0%, #075fa3 100%);
        border-image-slice: 1;
        float: left;
    }
    .trailer-content {
        height: 335px;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .fiml-video {
        width: 600px;
    }
</style>
