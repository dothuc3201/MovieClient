<template>
    <div class="dialog">
        <div class="dialog-container py-2 px-3" style="min-width: 700px;">

            <div class="dialog-header ">
                <h5 class="modal-title">Rạp</h5>
                <button class="icon-button" @click="btnCloseOnClick">
                    <div class="icon-24 icon-exit icon-sprite"></div>
                </button>
            </div>
            <div id="form-cinema">
                <el-form ref="formRef" :model="dataCinema" label-width="120px" label-position="right"
                    class="demo-ruleForm">
                    <el-form-item label="Tên rạp" prop="name">
                        <el-input v-model="dataCinema.name" @blur="checkRequired" required />
                    </el-form-item>
                    <el-form-item label="Tỉnh/thành phố" prop="areaId">
                        <el-select v-model="dataCinema.areaId" class="w-100" placeholder="Chọn khu vực">
                            <el-option v-for="item in dataArea" :key="item.value" :label="item.name"
                                :value="item._id" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Địa chỉ" prop="address">
                        <el-input v-model="dataCinema.address" @blur="checkRequired" required />
                    </el-form-item>
                    <el-form-item label="Mô tả" prop="description">
                        <el-input v-model="dataCinema.description" type="textarea" @blur="checkRequired" required />
                    </el-form-item>
                    <el-form-item label="Số room" prop="room">
                        <el-input v-model="dataCinema.room" type="number" @blur="checkRequired" required />
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
import { mapActions, mapState } from 'vuex';
import { getPaging } from '@/js/api/getApi';

export default {
    data() {
        return {
            dataArea: [],
            dataCinema: {}
        }
    },
    async created() {
        //this.dataArea = this.dataProvince;
        // console.log(FormInstance);
        await this.loadArea();
        if (this.data) {
            this.dataCinema = this.data;
            this.dataCinema.room = this.data.room.length
        }
    },
    props: ['data'],
    methods: {
        async submitForm() {
            console.log(this.dataCinema);
            let isValid = true;
            let requiredInputs = document.getElementById("form-cinema").querySelectorAll("[required]");
            requiredInputs.forEach(item => {
                if (!item.value) {

                    isValid = false;
                    item.classList.add("input-error")
                    //console.log(item, isValid);
                }
            });


            if (isValid) {
                this.controllLoader();
                try {
                    let current = this;
                    let res = await postAdminDataApi('admin/area', current.token, this.preData(current.dataCinema));

                    if (res.data.data) {
                        this.$emit('closePopupAndLoad');
                    }
                } catch (error) {
                    console.log(error);
                    alert('Lỗi server.')
                }
                this.controllLoader();
            }
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

        ...mapActions(['controllLoader'])
    },

    computed: {
        ...mapState({
            token: state => state.token
        })
    }
}
</script>
  