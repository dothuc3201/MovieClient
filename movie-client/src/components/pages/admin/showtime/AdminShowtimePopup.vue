<template>
    <div class="dialog">
        <div class="dialog-container py-2 px-3" style="min-width: 700px;">

            <div class="dialog-header ">
                <h5 class="modal-title">Thêm lịch chiếu</h5>
                <button class="icon-button" @click="btnCloseOnClick">
                    <div class="icon-24 icon-exit icon-sprite"></div>
                </button>
            </div>
            <div id="form-add-showtime">
                <el-form ref="formRef" :model="dataShowtime" label-width="120px" label-position="right"
                    class="demo-ruleForm">
                    <el-form-item label="Giờ chiếu" >
                        <el-col :span="11">
                            <el-form-item prop="date1">
                                <el-date-picker v-model="dataShowtime.date" type="date" label="Chọn ngày"
                                    placeholder="Chọn ngày" style="width: 100%" />
                            </el-form-item>
                        </el-col>
                        <el-col class="text-center" :span="2">
                            <span class="text-gray-500">-</span>
                        </el-col>
                        <el-col :span="11">
                            <el-form-item prop="date2">
                                <el-time-select v-model="dataShowtime.time" start="08:00" step="00:15" end="23:30"
                                    placeholder="Select time" />
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Phòng chiếu">
                        <el-input v-model="dataShowtime.room" class="w-25" type="number" @blur="checkRequired"
                            required />
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm()">Submit</el-button>
                        <!-- <el-button @click="resetForm(formRef)">Reset</el-button> -->
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>

</template>

<script>
import { postAdminDataApi } from '@/js/api/fetchAPI';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            dataShowtime: {

            }
        }
    },

    methods: {
        btnCloseOnClick() {
            this.$emit('closePopup');
        },
        async submitForm() {
            try {
                let date = new Date(this.dataShowtime.date);
                date.setHours(this.dataShowtime.time.slice(0,2));
                date.setMinutes(this.dataShowtime.time.slice(3,5));
                console.log(date, this.dataShowtime.time);
                let postData = {
                    cinemaId: this.cinemaId,
                    filmId: this.filmId,
                    room: this.dataShowtime.room,
                    time: date
                }
                const res = await postAdminDataApi('admin/film-schedule', this.token, postData)
                if(res.data.data){
                    this.$emit('closePopupAndLoad');
                }else{
                    alert('Phòng chiếu đã có suất chiếu!')
                }
            } catch (error) {
                alert('Phòng chiếu đã có suất chiếu!')
                console.log(error);
            }
        }
    },

    computed: {
        ...mapState({
            filmId: state => state.filmId,
            cinemaId: state => state.cinemaId,
            token: state => state.token
        })
    }
}
</script>