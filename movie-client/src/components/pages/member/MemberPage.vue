<template>
    <div class="container pt-5">
        <div class="row">
            <!-- TABS -->
            <ul class="nav nav-tabs text-uppercase tab-information">
                <li class="nav-item">
                    <button class="nav-link active" id="thongtintaikhoan-tab" data-bs-toggle="tab" data-bs-target="#thongtintaikhoan">Thông tin tài khoản</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" id="thethanhvien-tab" data-bs-toggle="tab" data-bs-target="#thethanhvien">Thẻ thành viên</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" id="hanhtrinhdienanh-tab" data-bs-toggle="tab" data-bs-target="#hanhtrinhdienanh">Hành trình điện ảnh</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" id="betapoint-tab" data-bs-toggle="tab" data-bs-target="#betapoint">Điểm Beta</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" id="voucher-tab" data-bs-toggle="tab" data-bs-target="#voucher">Voucher</button>
                </li>
            </ul>
            <div class="tab-content font-family-san font-16" style="background-color: #fff;">
                <div class="tab-pane fade show active" id="thongtintaikhoan">
                    <!-- BEGIN FORM-->
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Họ tên</label>
                            <input type="text" id="txtName" :value="this.dataUser.name" class="form-control" placeholder="Họ tên">
                        </div>
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Email</label>
                            <input type="text" id="txtEmail" disabled="disabled" :value="this.dataUser.email" class="form-control" placeholder="Email">
                        </div>
                    </div>
                    <!-- <div class="row">
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Số điện thoại</label>
                            <input type="text" id="txtDienThoai" value="" class="form-control" placeholder="Số điện thoại">
                        </div>
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;CMND/Hộ chiếu</label>
                            <input type="text" id="txtCMND" value="" class="form-control" placeholder="CMND/Hộ chiếu">
                        </div>
                    </div> -->
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <label><span style="color: red;">*</span>&nbsp;Ngày sinh</label>
                            <!-- <input id="txtNgaySinh" :value="moment(this.dataUser.birthday).format('DD/MM/YYYY')" class="datepicker form-control" placeholder="Ngày sinh" data-date-format="dd/mm/yyyy"> -->
                            
                            <input id="txtNgaySinh" value="" class="datepicker form-control" placeholder="Ngày sinh" data-date-format="dd/mm/yyyy">

                        </div>
                        <div class="col-md-6 mb-4">
                            <label>Giới tính</label>
                            <select id="cboSex" class="form-control" data-placeholder="Giới tính" :tabindex="this.dataUser.gender">
                                <option class="option-item" value="0">Giới tính</option>
                                <option class="option-item" value="male">Nam</option>
                                <option class="option-item" value="female">Nữ</option>
                                <option class="option-item" value="other">Khác</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <label>Tỉnh/Thành phố</label>
                            <select id="cboCity" class="form-control select2-offscreen" data-placeholder="Tỉnh/Thành phố" tabindex="-1" title="">
                                <option class="option-item" value="0">Tỉnh/Thành phố</option>
                                <option class="option-item" value="35519887-5e40-4453-a5fe-01273ca426e0">Tỉnh Sơn La</option>
                                <option class="option-item" value="a6bbafc2-6d9b-4c76-9de8-13c2d7ef70c7">Tỉnh Cao Bằng</option>
                                <option class="option-item" value="e9ae950c-adc1-4190-8cf3-1a012e7c1718">Tỉnh Trà Vinh</option>
                                <option class="option-item" value="a6f34e32-0788-4f63-ba5d-1b61504c130b">Tỉnh Cà Mau</option>
                                <option class="option-item" value="1327206c-1ac6-4e96-9882-1dd497dd845e">Tỉnh Kon Tum</option>
                                <option class="option-item" value="a7c7b48e-3f14-4b6a-a44e-228d785e2ec0">Tỉnh Bà Rịa - Vũng Tàu</option>
                                <option class="option-item" value="0ce276bf-7200-47ec-84e5-32742173034f">Tỉnh Khánh Hòa</option>
                                <option class="option-item" value="b7d9bb93-8d44-43e6-9231-32e428f09cdb">Tỉnh Bắc Giang</option>
                                <option class="option-item" value="7c700b2e-5cec-4eba-aaa1-361a013b938f">Tỉnh Quảng Trị</option>
                                <option class="option-item" value="1a19b638-ae3c-4966-acc0-38a481ca16ae">Tỉnh Lạng Sơn</option>
                                <option class="option-item" value="95ddb4fe-2880-489d-9035-3efeb94d0803">Tỉnh Hải Dương</option>
                                <option class="option-item" value="aa961c34-41a1-414d-bf80-42e18c8acea1">Tỉnh Vĩnh Long</option>
                                <option class="option-item" value="10526a02-0069-470d-83e6-4a7d0ba2d56f">Tỉnh Nghệ An</option>
                                <option class="option-item" value="550e27a5-398e-4d14-aea2-54f32699e025">Tỉnh Hà Nam</option>
                                <option class="option-item" value="bfe8842d-079f-41fc-9337-56f63516135b">Tỉnh Thừa Thiên Huế</option>
                                <option class="option-item" value="0a56dbdf-ec9c-4154-b945-5736869f821e">Tỉnh Bạc Liêu</option>
                                <option class="option-item" value="5367d2eb-317e-4998-835d-613f28f112cd">Tỉnh Thái Bình</option>
                                <option class="option-item" value="b63b1600-add1-4eaf-8130-66af229ce521">Tỉnh Lai Châu</option>
                                <option class="option-item" value="09f07e93-727c-4234-87f4-67406737850f">Tỉnh Quảng Bình</option>
                                <option class="option-item" value="f85ebaff-a292-4f09-8746-693c38623a01">Tỉnh Vĩnh Phúc</option>
                                <option class="option-item" value="97d9e339-0202-401f-9068-6b48ee033e55">Tỉnh Tuyên Quang</option>
                                <option class="option-item" value="4eb9fe4f-0f7a-4d50-a87d-6c77dee5ab42">Tỉnh Ninh Bình</option>
                                <option class="option-item" value="3ac48012-cac0-4721-98ce-6cf0b0795a1e">Tỉnh Lâm Đồng</option>
                                <option class="option-item" value="d414b1fa-7d44-47ae-ae92-6f0a6b8fcfbe">Tỉnh Kiên Giang</option>
                                <option class="option-item" value="97645dbf-17fb-4bd0-ab26-6f6ad19f1071">Tỉnh Yên Bái</option>
                                <option class="option-item" value="39f293e0-eb1f-409e-be52-7060c71e510e">Tỉnh Lào Cai</option>
                                <option class="option-item" value="62e100c5-4d9f-4347-a89d-72ac45c7ec12">Tỉnh Hà Giang</option>
                                <option class="option-item" value="924e8f4d-a02a-48cc-ac01-7927400c257b">Tỉnh Long An</option>
                                <option class="option-item" value="bf0ca5f1-cf4e-4d73-8d09-7dc31b7bbbbc">Tỉnh Thanh Hóa</option>
                                <option class="option-item" value="b9053b72-b14a-4cf1-ba33-8050b2db4ed7">Tỉnh Quảng Nam</option>
                                <option class="option-item" value="938c9ff7-4e4a-48a0-9d5e-8d8a34967ac2">Tỉnh Bình Dương</option>
                                <option class="option-item" value="34d152d3-ea6b-4948-afad-9007890bc3c4">Tỉnh Phú Yên</option>
                                <option class="option-item" value="9cda427e-11bb-4b5c-85ea-947135ea623e">Tỉnh Quảng Ngãi</option>
                                <option class="option-item" value="5f060cf6-5e2c-41b5-a19e-987b2489baca">Thành phố Đà Nẵng</option>
                                <option class="option-item" value="1805444e-459b-40be-b320-98aeb7d74f35">Tỉnh Bắc Kạn</option>
                                <option class="option-item" value="9539da6b-3464-4479-a592-9eaef6a51f95">Tỉnh Bắc Ninh</option>
                                <option class="option-item" value="f0e809b2-0b3e-481d-bfbe-a4289f4dc6b3">Tỉnh Đắk Nông</option>
                                <option class="option-item" value="976cedfb-56de-460e-9084-a77e657c6338">Thành phố Cần Thơ</option>
                                <option class="option-item" value="80557377-1ec5-4a8b-9f92-a7e681a732c0">Tỉnh Đắk Lắk</option>
                                <option class="option-item" value="b983dae4-43c1-4115-91aa-a7e75fd89100">Tỉnh Phú Thọ</option>
                                <option class="option-item" value="7587cc8d-e4cb-4add-b882-ac3c442bbdda">Thành phố Hồ Chí Minh</option>
                                <option class="option-item" value="b031b7d7-8ca9-4c6d-b1b2-ae1e6ec18233">Thành phố Hải Phòng</option>
                                <option class="option-item" value="13b22d00-c758-4d37-8c0f-b209f385700f">Tỉnh Gia Lai</option>
                                <option class="option-item" value="74a44fee-fd65-4a8a-ac22-b354898d0210">Tỉnh Hưng Yên</option>
                                <option class="option-item" value="3cd3bf6f-1b18-40e2-8347-b3a12ad4a4d5">Tỉnh Tây Ninh</option>
                                <option class="option-item" value="a6edc469-00f0-4ddc-9dbb-b6e0fe3d975d">Tỉnh Thái Nguyên</option>
                                <option class="option-item" value="730bd923-2578-4dc4-ae92-c03a754e2ea9">Tỉnh Hậu Giang</option>
                                <option class="option-item" value="369845f5-a9d4-44db-83b3-c49fd3f84336">Tỉnh Bình Định</option>
                                <option class="option-item" value="53cc10f7-266d-488d-b5a0-c60b74863f4f">Tỉnh Nam Định</option>
                                <option class="option-item" value="1d7eb70f-80c8-46d8-b9e2-c7043fee1551">Tỉnh Tiền Giang</option>
                                <option class="option-item" value="29660133-98c6-4a31-833c-cd691973314e">Tỉnh Bình Thuận</option>
                                <option class="option-item" value="e5d76432-7d88-4320-8364-cdb328d5172b">Tỉnh Bến Tre</option>
                                <option class="option-item" value="6b2e3f7d-838a-4f79-8d31-d99c093d1375">Tỉnh Quảng Ninh</option>
                                <option class="option-item" value="892e2c9d-cfbc-4a8b-ae61-dc22ed51f820">Tỉnh Hà Tĩnh</option>
                                <option class="option-item" value="5eada4e6-5f87-410f-8753-e2d8022466dd">Tỉnh Đồng Nai</option>
                                <option class="option-item" value="0fd2c1a7-0a33-44cc-a87f-e5e551583fd9">Tỉnh An Giang</option>
                                <option class="option-item" value="9879005a-8b63-4569-b9ec-e9433d5287f4">Tỉnh Bình Phước</option>
                                <option class="option-item" value="0f9e787e-aff8-4658-bc68-ef23e2d80bf3">Tỉnh Đồng Tháp</option>
                                <option class="option-item" value="7a8cfb85-47aa-4737-bb01-f08e7dff177c">Thành phố Hà Nội</option>
                                <option class="option-item" value="bec0dc45-cb59-4fa4-b700-f3e911a65ea8">Tỉnh Sóc Trăng</option>
                                <option class="option-item" value="395d168f-0cb0-4856-b92f-f4a4abc2668e">Tỉnh Ninh Thuận</option>
                                <option class="option-item" value="b7a68bfb-3086-42c8-a17d-f8074e93c2d7">Tỉnh Hoà Bình</option>
                                <option class="option-item" value="407e0535-4504-4b54-abdc-fb23afd1854c">Tỉnh Điện Biên</option>
                            </select>
                        </div>
                        <div class="col-md-6 mb-4">
                            <label>Quận/Huyện</label>
                            <select id="cboDistrict" class="form-control" data-placeholder="Quận/Huyện" tabindex="1">
                            </select>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="row">
                        <div class="col-md-16 margin-bottom-30">
                            <label>Địa chỉ</label>
                            <textarea class="form-control" id="txtDiaChi" rows="2" placeholder="Địa chỉ"></textarea>
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="button" onclick="capnhat();" class="btn btn-primary mt-3">Cập nhật</button>
                    </div>
                    <!-- END FORM-->
                </div>
                <div class="tab-pane fade" id="thethanhvien">
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th style="width: 20%">Số thẻ</th>
                                    <th style="width: 20%">Hạng thẻ</th>
                                    <th style="width: 12%">Ngày kích hoạt</th>
                                    <th style="width: 12%">Tổng chi tiêu</th>
                                    <th style="width: 12%">Điểm tích lũy</th>
                                    <th style="width: 12%">Điểm đã tiêu</th>
                                    <th style="width: 12%">Điểm khả dụng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>9002000001892518 (Đang dùng)</td>
                                    <td>Khách hàng STANDARD</td>
                                    <td>22/11/2022</td>
                                    <td>00 đ</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="text-center fw-semibold">Bạn cần tích lũy thêm 3.000.000 đ để nâng hạng Khách hàng VIP</div>
                    <div class="progress" style="margin-bottom: unset !important">
                        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="3000000" style="width: 0%">0 %</div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 text-start">0</div>
                        <div class="col-md-6 text-end">3.000.000</div>
                    </div>
                </div>
                <div class="tab-pane fade" id="hanhtrinhdienanh">
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th style="width: 10%">Mã hóa đơn</th>
                                    <th style="width: 20%">Phim</th>
                                    <th style="width: 10%">Rạp chiếu</th>
                                    <th style="width: 10%">Suất chiếu</th>
                                    <th style="width: 15%">Ghế đã đặt</th>
                                    <th style="width: 15%">Combo/Package</th>
                                    <th style="width: 10%">Ngày đặt</th>
                                    <th style="width: 10%">Điểm</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane fade" id="betapoint">
                    <h2>Tổng quan</h2>
                    <div class="row">
                        <p class="col-md-3 mb-2 ps-5">Điểm đã tích luỹ</p>
                        <p class="col-md-9 mb-2">0 điểm</p>
                        <p class="col-md-3 mb-2 ps-5">Điểm đã sử dụng</p>
                        <p class="col-md-9 mb-2">0 điểm</p>
                        <p class="col-md-3 mb-2 ps-5">Điểm hiện có</p>
                        <p class="col-md-9 mb-2">0 điểm</p>
                    </div>
                    <h2 class="mt-4">Lịch sử điểm</h2>
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Thời gian</th>
                                    <th>Số điểm</th>
                                    <th>Nội dung sử dụng</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane fade" id="voucher">
                    <h2>Voucher của tôi</h2>
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th style="width: 17%">Mã voucher</th>
                                    <th style="width: 40%">Nội dung voucher</th>
                                    <th style="width: 13%">Loại voucher</th>
                                    <th style="width: 10%">Ngày hết hạn</th>
                                    <th style="width: 10%">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                    <h2 class="mt-4">Lịch sử voucher</h2>
                    <div class="col-md-16">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th style="width: 15%">Thời gian</th>
                                        <th style="width: 17%">Mã voucher</th>
                                        <th style="width: 53%">Nội dung voucher</th>
                                        <th style="width: 15%">Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END TABS -->
        </div>
    </div>
</template>
<script>
// import { getDataProfile } from '@/js/api/getApi';
import { mapActions, mapState } from 'vuex';

export default {
    data() {
        return {
        }
    },
    async created() {
        // await this.loadData();
        await this.getInfoUser();
    },
    methods: {
        async getInfoUser(){
            console.log('dataUser', this.dataUser)
            
        },

        ...mapActions(['changeToken']),
        ...mapActions(['changeIsAdmin']),
    },
    computed: {
        ...mapState({
            token: state => state.token,
            isAdmin: state => state.isAdmin,
            dataUser: state => state.dataUser,
        }),
    },
}
</script>
<style lang="scss" scoped>
    .nav {
        .nav-item .nav-link {
            color: var(--bs-dark);
            font-weight: 500;
            &.active {
                background: var(--el-color-primary-dark-2);
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
</style>