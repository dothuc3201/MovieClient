<template>
    <div class="dialog" id="showtime-popup">
        <div class="dialog-container p-3" style="min-width: 950px;">

            <div class="dialog-header ">
                <h5 class="modal-title">LỊCH CHIẾU</h5>
                <button class="icon-button" @click="btnCloseOnClick">
                    <div class="icon-24 icon-exit icon-sprite"></div>
                </button>
            </div>
            <div class="dialog-body mt-3">
                <div class="text-center p-2 border-top border-bottom">
                    <h5 class="modal-title">{{cinemaName.toUpperCase()}}</h5>
                </div>
                <div class="modal-show-time border-bottom ">

                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" href="#" style="font-size: 24px" @click="loadData">
                                {{ getDate(nowTime) }}
                                <span style="font-size: 16px">/{{ getMonth(nowTime) }}</span></a>
                        </li>
                        <li class="nav-item" v-for="n in 5" :key="n">
                            <a class="nav-link" href="#" style="font-size: 24px" @click="loadDataByDate(n, event)">
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
                            <div class="text-center showtime-time m-2 p-2" @click="openDetail(item)">{{bindingTime(item.time)}}</div>
                            <div class="text-center">{{item.numEmptySeat}} ghế trống</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="dialog-footer d-flex mt-3 justify-content-end">
                <button type="button" class="btn btn-secondary mx-2">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div> -->
        </div>

    </div>
    <ShowtimeDetail v-if="isShowShowtimeDetail" @closeDialog="closeDialog"  />
</template>

<script>
import { getPaging } from '@/js/api/getApi';
import ShowtimeDetail from './ShowtimeDetail.vue';
import { mapActions, mapState } from 'vuex';

export default {
    data() {
        return {
            isShowShowtimeDetail: false,
            nowTime: new Date(),
            schedules:[],
            currentSchedules:{},

        };
    },

    async created(){
        await this.loadData();
    },
    props: ['data'],
    methods: {
        btnCloseOnClick() {
            this.$emit("closeDialog");
        },
        openDetail(item) {
            this.isShowShowtimeDetail = true;
            this.currentSchedules = item;
            this.changeData(this.data);
            this.changeShedules(this.currentSchedules);
        },
        closeDialog() {
            this.isShowShowtimeDetail = false;
        },

        async loadData(event) {
            this.controllLoader();
            try {
                if (event) {
                    document.querySelector("#showtime-popup .active").classList.remove("active");
                    event.target.classList.add("active");
                }
                var current = this;
                const res = await getPaging("film-schedule/get-film-schedules", {
                    filmId: current.data._id,
                    cinemaId: current.cinemaId,
                    date: new Date(current.nowTime.getFullYear(), current.nowTime.getMonth(),current.nowTime.getDate(), 7)
                });
                if (res.data) {
                    current.schedules = res.data.data[current.cinemaName];
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
            this.controllLoader();
            try {
                if (event) {
                    document.getElementById("showtime-popup").querySelector(".active").classList.remove("active");
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

        ...mapActions(['controllLoader']),
        ...mapActions(['changeData']),
        ...mapActions(['changeShedules']),

    },
    components: { ShowtimeDetail },

    computed:{
        ...mapState({
            areaId: state => state.areaId,
            cinemaId: state => state.cinemaId,
            cinemaName: state => state.cinemaName
            }
        )
    }
}
</script>