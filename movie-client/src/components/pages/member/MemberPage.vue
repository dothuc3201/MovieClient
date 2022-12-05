<template>
    <div class="container py-5">
        <div class="row">
            <!-- TABS -->
            <ul class="nav nav-tabs text-uppercase tab-information">
                <li class="nav-item">
                    <button class="nav-link active" id="thongtintaikhoan-tab" data-bs-toggle="tab"
                        data-bs-target="#thongtintaikhoan">Thông tin tài khoản</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" id="hanhtrinhdienanh-tab" data-bs-toggle="tab"
                        data-bs-target="#hanhtrinhdienanh">Lịch sử giao dịch</button>
                </li>
            </ul>
            <div class="tab-content font-family-san font-16" style="background-color: #fff;">
                <div class="tab-pane fade show active" id="thongtintaikhoan">
                    <!-- BEGIN FORM-->
                    <form novalidate>
                        <div class="row">
                            <div class="col-md-12 mb-4">
                                <label><span style="color: red;">*</span>&nbsp;Họ tên</label>
                                <input type="text" id="txtName" v-model="this.userProfile.name" class="form-control"
                                    placeholder="Họ tên" required>
                                <p class="error-msg">Vui lòng nhập họ tên</p>
                            </div>
                            <!-- <div class="col-md-6 mb-4">
                                <label><span style="color: red;">*</span>&nbsp;Email</label>
                                <input type="text" id="txtEmail" disabled="disabled" :value="this.userProfile.email" class="form-control" placeholder="Email">
                            </div> -->
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <label><span style="color: red;">*</span>&nbsp;Ngày sinh</label>
                                <input id="txtNgaySinh" v-model="this.userProfile.birthday"
                                    class="datepicker form-control" placeholder="Ngày sinh"
                                    data-date-format="dd/mm/yyyy" required>
                                <p class="error-msg">Vui lòng chọn ngày sinh</p>
                            </div>
                            <div class="col-md-6 mb-4">
                                <label>Giới tính</label>
                                <select id="cboSex" class="form-control" data-placeholder="Giới tính"
                                    v-model="this.userProfile.gender">
                                    <option class="option-item" value="0">Giới tính</option>
                                    <option class="option-item" value="male">Nam</option>
                                    <option class="option-item" value="female">Nữ</option>
                                    <option class="option-item" value="other">Khác</option>
                                </select>
                            </div>
                            <div class="text-center">
                                <button type="button" @click="capnhat" class="btn btn-primary mt-3">Cập nhật</button>
                            </div>
                        </div>
                    </form>
                    <!-- END FORM-->
                </div>
                <div class="tab-pane fade" id="hanhtrinhdienanh">
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th style="width: 20%">Phim</th>
                                    <th style="width: 10%">Rạp chiếu</th>
                                    <th style="width: 10%">Phòng chiếu</th>
                                    <th style="width: 10%">Ghế đã đặt</th>
                                    <th style="width: 10%">Ngày đặt</th>
                                    <th style="width: 10%">Giờ chiếu</th>
                                    <th style="width: 15%">Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in userTickets" :key="index">
                                    <td style="width: 20%">{{ item.film.name }}</td>
                                    <td style="width: 10%">{{ item.cinema.name }}</td>
                                    <td style="width: 10%">{{ item.room }}</td>
                                    <td style="width: 10%">{{ item.seats.join(',') }}</td>
                                    <td style="width: 10%">{{ moment(item.time).format('DD/MM/YYYY') }}</td>
                                    <td style="width: 10%">{{ bindingTime(item.time) }}</td>
                                    <td style="width: 15%">{{ item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                                            ".")
                                    }} vnđ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- END TABS -->
        </div>
    </div>
</template>
<script>
import { getTokenDataApi } from '@/js/api/fetchAPI';
import { putAdminDataApi } from '@/js/api/fetchAPI';
import { mapActions, mapState } from 'vuex';
import moment from 'moment';

export default {
    data() {
        return {
            userProfile: {},
            userTickets: []
        }
    },
    async created() {
        await this.getInfoUser();
        await this.getUserProfile();
        await this.getUserTickets();
    },
    methods: {
        async getInfoUser() {
            console.log('dataUser', this.dataUser)

        },

        async getUserProfile() {
            this.controllLoader();
            try {
                const res = await getTokenDataApi('user/profile', this.token);
                this.userProfile = res.data.data;
                this.userProfile.birthday = moment(this.userProfile.birthday).format('DD/MM/YYYY');
                console.log('user/profile', res.data.data)

                this.controllLoader();
            } catch (error) {
                console.log(error);
                this.controllLoader();
            }
        },

        async getUserTickets() {
            this.controllLoader();
            try {
                const res = await getTokenDataApi('user/tickets', this.token);
                this.userTickets = res.data.data;
                console.log('user/tickets', res.data.data)

                this.controllLoader();
            } catch (error) {
                console.log(error);
                this.controllLoader();
            }
        },

        async capnhat() {
            let isValid = document.querySelector("form").reportValidity();
            const data = {
                name: this.userProfile.name,
                birthday: moment(this.userProfile.birthday, 'DD/MM/YYYY').toISOString(),
                gender: this.userProfile.gender,
            }

            if (isValid) {
                this.controllLoader();
                try {
                    let res = await putAdminDataApi('user/profile', this.token, data);
                    if (res.data) {
                        alert('Cập nhật thành công');
                    }
                } catch (error) {
                    console.log(error);
                    alert('Lỗi server.')
                }
                this.controllLoader();
            }
        },

        moment: function () {
            return moment();
        },

        bindingTime(time) {
            let minute = (new Date(time)).getMinutes()
            minute = minute < 10 ? `0${minute}` : minute;
            return `${(new Date(time)).getHours()}:${minute}`
        },

        ...mapActions(['changeToken']),
        ...mapActions(['changeIsAdmin']),
        ...mapActions(["controllLoader"])
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
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;422&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

.nav {
    .nav-item .nav-link {
        color: var(--bs-dark);
        font-weight: 500;

        &.active {
            background: var(--el-color-primary-dark-2);
            color: var(--bs-white);
        }
    }

    .nav-link {
        font-family: 'Oswald', sans-serif;
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

.btn-primary {
    font-family: 'Source Sans Pro', sans-serif;
}

label,
td {
    font-family: 'Source Sans Pro', sans-serif;
    color: #000;
}

.error-msg {
    display: none;
    color: red;
}

input:invalid+.error-msg {
    display: block;
}
</style>
