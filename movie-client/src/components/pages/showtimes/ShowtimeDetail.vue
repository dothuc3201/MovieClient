<template>
    <div class="dialog" id="showtime-detail">
        <div class="dialog-container p-3" style="min-width: 700px;">

            <div class="dialog-header">
                <h5 class="modal-title">BẠN ĐANG ĐẶT VÉ XEM PHIM</h5>
                <button class="icon-button" @click="btnCloseOnClick">
                    <div class="icon-24 icon-exit icon-sprite"></div>
                </button>
            </div>
            <div class="dialog-body p-3">
                <div class="text-center p-3 border-bottom fiml-name"><h3>{{data.name}}</h3></div>
                
                <div class="row p-2" style="margin-top: 10px;">
                    <div class="col text-center info-text">Rạp chiếu</div>
                    <div class="col text-center info-text">Ngày chiếu</div>
                    <div class="col text-center info-text">Giờ chiếu</div>
                </div>
                <div class="row p-3" style="background-color: #eaeaea;">
                    <div class="col text-center info-item"><h5><b>{{cinemaName}}</b></h5></div>
                    <div class="col text-center info-item"><h5><b>{{getDate(currentSchedules.time)}}/{{getMonth(currentSchedules.time)}}/{{(new Date(currentSchedules.time)).getFullYear()}}</b></h5></div>
                    <div class="col text-center info-item"><h5><b>{{bindingTime(currentSchedules.time)}}</b></h5></div>
                </div>
            </div>
            <div class="dialog-footer d-flex m-3 justify-content-center">
                <button type="button" class="btn btn-primary">
                    <router-link to="/dat-ve" >Đồng ý</router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
//import state from '@/store/state';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            
        }
    },
    //props:["data","currentSchedules"],
    methods:{
        btnCloseOnClick(){
            this.$emit("closeDialog");
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

        bindingTime(time) {
            let minute = (new Date(time)).getUTCMinutes()
            minute = minute < 10 ? `0${minute}` : minute;
            return `${(new Date(time)).getUTCHours()}:${minute}`
        },

    },
    computed:{
        ...mapState({
            cinemaName: state => state.cinemaName,
            data: state => state.data,
            currentSchedules: state => state.currentSchedules
        })
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;422&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
    .modal-title {
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        font-size: 18px;
    }
    .fiml-name {
        font-family: 'Oswald', sans-serif;
        color: #03599d;
    }
    .info-text {
        font-family: 'Oswald', sans-serif;
        font-size: 15px;
    }
    .info-item, .btn-primary {
        font-family: 'Oswald', sans-serif;
    }
</style>
