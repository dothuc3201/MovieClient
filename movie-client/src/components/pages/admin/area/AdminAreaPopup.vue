<template>
    <div class="dialog">
        <div class="dialog-container py-2 px-3" style="min-width: 700px;">

            <div class="dialog-header ">
                <h5 class="modal-title">Tỉnh/Thành phố</h5>
                <button class="icon-button" @click="btnCloseOnClick">
                    <div class="icon-24 icon-exit icon-sprite"></div>
                </button>
            </div>
            <div>
                <el-form ref="formRef" id="formArea" :model="dataArea" label-position="top" class="demo-ruleForm">
                    <el-form-item label="Tên tỉnh/thành phố" prop="area" >
                        <el-input v-model="dataArea.name" @blur="checkRequired" required />
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
import { postAdminDataApi, putAdminDataApi } from '@/js/api/fetchAPI';
import { mapActions, mapState } from 'vuex';

export default {
    data() {
        return {
            dataArea: {
                name:""
            }
        }
    },
    created() {
        this.dataArea = this.data ? this.data : this.dataArea
        // console.log(FormInstance);
    },
    props:['data', 'isPost'],
    methods:{
        async submitForm(){    
            let isValid = true;        
            let requiredInputs = document.getElementById("formArea").querySelectorAll("[required]");
            requiredInputs.forEach(item => {
                if (!item.value){

                    isValid = false;
                    item.classList.add("input-error")
                    //console.log(item, isValid);
                }
            });


            if (isValid){  
                this.controllLoader();              
                try {
                    let current = this;

                    let res;
                    if(this.isPost){
                        res = await postAdminDataApi('admin/area', current.token, current.dataArea);
                    }else{
                        res = await putAdminDataApi(`admin/cinema/${current.dataArea._id}`, current.token, current.dataArea);
                    }
                    
                    
                    if (res.data.data){
                        this.$emit('closePopupAndLoad');
                    }
                } catch (error) {
                    console.log(error);
                    alert('Lỗi server.')
                }
                this.controllLoader();  
            }
        },

        checkRequired(){
            console.log(this.dataArea);
        },

        btnCloseOnClick(){
            this.$emit('closePopup');
        },

        ...mapActions(['controllLoader'])
    },

    computed:{
        ...mapState({
            token: state => state.token
        })
    }
}
</script>
  