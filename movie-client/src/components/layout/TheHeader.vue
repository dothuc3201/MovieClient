<template>
    <div class="header d-flex align-items-center" style="height: 90px;">
        <div class="d-flex justify-content-end" style="background-color: black; padding-right: 100px;" v-if="!token">
            <router-link to="/login" class="px-2" style="color: #fff;">Login</router-link>
            <div style="color: #fff;">|</div>
            <router-link to="/login" class="px-2" style="color: #fff;">Register</router-link>
        </div>
        <div class="d-flex align-items-center justify-content-around w-100" v-if="!isAdmin">
            <router-link to="/" class="header-logo">
                <img :src="logo" alt="logo" style="width: 130px" />
            </router-link>
            <div class="top-cart-block">
                <el-select v-model="value" class="m-2" placeholder="Chọn khu vực">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
            <div class="header-navigation d-flex">
                <router-link to="/showtimes" class="header-content">Lịch chiếu theo rạp</router-link>
                <router-link to="/films" class="header-content">Phim</router-link>
                <router-link to="/thong-tin-rap" class="header-content">Rạp</router-link>
                <router-link to="/gia-ve" class="header-content">Giá vé</router-link>
                <router-link to="/news" class="header-content">Tin mới và ưu đãi</router-link>
                <!-- chia trường hợp đã login và chưa login -->
                <!-- <router-link to="/member" class="header-content">Thành viên</router-link> -->
                <router-link to="/login" class="header-content">Thành viên</router-link>
            </div>
            <div class="header-account" v-if="token">
                <img :src="account" alt="logo" style="width: 40px" />
            </div>
        </div>
        <div class="d-flex align-items-center flex-fill" v-if="isAdmin">
            <div style="width: 200px;">
                <router-link to="/admin" class="header-logo">
                    <img :src="logo" alt="logo" style="width: 130px" />
                </router-link>
            </div>
            <div class="d-flex justify-content-end flex-fill p-3">
                <div>
                    Chọn rạp
                </div>
                <div class="header-account" v-if="token">
                    <img :src="account" alt="logo" style="width: 40px" />
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import { ref } from 'vue'
import logo from "../../assets/image/logo.png";
import account from "../../assets/image/account.jpg";
import { mapActions, mapState } from 'vuex';

const value = ref('')

const options = [
    {
        value: 'Option1',
        label: 'Hà Nội',
    },
    {
        value: 'Option2',
        label: 'TP Hồ Chí Minh',
    },
    {
        value: 'Option3',
        label: 'Thái Nguyên',
    },
    {
        value: 'Option4',
        label: 'Bắc Giang',
    },
    {
        value: 'Option5',
        label: 'Khánh Hòa',
    },
]

export default {
    data() {
        return {
            logo,
            account,
            value,
            options
        }
    },

    computed: {
        ...mapState({
            token: state => state.token,
            isAdmin: state => state.isAdmin
        })
    },

    methods: {
        ...mapActions(['changeToken']),
        ...mapActions(['changeIsAdmin']),
    },
}

</script>

<style scoped lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;422&display=swap');

.header {
    box-shadow: 0 1px 3px #ddd;
    background-color: #fff;
}

.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
}

.header-logo {
    font-size: 30px;
    color: #03599d;
    text-decoration: solid;
    font-weight: 700;
}

.header-navigation {
    display: flex;
}

.header-content {
    font-family: 'Oswald', sans-serif;
    padding: 24px 12px 24px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-transform: uppercase;
    cursor: pointer;
}

.header-content:hover {
    color: #03599d;
}
</style>
