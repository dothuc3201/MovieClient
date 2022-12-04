<template>
    <div class="dialog" id="devChooseCinema">
        <div class="dialog-container p-3" style="min-width: 700px;">

            <div class="dialog-header ">
                <h5 class="modal-title">Chọn rạp chiếu phim</h5>
                <!-- <button class="icon-button" @click="btnCloseOnClick">
                    <div class="icon-24 icon-exit icon-sprite"></div>
                </button> -->
            </div>
            <div class="dialog-body mt-3 row">
                <div class="col">
                    <div>Tỉnh/ Thành phố</div>
                    <ejs-combobox id="choose-area" class='combobox' :dataSource='dataProvince' :fields='fieldsProvince' :change="onChageProvince" placeholder="Chọn tỉnh/ thành phố"></ejs-combobox>
                </div>
                <div class="col">
                    <div>Tên rạp</div>
                    <ejs-combobox id="choose-cinema" class='combobox' :dataSource='dataCinema' :fields='fieldsCinema' :change="onChageCinema" placeholder="Chọn rạp"></ejs-combobox>
                </div>
            </div>
            <div class="dialog-footer d-flex mt-2 justify-content-center">
                <button type="button" class="btn btn-primary" @click="chooseCinema">
                    Đồng ý
                </button>
            </div>
        </div>

    </div>
</template>

<script>
import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
import { getPaging } from '@/js/api/getApi';
import { Query } from '@syncfusion/ej2-data';
import { mapActions } from 'vuex';
export default {
    components: {
        "ejs-combobox": ComboBoxComponent
    },
    data() {
        return {
            dataProvince:[
                {
                    _id:'',
                    name:'',
                    cinemas:[]
                }
            ],
            dataCinema:[
                {
                    _id:'',
                    name:'',
                    room:[],
                    areaId:''
                }
            ],
            fieldsProvince : { text: 'name', value: '_id' },
            fieldsCinema:   {text: 'name', value: '_id'}
        }
    },
    methods:{
        // load thành phố
        async loadProvince(){
            try {
                let current = this;
                const res = await getPaging('area/get-areas');
                if(res.data){
                    res.data.data = res.data.data.filter(item => {
                        if(item.cinemas.length > 0){
                            current.dataCinema = [...current.dataCinema, ...item.cinemas]
                        }
                        return item.cinemas.length > 0;
                    });
                    current.dataProvince = res.data.data;
                }
            } catch (error) {
                console.log(error);
            }
        },

        onChageProvince(){
            var areaObj = document.getElementById('choose-area').ej2_instances[0];
            var cinemaObj = document.getElementById('choose-cinema').ej2_instances[0];            
            cinemaObj.query = new Query().where('areaId', 'equal', areaObj.value);            
        },

        //ấn chọn rạp
        chooseCinema(){
            var areaObj = document.getElementById('choose-area').ej2_instances[0];
            var cinemaObj = document.getElementById('choose-cinema').ej2_instances[0];  
            localStorage.setItem('cinemaId', cinemaObj.value);
            
            this.changeCinemaId(cinemaObj.value);
            this.changeAreaId(areaObj.value);
            this.dataCinema.filter(item => {
                if(item._id == cinemaObj.value) {
                    localStorage.setItem('cinemaName', item.name)
                    this.changeCinemaName(item.name)
                }
            })
        },

        btnCloseOnClick(){
            this.$emit("closeDialog");
        },

        ...mapActions(['changeCinemaId']),
        ...mapActions(['changeAreaId']),
        ...mapActions(['changeCinemaName']),
    },


    async created() {
        await this.loadProvince();        
    },

    computed:{

    }
}
</script>

<style>
#js-licensing{
    display: none;
}
</style>

