<template>
    <div class="d-flex align-items-center w-100 p-2 justify-content-between">
        <div>
            <h3>Danh sách phim</h3>
        </div>
        <div><el-button type="primary" @click="addFilm">Thêm phim</el-button></div>
    </div>
    <el-table :data="tableData" class="">
        <el-table-column label="Tên phim" width="180">
            <template #default="scope">
                <div style="display: flex; align-items: center">                    
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Hình ảnh" width="120">
            <template #default="scope">
                <div style="display: flex; align-items: center">                    
                    <span style="margin-left: 10px"></span>
                    <el-image style="width: 100px; height: 150px" :src="scope.row.avatarUrl" :fit="fit" />
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Độ tuổi" >
            <template #default="scope">
                <div style="display: flex; align-items: center">                    
                    <span style="margin-left: 10px">{{ scope.row.ageRestriction }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Thời lượng" >
            <template #default="scope">
                <div style="display: flex; align-items: center">                    
                    <span style="margin-left: 10px">{{ scope.row.durationMin }} phút</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Đạo diễn" >
            <template #default="scope">
                <div style="display: flex; align-items: center">                    
                    <span style="margin-left: 10px">{{ scope.row.director }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Diễn viên">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <span style="margin-left: 10px">{{ scope.row.actors }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Thể loại">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <span style="margin-left: 10px">{{ scope.row.genre }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Ngày khởi chiếu" width="180">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <el-icon>
                        <timer />
                    </el-icon>
                    <span style="margin-left: 10px">{{ bindingTime(scope.row.openingDay) }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Chức năng" fixed="right" width="180">
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
        </el-table-column>
    </el-table>
    <FormFilm v-if="isShowPopup" :isPost="isPost" :data="data" @closePopup="closePopup" @closePopupAndLoad="closePopupAndLoad" />

</template>

<script>
import { Timer } from '@element-plus/icons-vue';
import { getPaging } from '@/js/api/getApi';
import { mapActions, mapState } from 'vuex';
import FormFilm from './FormFilm.vue';
import { deleteAdminDataApi } from '@/js/api/fetchAPI';

export default {
    data() {
        return {
            tableData: [],
            isShowPopup: false,
            data:{},
            isPost: true
        }
    },
    async created() {
        await this.loadFilm();        
    },
    methods: {
        addFilm(){
            this.data = {};
            this.isShowPopup = true;
            this.isPost = true;
        },
        handleEdit(index, row) {
            console.log(index, row);
            this.data = row;
            this.isShowPopup = true;
            this.isPost = false;
        },
        async handleDelete(index, row){
            console.log(index, row);
            this.data = row;
            try {
                let current = this;
                let res = await deleteAdminDataApi('admin/film', current.data._id, this.token);
                if(res.data){
                    await this.loadFilm();  
                }
            } catch (error) {
                console.log(error);
            }
        },

        async loadFilm(){
            this.controllLoader();
            try {
                let current = this;
                const res = await getPaging('film/get-films');
                if(res.data){
                    current.tableData = res.data.data
                    
                }
            } catch (error) {
                console.log(error);
            }
            this.controllLoader();
        },

        bindingTime(time){
            return `${this.getDate(time)}-${this.getMonth(time)}-${(new Date(time)).getFullYear()}`
        },

        getDate(time) {
            let day = (new Date(time)).getDate();
            day = day < 10 ? `0${day}` : day;
            return day;
        },

        closePopup(){
            this.isShowPopup = false
        },

        async closePopupAndLoad(){
            this.isShowPopup = false;
            await this.loadArea();
        },

        getMonth(time) {
            // let day = (new Date(time)).getDate();
            // day = day < 10 ? `0${day}` : day;
            let month = (new Date(time)).getMonth() + 1;
            month = month < 10 ? `0${month}` : month;
            return month;
        },

        ...mapActions(["controllLoader"])
    },

    components:{ Timer, FormFilm },
    computed:{
        ...mapState({
            token: state => state.token
        })
    }

}
</script>