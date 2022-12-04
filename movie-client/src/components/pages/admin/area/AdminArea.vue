<template>
    <div class="d-flex align-items-center w-100 p-2 justify-content-between">
        <div>
            <h3>Danh sách khu vực</h3>
        </div>
        <div><el-button type="primary" @click="addArea">Thêm khu vực</el-button></div>
    </div>
    <el-table :data="tableData" class="">
        <el-table-column label="Tỉnh/thành phố" width="180">
            <template #default="scope">
                <div style="display: flex; align-items: center">                    
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Ngày tạo" width="180">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <el-icon>
                        <timer />
                    </el-icon>
                    <span style="margin-left: 10px">{{ bindingTime(scope.row.createdAt) }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Ngày sửa" width="180">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <el-icon>
                        <timer />
                    </el-icon>
                    <span style="margin-left: 10px">{{ bindingTime(scope.row.updatedAt) }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Chức năng">
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
        </el-table-column>
    </el-table>
    <AdminAreaPopup v-if="isShowPopup" :isPost="isPost" :data="data" @closePopup="closePopup" @closePopupAndLoad="closePopupAndLoad" />
</template>

<script>
import { Timer } from '@element-plus/icons-vue';
import { getPaging } from '@/js/api/getApi';
import { mapActions, mapState } from 'vuex';
import AdminAreaPopup from './AdminAreaPopup.vue';
import { deleteAdminDataApi } from '@/js/api/fetchAPI';

export default {
    data() {
        return {
            tableData: [],
            data:{},
            isShowPopup: false,
            isPost: true
        }
    },
    async created() {
        await this.loadArea();        
    },
    methods: {
        addArea(){
            this.data = {};
            this.isShowPopup = true;
            this.isPost = true
        },
        handleEdit(index, row) {
            this.data = row;
            this.isShowPopup = true;
            this.isPost = false
        },
        async handleDelete(index, row){
            console.log(index, row);
            this.data = row;
            try {
                let current = this;
                let res = await deleteAdminDataApi('admin/area', current.data._id, this.token);
                if(res.data){
                    await this.loadArea();  
                }
            } catch (error) {
                console.log(error);
            }
        },

        async loadArea(){
            this.controllLoader();
            try {
                let current = this;
                const res = await getPaging('area/get-areas');
                if(res.data){
                    
                    current.tableData = res.data.data;
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

        getMonth(time) {
            // let day = (new Date(time)).getDate();
            // day = day < 10 ? `0${day}` : day;
            let month = (new Date(time)).getMonth() + 1;
            month = month < 10 ? `0${month}` : month;
            return month;
        },

        closePopup(){
            this.isShowPopup = false
        },

        async closePopupAndLoad(){
            this.isShowPopup = false;
            await this.loadArea();
        },

        ...mapActions(["controllLoader"])
    },

    components:{ Timer, AdminAreaPopup },
    computed:{
        ...mapState({
            token: state => state.token
        })
    }

}
</script>