<template>
    <div class="dialog">
        <div class="dialog-container py-2 px-3 w-100 h-100">

            <div class="dialog-header ">
                <h5 class="modal-title">Phim</h5>
                <button class="icon-button" @click="btnCloseOnClick">
                    <div class="icon-24 icon-exit icon-sprite"></div>
                </button>
            </div>
            <div id="form-cinema">
                <el-form ref="formRef" :model="dataFilm" label-width="120px" label-position="top"
                    class="demo-ruleForm row">
                    <div class="col-6">
                        <el-form-item label="Tên phim" prop="name">
                            <el-input v-model="dataFilm.name" @blur="checkRequired" required />
                        </el-form-item>

                        <el-form-item label="Thể loại" prop="genre">
                            <el-input v-model="dataFilm.genre" @blur="checkRequired" required />
                        </el-form-item>
                        <el-form-item label="Thời lượng" prop="durationMin">
                            <el-input v-model="dataFilm.durationMin" class="w-25" type="number" @blur="checkRequired"
                                required />
                        </el-form-item>
                    </div>

                    <div class="col-6">
                        <el-form-item label="Đạo diễn" prop="director">
                            <el-input v-model="dataFilm.director" @blur="checkRequired" required />
                        </el-form-item>
                        <el-form-item label="Diễn viên" prop="actors">
                            <el-input v-model="dataFilm.actors" @blur="checkRequired" required />
                        </el-form-item>

                        <el-form-item label="Độ tuổi" prop="ageRestriction">
                            <el-input v-model="dataFilm.ageRestriction" class="w-25" type="number" @blur="checkRequired"
                                required />
                        </el-form-item>
                    </div>
                    <el-form-item label="Giới thiệu" prop="description">
                        <el-input v-model="dataFilm.description" type="textarea" @blur="checkRequired" required />
                    </el-form-item>
                    <div class="col-6">
                        <el-form-item label="Ảnh minh họa" prop="description">
                            <el-input v-model="dataFilm.avatarUrl" @blur="checkRequired" required />
                        </el-form-item>
                    </div>
                    <div class="col-6">
                        <el-image style="width: 100px; height: 150px" :src="dataFilm.avatarUrl"
                            v-if="dataFilm.avatarUrl ? true : false"></el-image>
                    </div>
                    <el-form-item label="Trailer" prop="description">
                        <el-input v-model="dataFilm.trailerUrl" @blur="checkRequired" required />

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


export default {
    data() {
        return {
            dataFilm: {
            }
        }
    },
    created() {
        this.dataFilm = this.data ? this.data : this.dataFilm
        // console.log(FormInstance);
    },
    props: ['data'],
    methods: {
        btnCloseOnClick() {
            this.$emit('closePopup');
        },

    },


}
</script>