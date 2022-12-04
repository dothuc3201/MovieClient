<template>
    <div class="dialog">
        <div class="dialog-container py-2 px-3" style="min-width: 700px;">

            <div class="dialog-header ">
                <h5 class="modal-title">Chọn nơi chiếu</h5>
                <button class="icon-button" @click="btnCloseOnClick">
                    <div class="icon-24 icon-exit icon-sprite"></div>
                </button>
            </div>
            <div id="form-choose-film">
                <el-form ref="formRef" :model="dataFilmArea" label-width="120px" label-position="right"
                    class="demo-ruleForm">
                    <el-form-item label="Tỉnh/thành phố" prop="areaId">
                        <el-select v-model="dataFilmArea.areaId" class="m-2 w-100" placeholder="Select"
                        @change="loadCinema" >
                            <el-option v-for="item in dataArea" :key="item.value" :label="item.name"
                                :value="item._id" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Rạp chiếu" prop="cinemaId">
                        <el-select v-model="dataFilmArea.cinemaId" class="m-2 w-100" placeholder="Select">
                            <el-option v-for="item in dataCinema" :key="item.value" :label="item.name"
                                :value="item._id" />
                        </el-select>
                    </el-form-item>

                    <el-form-item label="Phim" prop="areaId">
                        <el-select v-model="dataFilmArea.filmId" class="m-2 w-100" placeholder="Select">
                            <el-option v-for="item in dataFilm" :key="item.value" :label="item.name"
                                :value="item._id" />
                        </el-select>
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
//import { postAdminDataApi } from '@/js/api/fetchAPI';
import { mapActions, mapState } from 'vuex';
import { getPaging } from '@/js/api/getApi';

export default {
    data() {
        return {
            dataArea: [],
            dataCinema:[],
            dataFilm:[],
            dataFilmArea: {}
        }
    },
    async created() {
        //this.dataArea = this.dataProvince;
        // console.log(FormInstance);
        await this.loadArea();
        await this.loadFilm();
    },
    methods: {
        submitForm() {
            this.changeAreaId(this.dataFilmArea.areaId);
            this.changeCinemaId(this.dataFilmArea.cinemaId);
            this.dataCinema.filter(item => {
                if(item._id == this.dataFilmArea.cinemaId) {
                    localStorage.setItem('cinemaName', item.name)
                    this.changeCinemaName(item.name)
                }
            })
            this.changeFilmId(this.dataFilmArea.filmId);
            this.$emit('closePopupAndLoad');
        },

        async loadArea() {
            this.controllLoader();
            try {
                let current = this;
                const res = await getPaging('area/get-areas');
                if (res.data) {
                    current.dataArea = res.data.data;

                }
            } catch (error) {
                console.log(error);
            }
            this.controllLoader();
        },

        async loadCinema(){
            this.controllLoader();
            try {
                let current = this;
                const res = await getPaging('cinema/get-cinemas', {areaId: current.dataFilmArea.areaId});
                if (res.data) {
                    current.dataCinema = res.data.data;

                }
            } catch (error) {
                console.log(error);
            }
            this.controllLoader();
        },

        async loadFilm(){
            this.controllLoader();
            try {
                let current = this;
                const res = await getPaging('film/get-films');
                if (res.data) {
                    current.dataFilm = res.data.data;

                }
            } catch (error) {
                console.log(error);
            }
            this.controllLoader();
        },

        checkRequired() {
            console.log(this.dataArea);
        },

        btnCloseOnClick() {
            this.$emit('closePopup');
        },

        preData(data) {
            let room = [];
            for (let i = 0; i < data.room; i++) {
                room.push(i + 1);
            }
            return {
                name: data.name,
                areaId: data.areaId,
                address: data.address,
                description: data.description,
                room
            }
        },

        ...mapActions(['controllLoader']),
        ...mapActions(['changeAreaId']),
        ...mapActions(['changeCinemaId']),
        ...mapActions(['changeFilmId']),
        ...mapActions(['changeCinemaName'])

    },

    computed: {
        ...mapState({
            token: state => state.token
        })
    }
}
</script>
  