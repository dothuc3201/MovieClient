<template>
    <div class="row">
        <div class="col-6">
            <div class="pi-img-wrapper">
                <img class="img-responsive border-radius-20 m-auto" alt="" :src="data.avatarUrl">
                <!-- <span style="position: absolute; top: 10px; left: 10px;">
                            <img src="/Assets/Common/icons/films/c-18.png" class="img-responsive">
                        </span> -->
                <div class="border-radius-20">
                    <a class="fancybox-fast-view" @click="openTrailerPopup"><i class="fa fa-play-circle"></i></a>
                </div>
            </div>
        </div>
        <div class="col-6 ">
            <div class="film-info film-xs-info">
                <h3 class="d-flex align-items-center film-name"
                    style="max-height: 50px; min-height: 50px;">
                    <a @click="showFilmDetail">{{ data.name }}</a>
                </h3>
                <ul class="list-unstyled font-sm-14 font-xs-14">
                    <li class="fiml-text" style="max-height: 50px;"><span class="bold" style="font-weight: 700;">
                            Thể loại: </span>{{ data.genre }}</li>
                    <li class="fiml-text">
                        <span class="bold" style="font-weight: 700;">Thời lượng: </span>{{ data.durationMin }} phút
                    </li>
                </ul>
            </div>
            <div>
                <div class="phu-de"><b>2D PHỤ ĐỀ</b></div>
                <div class="row">
                    <div class="col-6 showtime-item" v-for="(item, index) in data.schedules" :key="index">
                        <div class="text-center showtime-time m-2 showtime-text" @click="openDetail(item)">{{ bindingTime(item.time) }}
                        </div>
                        <div class="text-center so-ghe">{{ item.numEmptySeat }} ghế trống</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <ShowtimeDetail v-if="isShowShowtimeDetail" @closeDialog="closeDialog"  /> -->
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            nowTime: new Date(),
            //isShowShowtimeDetail: false,
            currentSchedules:{}
        }
    },
    props: ['data'],

    methods: {
        // bindingSeat(seats){
        //     return seats.numEmptySeat
        // },

        openDetail(item) {
            this.currentSchedules = item;
            this.changeData(this.data);
            this.changeShedules(this.currentSchedules);
            this.$emit("openDetail");
        },


        bindingTime(time) {
            let minute = (new Date(time)).getUTCMinutes()
            minute = minute < 10 ? `0${minute}` : minute;
            return `${(new Date(time)).getUTCHours()}:${minute}`
        },

        ...mapActions(['changeData']),
        ...mapActions(['changeShedules']),

    },

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;422&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
    .img-responsive {
        border-radius: 10px;
    }
    .film-name {
        font-family: 'Oswald', sans-serif;
        line-height: 1.5em;
        font-weight: 700;
        color: #03599d;
        font-size: 20px;
    }
    .fiml-text {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 14px;
    }
    .phu-de {
        font-family: 'Oswald', sans-serif;
        font-size: 16px;
    }
    .showtime-time {
        padding: 3px 0;
    }
    .showtime-text {
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 600;
        font-size: 13px;
    }
    .so-ghe {
        font-family: 'Oswald', sans-serif;
        font-size: 10px;
    }
    .showtime-item {
        width: 33%;
        padding: 0;
    }
</style>
