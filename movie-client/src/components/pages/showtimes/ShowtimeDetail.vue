<template>
    <div class="dialog" id="showtime-detail">
        <div class="dialog-container p-3" style="min-width: 700px;">

            <div class="dialog-header">
                <h5 class="modal-title">BẠN ĐANG ĐẶT VÉ XEM PIM</h5>
                <button class="icon-button" @click="btnCloseOnClick">
                    <div class="icon-24 icon-exit icon-sprite"></div>
                </button>
            </div>
            <div class="dialog-body p-3">
                <div class="text-center p-3 border-bottom"><h3>{{data.name}}</h3></div>
                
                <div class="row p-2">
                    <div class="col text-center">Rạp chiếu</div>
                    <div class="col text-center">Ngày chiếu</div>
                    <div class="col text-center">Giờ chiếu</div>
                </div>
                <div class="row p-3" style="background-color: #eaeaea;">
                    <div class="col text-center"><h4><b>{{cinemaName}}</b></h4></div>
                    <div class="col text-center"><h4><b>{{getDate(currentSchedules.time)}}/{{getMonth(currentSchedules.time)}}/{{(new Date(currentSchedules.time)).getFullYear()}}</b></h4></div>
                    <div class="col text-center"><h4><b>{{bindingTime(currentSchedules.time)}}</b></h4></div>
                </div>
            </div>
            <div class="dialog-footer d-flex m-3 justify-content-center">
                <button type="button" class="btn btn-primary">
                    <router-link :to="token ? '/dat-ve' : '/login' " >Đồng ý</router-link>
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
            let minute = (new Date(time)).getMinutes()
            minute = minute < 10 ? `0${minute}` : minute;
            return `${(new Date(time)).getHours()}:${minute}`
        },

    },
    computed:{
        ...mapState({
            cinemaName: state => state.cinemaName,
            data: state => state.data,
            currentSchedules: state => state.currentSchedules,
            token: state => state.token
        })
    }
}
</script>