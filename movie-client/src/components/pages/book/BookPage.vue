<template>
    <div id="chose-place" class="d-flex justify-content-center">
        <div class="px-3">
            <div class="py-3 fiml-name">
                <h3>{{data.name}}</h3>
            </div>
            <div id="screen_form">
                <div id="seat-status" class="d-flex d-flex justify-content-around mb-3">
                    <div class=" d-flex">
                        <div><img width="35" height="35" src="@/assets/image/seat-unselect-normal.png" /></div>
                        <div class="text">Ghế trống</div>
                    </div>
                    <div class=" d-flex">
                        <div><img width="35" height="35" src="@/assets/image/seat-select-normal.png" /></div>
                        <div class="text">Ghế đang chọn</div>
                    </div>
                    <div class=" d-flex">
                        <div><img width="35" height="35" src="@/assets/image/seat-process-normal.png" /></div>
                        <div class="text">Ghế đang được giữ</div>
                    </div>
                    <div class=" d-flex">
                        <div><img width="35" height="35" src="@/assets/image/seat-buy-normal.png" /></div>
                        <div class="text">Ghế đã bán</div>
                    </div>
                </div>
                <div id="seat-diagram">
                    <div>
                        <img class="img-responsive" src="@/assets/image/ic-screen.png" style="max-width: 750px;" />
                    </div>
                    <div class="">
                        <div v-for="n in seats.length / 10" :key="n">
                            <div class="d-flex justify-content-around">
                                <div class="seat-item text-center mb-2" v-for="item in 10" :key="item"
                                    @click="chooseSeat(n, item)" :class="{
                                        'seat-unselect': !seats[(n - 1) * 10 + item - 1].isChoose,
                                        'seat-select': seats[(n - 1) * 10 + item - 1].isChoose,
                                        'seat-buy': seats[(n - 1) * 10 + item - 1].isBooked
                                    }">
                                    <!-- {{ seatRow[`row${n}`] }}{{ item }} -->
                                    {{ ((n - 1) * 10 + item) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="payment-seat-row w-100 mt-3 row" style="height: 100px; background-color: #fff;">
                <div class="col-8 p-3" style="border-right: 1px solid #ccc;">
                    <div class="d-flex justify-content-center align-items-center" style="height: 35px;">
                        <div><img width="35" height="35" src="@/assets/image/seat-unselect-normal.png" /></div>
                        <div class="mx-2">GHẾ THƯỜNG</div>
                    </div>
                    <div class="w-100 text-center" v-if="chooseSeatNumber">{{ chooseSeatNumber }} x 50000</div>
                </div>
                <div class="col-4 p-3">
                    <div class="w-100 text-center" style="height: 35px;">Tổng tiền</div>
                    <div class="w-100 text-center" v-if="chooseSeatNumber">{{ (chooseSeatNumber * 50000) }}</div>
                </div>
            </div>
        </div>
        <div id="film-info" class="row" style="height:650px; width: 350px; background-color: #fff;">
            <div class="col-6" style="margin-top: 20px;">
                <img class="img-responsive border-radius-20 m-auto" alt=""
                    :src=data.avatarUrl />
            </div>
            <div class="col-6" style="margin-top: 20px;">
                <div class="text fiml-name">{{data.name}}</div>
                <div class="text">2D phụ đề</div>
            </div>

            <div class="col-6" style="margin-top: 20px;">
                <div>
                    <i class="bi bi-tags-fill"></i>
                    <p class="text text-weight">Thể loại</p>
                </div>
            </div>
            <div class="col-6 text" style="margin-top: 20px;"><b>{{data.genre}}</b></div>

            <div class="col-6">
                <div>
                    <i class="bi bi-clock"></i>
                    <p class="text text-weight">Thời lượng</p>
                </div>
            </div>
            <div class="col-6 text"><b>{{data.durationMin}} phút</b></div>

            <div class="col-6">
                <div>
                    <i class="bi bi-house"></i>
                    <p class="text text-weight">Rạp chiếu</p>
                </div>
            </div>
            <div class="col-6 text"><b>{{cinemaName}}</b></div>

            <div class="col-6">
                <div>
                    <i class="bi bi-calendar-event"></i>
                    <p class="text text-weight">Ngày chiếu</p>
                </div>
            </div>
            <div class="col-6 text"><b>{{ getDate(currentSchedules.time) }}/{{ getMonth(currentSchedules.time) }}/{{ (new
                    Date(currentSchedules.time)).getFullYear()
            }}</b></div>

            <div class="col-6">
                <div>
                    <i class="bi bi-clock"></i>
                    <p class="text text-weight">Giờ chiếu</p>
                </div>
            </div>
            <div class="col-6 text"><b>{{bindingTime(currentSchedules.time)}}</b></div>

            <div class="col-6">
                <div>
                    <i class="bi bi-display"></i>
                    <p class="text text-weight">Phòng chiếu</p>
                </div>
            </div>
            <div class="col-6 text"><b>P{{currentSchedules.room}}</b></div>

            <div class="col-6">
                <div>
                    <i class="bi bi-boxes"></i>
                    <p class="text text-weight">Ghế ngồi</p>
                </div>
            </div>
            <div class="col-6"><b>{{ chooseSeatName.join(',') }}</b></div>
            <div class="col-12">
                <div class="text-center padding-bottom-30" style="min-height: 85px;">
                    <a style="display: block;" class="btn btn-primary text" @click="booking">
                        <span><i class="fa fa-ticket mr3"></i></span>
                        MUA VÉ</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { postAdminDataApi } from '@/js/api/fetchAPI';
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
            },
            chooseSeatNumber: 0,
            chooseSeatName: []
        }
    },

    computed: {
        ...mapState({
            data: state => state.data,
            currentSchedules: state => state.currentSchedules,
            cinemaName: state => state.cinemaName,
            filmId: state => state.filmId,
            cinemaId: state => state.cinemaId,
            token: state => state.token,
        })
    },

    created() {
        this.seats = this.currentSchedules.seats;
        this.seats.filter(item => {
            if (!item.isBooked) {
                item.isChoose = false;
            }
        })
        //this.seats[15].isBooked = true;
    },

    methods: {
        chooseSeat(row, col) {
            this.seats[(row - 1) * 10 + col - 1].isChoose = !this.seats[(row - 1) * 10 + col - 1].isChoose;
            this.chooseSeatNumber = 0;
            this.chooseSeatName = [];
            this.seats.filter(item => {
                if (item.isChoose) {
                    this.chooseSeatNumber += 1;
                    this.chooseSeatName.push(item.number)
                }
            })
        },

        bindingTime(time) {
            let minute = (new Date(time)).getMinutes()
            minute = minute < 10 ? `0${minute}` : minute;
            return `${(new Date(time)).getHours()}:${minute}`
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

        async booking() {
            try {
                let current = this;
                let bookData = {
                    filmScheduleId: current.currentSchedules._id,
                    amount: current.chooseSeatNumber*50000,
                    seats: current.chooseSeatName,
                    vnpReturnUrl: "http://localhost:8080/dat-ve-thanh-cong"
                }
                const res = await postAdminDataApi('user/booking', current.token, bookData);
                if(res.data.data){
                    window.location = res.data.data;
                }
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;422&display=swap');
.fiml-name {
    font-family: 'Oswald', sans-serif;
    color: #03599d;
    font-size: 21px;
}
.seat-item {
    height: 40px;
    width: 40px;
    cursor: pointer;
    background-size: 40px 40px;
}

.seat-unselect {
    background-image: url(@/assets/image/seat-unselect-normal.png);
}

.seat-select {
    background-image: url(@/assets/image/seat-select-normal.png);
}

.seat-buy {
    background-image: url(@/assets/image/seat-buy-normal.png) !important;
}
.text {
    font-family: 'Oswald', sans-serif;
}
#film-info {
    margin: 25px 0;
}
.img-responsive {
    border-radius: 10px;
}
.text-weight {
    font-weight: 300;
}
</style>