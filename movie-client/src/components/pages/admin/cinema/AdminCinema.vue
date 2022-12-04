<template>
    <div></div>
    <el-table :data="tableData" class="">
        <el-table-column label="Rạp" width="180">
            <template #default="scope">
                <div style="display: flex; align-items: center">                    
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Địa chỉ" width="180">
            <template #default="scope">
                <div style="display: flex; align-items: center">                    
                    <span style="margin-left: 10px">{{ scope.row.address }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Tỉnh/thành phố" width="180">
            <template #default="scope">
                <div style="display: flex; align-items: center">                    
                    <span style="margin-left: 10px">{{ scope.row.areaName }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Số phòng" width="180">
            <template #default="scope">
                <div style="display: flex; align-items: center">                    
                    <span style="margin-left: 10px">{{ scope.row.room.length }}</span>
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
    <AdminCinemaPopup v-if="isShowPopup" :data="data" @closePopup="closePopup" @closePopupAndLoad="closePopupAndLoad" />

</template>

<script>
import { Timer } from '@element-plus/icons-vue';
import { getPaging } from '@/js/api/getApi';
import { mapActions } from 'vuex';
import AdminCinemaPopup from './AdminCinemaPopup.vue';

export default {
    data() {
        return {
            tableData: [],
            isShowPopup: false,
            data:{},
        }
    },
    async created() {
        await this.loadArea();        
    },
    methods: {

        handleEdit(index, row) {
            console.log(index, row);
            this.data = row;
            this.isShowPopup = true;
        },
        handleDelete(index, row){
            console.log(index, row)
        },

        async loadArea(){
            this.controllLoader();
            try {
                let current = this;
                const res = await getPaging('area/get-areas');
                if(res.data){
                    //this.dataProvince = res.data.data;
                    res.data.data = res.data.data.filter(item => {
                        if(item.cinemas.length > 0){
                            item.cinemas.filter(cinema => {
                                cinema.areaName = item.name
                            })
                            current.tableData = [...current.tableData, ...item.cinemas]
                        }
                        //return item.cinemas.length > 0;
                    });
                    
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

    components:{ Timer, AdminCinemaPopup },


}
</script>