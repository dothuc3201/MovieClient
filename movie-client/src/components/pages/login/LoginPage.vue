<template>
    <div class="container pt-5 login-page">
        <div class="row">
            <!-- TABS -->
            <ul class="nav nav-tabs text-uppercase tab-information">
                <li class="nav-item">
                    <button class="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login">ĐĂNG
                        NHẬP</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" id="register-tab" data-bs-toggle="tab" data-bs-target="#register">ĐĂNG
                        KÝ</button>
                </li>
            </ul>
            <div class="tab-content font-family-san font-16" style="background-color: #fff;">
                <div class="tab-pane fade show active" id="login">
                    <!-- BEGIN FORM-->
                    <div class="row">
                        <div class="mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Email</label>
                            <input type="email" id="txtEmailLogin" v-model="loginForm.gmail" class="form-control" 
                            placeholder="Email" required @blur="checkValidate">
                        </div>
                    </div>
                    <div class="row">
                        <div class="mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Mật khẩu</label>
                            <input type="password" id="txtPassLogin" v-model="loginForm.password" class="form-control" 
                            placeholder="Mật khẩu" required @blur="checkValidate">
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="button" @click="login" class="btn btn-primary mt-3">Đăng nhập</button>
                    </div>
                    <!-- END FORM-->
                </div>
                <div class="tab-pane fade" id="register">
                    <!-- BEGIN FORM-->
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Họ tên</label>
                            <input type="text" id="txtName" v-model="registerForm.name" class="form-control" placeholder="Họ tên" required 
                            @blur="checkValidate">
                        </div>
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Email</label>
                            <input type="email" id="txtEmailRegister" v-model="registerForm.gmail" class="form-control" placeholder="Email" 
                            required @blur="checkValidate">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Mật khẩu</label>
                            <input type="password" id="txtPassRegister" v-model="registerForm.password" class="form-control" placeholder="Mật khẩu" 
                            required @blur="checkValidate">
                        </div>
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Xác nhận mật khẩu</label>
                            <input type="password" id="txtConfirmPass" v-model="registerForm.repassword" class="form-control"
                                placeholder="Xác nhận mật khẩu" required @blur="checkValidate">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Ngày sinh</label>
                            <input type="date" id="txtNgaySinh" v-model="registerForm.birthday" class="datepicker form-control"
                                placeholder="Ngày sinh" required @blur="checkValidate">
                        </div>
                        <div class="col-md-6 mb-4">
                            <label for="gender">Giới tính</label>
                            <select class="custom-select" id="gender"
                            v-model="selectedGender"  >
                                <option v-for="(option,index) in optionsGender" :value="option.value" :key="index" >
                                    {{ option.text }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Số điện thoại</label>
                            <input type="text" id="txtDienThoai" value="" class="form-control"
                                placeholder="Số điện thoại" required>
                        </div>
                    </div>
                    <!-- <div class="row">
                        <div class="col-md-6 mb-4">
                            Xác thực
                        </div>
                    </div> -->
                    <div class="row">
                        <div class="mb-4">
                            <el-checkbox v-model="checked1" label="" size="large" />
                            <span style="padding-left: 5px">
                                <span>Tôi cam kết tuân theo </span>
                                <span @click="openShowChinhSachPopup">Chính sách bảo mật </span>
                                <span>và </span>
                                <span>Điều khoản sử dụng</span>
                            </span>
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="button" @click="register" class="btn btn-primary mt-3">Đăng ký</button>
                    </div>
                    <!-- END FORM-->
                </div>
            </div>
            <!-- END TABS -->
            <el-dialog :v-model="showChinhSachPopup" title="Chính sách bảo mật">
                <div class="dialog-content">
                    <p>CHÍNH SÁCH BẢO MẬT THÔNG TIN CÁ NHÂN KHÁCH HÀNG</p>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import { postDataApi } from '@/js/api/fetchAPI';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            showChinhSachPopup: false,
            loginForm: {},
            registerForm: {},
            isLogin: true,
            optionsGender: [
                { text: 'Nam', value: 'male' },
                { text: 'Nữ', value: 'female' },
                //{ text: 'Three', value: 'C' }
            ],
            selectedGender: 'male'
        }
    },
    async created() {
        await this.loadData();
    },
    methods: {
        async loadData() {
        },

        openShowChinhSachPopup() {
            this.showChinhSachPopup = true;
        },

        async login(){
            
            let isValid = true,
            url = 'auth/login';   
            if(window.location.pathname.includes('admin')){
                url = 'admin/auth/login';
            }         
            let requiredInputs = document.getElementById("login").querySelectorAll("[required]");
            requiredInputs.forEach(item => {
                if (!item.value){

                    isValid = false;
                    item.classList.add("input-error")
                    //console.log(item, isValid);
                }
            });


            if (isValid){                
                try {
                    let current = this;
                    let res = await postDataApi(url, current.loginForm);
                    
                    if (res.data.data.refreshToken){
                        localStorage.setItem("token", res.data.data.refreshToken);
                        current.changeToken(res.data.data.refreshToken);
                        if(res.data.data.isAdmin){
                            localStorage.setItem("isAdmin", true);
                            current.changeIsAdmin(true);

                            current.$router.push('/admin');
                        }
                        else
                        {
                            localStorage.setItem("isAdmin", false);
                            current.changeIsAdmin(false);
                            current.$router.push('/');
                        }
                    }
                    console.log(current.$router);
                } catch (error) {
                    console.log(error);
                    alert('Tên đăng nhập hoặc mật khẩu không đúng.')
                }
            }
        },

        async register(){

            let isValid = true,
            url = 'auth/register';   
            if(window.location.pathname.includes('admin')){
                url = 'admin/auth/register';
            }            
            let requiredInputs = document.getElementById("register").querySelectorAll("[required]");
            requiredInputs.forEach(item => {
                if (!item.value){

                    isValid = false;
                    item.classList.add("input-error")
                    //console.log(item, isValid);
                }
            });

            /// console.log(window.location.origin);
            // window.location = window.location.origin;

            if (isValid){                
                try {
                    let current = this;
                    let res = await postDataApi(url, current.registerForm);
                    
                    if (res.data.data.refreshToken){
                        localStorage.setItem("token", res.data.data.refreshToken);
                        current.changeToken(res.data.data.refreshToken);
                        if(res.data.data.isAdmin){
                            localStorage.setItem("isAdmin", res.data.data.refrisAdmineshToken);
                            current.changeIsAdmin(true);

                            current.$router.push('/admin');
                        }
                        else
                        current.$router.push('/');
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        },

        checkValidate(event){
            if(event.target.value && event.target.classList.contains("input-error")){
                event.target.classList.remove("input-error");
            }
            if(!event.target.value && !event.target.classList.contains("input-error")){
                event.target.classList.add("input-error");
            }          
        },

        ...mapActions(['changeToken']),
        ...mapActions(['changeIsAdmin']),
    },
    computed: {
    }
}

</script>
<style lang="scss" scoped>
.login-page {
    max-width: 500px;
}

.tab-information {
    display: flex;
    padding: 0;

    li {
        width: 50%;

        button {
            width: 100%;
            font-family: sans-serif;
            font-size: 14px;
            border-radius: 0;
        }
    }
}

.nav {
    .nav-item .nav-link {
        color: var(--bs-dark);
        font-weight: 500;

        &.active {
            background: #03599d;
            color: var(--bs-white);
        }
    }
}

.tab-content {
    .tab-pane {
        padding: 36px 16px;

        h2 {
            font-size: 24px;
            color: #03599d;
            text-transform: uppercase;
        }

        table {
            thead th {
                font-weight: 500;
            }
        }
    }
}

input {
    height: 32px;
    font-size: 14px;
}

.input-error {
    border-color: #ff1d1d;
}
// input:focus{

// }

.confirm {
    display: flex;
}
</style>