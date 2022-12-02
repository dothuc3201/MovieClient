<template>
    <div id="chose-place" class="d-flex justify-content-center">
        <div class="px-3">
            <div class="py-3">
                <h3>Chiến binh báo đen</h3>
            </div>
            <div id="screen_form">
                <div id="seat-status" class="d-flex d-flex justify-content-around mb-3">
                    <div class=" d-flex">
                        <div><img width="35" height="35" src="@/assets/image/seat-unselect-normal.png" /></div>
                        <div>Ghế trống</div>
                    </div>
                    <div class=" d-flex">
                        <div><img width="35" height="35" src="@/assets/image/seat-select-normal.png" /></div>
                        <div>Ghế đang chọn</div>
                    </div>
                    <div class=" d-flex">
                        <div><img width="35" height="35" src="@/assets/image/seat-process-normal.png" /></div>
                        <div>Ghế đang được giữ</div>
                    </div>
                    <div class=" d-flex">
                        <div><img width="35" height="35" src="@/assets/image/seat-buy-normal.png" /></div>
                        <div>Ghế đã bán</div>
                    </div>
                </div>
                <div id="seat-diagram">
                    <div>
                        <img class="img-responsive" src="@/assets/image/ic-screen.png" style="max-width: 750px;" />
                    </div>
                    <div class="">
                        <div v-for="n in seats.length/10" :key="n">
                            <div class="d-flex justify-content-around">
                                <div class="seat-item text-center mb-2" v-for="item in 10"                                 
                                :key="item" @click="chooseSeat(n, item)"
                                :class="{
                                    'seat-unselect':!seats[(n-1)*10 + item - 1].isChoose,
                                    'seat-select':seats[(n-1)*10 + item - 1].isChoose,
                                    'seat-buy':seats[(n-1)*10 + item - 1].isBooked
                                }"
                                >
                                    {{ seatRow[`row${n}`] }}{{ item }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="payment-seat-row"></div>
        </div>
        <div id="film-info" class="row" style="height:650px; width: 350px; background-color: #fff;">
            <div class="col-6">
                <img class="img-responsive border-radius-20 m-auto" alt=""
                    src="https://famtech-dev.s3.amazonaws.com/shared/images/72da6765144ff27529070156ed756a58.jpg" />
            </div>
            <div class="col-6">
                <div>{{data.name}}</div>
                <div>2D phụ đề</div>
            </div>

            <div class="col-6">
                <div>
                    <i class="bi bi-tags-fill"></i>
                    <p>Thể loại</p>
                </div>
            </div>
            <div class="col-6"><b>{{data.genre}}</b></div>

            <div class="col-6">
                <div>
                    <i class="bi bi-clock"></i>
                    <p>Thời lượng</p>
                </div>
            </div>
            <div class="col-6"><b>{{data.durationMin}} phút</b></div>

            <div class="col-6">
                <div>
                    <i class="bi bi-house"></i>
                    <p>Rạp chiếu</p>
                </div>
            </div>
            <div class="col-6"><b>{{cinemaName}}</b></div>

            <div class="col-6">
                <div>
                    <i class="bi bi-calendar-event"></i>
                    <p>Ngày chiếu</p>
                </div>
            </div>
            <div class="col-6"><b>{{getDate(currentSchedules.time)}}/{{getMonth(currentSchedules.time)}}/{{(new Date(currentSchedules.time)).getFullYear()}}</b></div>

            <div class="col-6">
                <div>
                    <i class="bi bi-clock"></i>
                    <p>Giờ chiếu</p>
                </div>
            </div>
            <div class="col-6"><b>{{bindingTime(currentSchedules.time)}}</b></div>

            <div class="col-6">
                <div>
                    <i class="bi bi-display"></i>
                    <p>Phòng chiếu</p>
                </div>
            </div>
            <div class="col-6"><b>P{{currentSchedules.room}}</b></div>

            <div class="col-6">
                <div>
                    <i class="bi bi-boxes"></i>
                    <p>Ghế ngồi</p>
                </div>
            </div>
            <div class="col-6"><b>{{}}</b></div>
            <div class="col-12">
                <div class="text-center padding-bottom-30" style="min-height: 85px;">
                    <a style="display: block;" class="btn btn-primary" @click="openShowtimesPopup">
                        <span><i class="fa fa-ticket mr3"></i></span>
                        MUA VÉ</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            seats: [],
            seatRow: {
                row1: 'A',
                row2: 'B',
                row3: 'C',
                row4: 'D',
                row5: 'E',
                row6: 'F',
                row7: 'G',
                row8: 'H',
                row9: 'J',
                row10: 'K',
            }
        }
    },

    computed:{
        ...mapState({
            data: state => state.data,
            currentSchedules: state => state.currentSchedules,
            cinemaName: state => state.cinemaName
        })
    },

    created(){
        this.seats = this.currentSchedules.seats;
        this.seats.filter(item => {
            if(!item.isBooked){
                item.isChoose = false;
            }
        })
        //this.seats[15].isBooked = true;
    },

    methods:{
        chooseSeat(row, col){
            this.seats[(row-1)*10 + col - 1].isChoose = !this.seats[(row-1)*10 + col - 1].isChoose;
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
    }
}
</script>

<style>
.seat-item {
    height: 40px;
    width: 40px;    
    cursor: pointer;
    background-size: 40px 40px;
}

.seat-unselect{
    background-image: url(@/assets/image/seat-unselect-normal.png);
}

.seat-select{
    background-image: url(@/assets/image/seat-select-normal.png);
}

.seat-buy{
    background-image: url(@/assets/image/seat-buy-normal.png) !important;
}
</style>