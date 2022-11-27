<template>
    <div class="container pt-5 login-page">
        <div class="row">
            <!-- TABS -->
            <ul class="nav nav-tabs text-uppercase tab-information">
                <li class="nav-item">
                    <button class="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login">ĐĂNG NHẬP</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" id="register-tab" data-bs-toggle="tab" data-bs-target="#register">ĐĂNG KÝ</button>
                </li>
            </ul>
            <div class="tab-content font-family-san font-16" style="background-color: #fff;">
                <div class="tab-pane fade show active" id="login">
                    <!-- BEGIN FORM-->
                    <div class="row">
                        <div class="mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Email</label>
                            <input type="text" id="txtEmail" value="" class="form-control" placeholder="Email">
                        </div>
                    </div>
                    <div class="row">
                        <div class="mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Mật khẩu</label>
                            <input type="text" id="txtPass" value="" class="form-control" placeholder="Mật khẩu">
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="button" onclick="capnhat();" class="btn btn-primary mt-3">Đăng nhập</button>
                    </div>
                    <!-- END FORM-->
                </div>
                <div class="tab-pane fade" id="register">
                    <!-- BEGIN FORM-->
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Họ tên</label>
                            <input type="text" id="txtName" value="" class="form-control" placeholder="Họ tên">
                        </div>
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Email</label>
                            <input type="text" id="txtEmail" value="" class="form-control" placeholder="Email">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Mật khẩu</label>
                            <input type="text" id="txtPass" value="" class="form-control" placeholder="Mật khẩu">
                        </div>
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Xác nhận mật khẩu</label>
                            <input type="text" id="txtConfirmPass" value="" class="form-control" placeholder="Xác nhận mật khẩu">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Ngày sinh</label>
                            <input id="txtNgaySinh" value="" class="datepicker form-control" placeholder="Ngày sinh" data-date-format="dd/mm/yyyy">
                        </div>
                        <div class="col-md-6 mb-4">
                            <label>Giới tính</label>
                            <select id="cboSex" class="form-control" data-placeholder="Giới tính">
                                <option class="option-item" value="0">Giới tính</option>
                                <option class="option-item" value="1">Nam</option>
                                <option class="option-item" value="2">Nữ</option>
                                <option class="option-item" value="3">Khác</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Số điện thoại</label>
                            <input type="text" id="txtDienThoai" value="" class="form-control" placeholder="Số điện thoại">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            Xác thực
                        </div>
                    </div>
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
                        <button type="button" onclick="capnhat();" class="btn btn-primary mt-3">Đăng ký</button>
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

export default {
    data() {
        return {
            showChinhSachPopup: false
        }
    },
    async created() {
        await this.loadData();
    },
    methods: {
        async loadData() {
        },

        openShowChinhSachPopup(){
            this.showChinhSachPopup = true;
        },
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
    .confirm {
        display: flex;
    }
</style>