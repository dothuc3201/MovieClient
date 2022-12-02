<template>
    <div>
        <div class="m-auto mt-3" id="film-detail-info" style="max-width: 1150px;">
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
                        <h3 class="d-flex align-items-center text-center text-sm-left text-xs-left bold font-sm-18 font-xs-14"
                            style="max-height: 50px; min-height: 50px;">
                            {{ data.name }}
                        </h3>
                        <div>{{ data.description }}</div>
                        <div class="row mt-3">
                            <div class="col-3">ĐẠO DIỄN</div>
                            <div class="col-9">{{ data.director }}</div>
                        </div>
                        <div class="row">
                            <div class="col-3">DIỄN VIÊN</div>
                            <div class="col-9">{{ data.actors }}</div>
                        </div>
                        <div class="row">
                            <div class="col-3">THỂ LOẠI</div>
                            <div class="col-9">{{ data.genre }}</div>
                        </div>
                        <div class="row">
                            <div class="col-3">THỜI LƯỢNG</div>
                            <div class="col-9">{{ data.durationMin }} phút</div>
                        </div>
                        <div class="row">
                            <div class="col-3">ĐỘ TUỔI</div>
                            <div class="col-9">{{ data.ageRestriction }} tuổi</div>
                        </div>
                        <div class="row">
                            <div class="col-3">NGÀY KHỞI CHIẾU</div>
                            <div class="col-9">{{ data.openingDay }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="m-auto mt-3" id="film-detail-showtime" style="min-height: 200px; max-width: 1150px;">
            <div class="modal-show-time border-bottom ">

                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" href="#" style="font-size: 24px" @click="loadData">
                            {{ getDate(nowTime) }}
                            <span style="font-size: 16px">/{{ getMonth(nowTime) }}</span></a>
                    </li>
                    <li class="nav-item" v-for="n in 5" :key="n">
                        <a class="nav-link" href="#" style="font-size: 24px" @click="loadDataByDate(n)">
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
        <div id="film-detail-trailer"></div>
    </div>
</template>

<script>
import { getById } from '@/js/api/getApi';
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            data: {}
        }
    },
    computed: {
        ...mapState({
            filmId: state => state.filmId
        })
    },
    async created() {
        console.log(this.$route.params.id);
        this.changeFilmId(this.$route.params.id);
        
        await this.loadData();
    },
    methods: {
        async loadData() {
            this.controllLoader();
            try {
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