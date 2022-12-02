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
        <div class="col-6">
            <div class="film-info film-xs-info">
                <h3 class="d-flex align-items-center text-center text-sm-left text-xs-left bold font-sm-18 font-xs-14"
                    style="max-height: 50px; min-height: 50px;">
                    <a @click="showFilmDetail">{{ data.name }}</a>
                </h3>
                <ul class="list-unstyled font-sm-14 font-xs-14">
                    <li style="max-height: 50px;"><span class="bold">
                            Thể loại: </span>{{ data.genre }}</li>
                    <li>
                        <span class="bold">Thời lượng: </span>{{ data.durationMin }} phút
                    </li>
                </ul>
            </div>
            <div>
                <div class=""><b>2D phụ đề</b></div>
                <div class="row">
                    <div class="col-6" v-for="(item, index) in data.schedules" :key="index">
                        <div class="text-center showtime-time m-2 p-2" @click="openDetail(item)">{{ bindingTime(item.time) }}
                        </div>
                        <div class="text-center">{{ item.numEmptySeat }} ghế trống</div>
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