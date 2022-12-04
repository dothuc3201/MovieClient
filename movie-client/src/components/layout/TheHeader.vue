<template>
    <div class="header d-flex align-items-center" style="height: 90px;">
        <!-- <div class="d-flex justify-content-end" style="background-color: black; padding-right: 100px;" v-if="!token">
            <router-link to="/login" class="px-2" style="color: #fff;">Login</router-link>
            <div style="color: #fff;">|</div>
            <router-link to="/login" class="px-2" style="color: #fff;">Register</router-link>
        </div> -->
        <div class="d-flex align-items-center justify-content-around w-100" v-if="!isAdmin">
            <router-link to="/" class="header-logo">
                <img :src="logo" alt="logo" style="width: 130px" />
            </router-link>
            <div class="top-cart-block">
                <!-- <el-select v-model="value" class="m-2" placeholder="Chọn rạp phim">
                    <el-option v-for="item in dataCinema" :key="item.value" :label="item.label" :value="item.value" />
                </el-select> -->
                <el-select v-model="value" class="m-2" placeholder="Chọn rạp phim">
                    <el-option-group
                        v-for="group in dataCinemas"
                        :key="group._id"
                        :label="group.name"
                        >
                        <el-option
                            v-for="item in group.cinemas"
                            :key="item._id"
                            :label="item.name"
                            :value="item._id"
                        />
                    </el-option-group>
                </el-select>
            </div>
            <div class="header-navigation d-flex">
                <router-link to="/showtimes" class="header-content">Lịch chiếu theo rạp</router-link>
                <router-link to="/films" class="header-content">Phim</router-link>
                <router-link to="/thong-tin-rap" class="header-content">Rạp</router-link>
                <!-- <router-link to="/gia-ve" class="header-content">Giá vé</router-link> -->
                <router-link to="/news" class="header-content">Tin mới và ưu đãi</router-link>
                <!-- chia trường hợp đã login và chưa login -->
                <router-link :to="token ? '/member' : '/login'" class="header-content">Thành viên</router-link>
            </div>
            <el-dropdown trigger="click">
                <div class="header-account">
                    <img :src="account" alt="logo" style="width: 40px" />
                </div>
                <template #dropdown>
                    <el-dropdown-menu v-if="!token">
                        <el-dropdown-item>
                            <router-link to="/login">Đăng nhập</router-link>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                    <el-dropdown-menu v-else>
                    <el-dropdown-item>
                        <router-link to="/">Đăng xuất</router-link>
                    </el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
            
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
import { getPaging } from '@/js/api/getApi';

const value = ref('')

// const dataCinema = [
//   {
//     label: 'Hà Nội',
//     options: [
//       {
//         value: '1',
//         label: 'Beta Cầu Giấy',
//       },
//       {
//         value: '2',
//         label: 'Beta Thanh Xuân',
//       },
//     ],
//   },
//   {
//     label: 'Hồ Chí Minh',
//     options: [
//       {
//         value: '1',
//         label: 'Beta Quận 1',
//       },
//       {
//         value: '2',
//         label: 'Beta Quận 2',
//       },
//       {
//         value: '3',
//         label: 'Beta Quận 3',
//       },
//     ],
//   },
// ]

export default {
    data() {
        return {
            logo,
            account,
            value,
            dataCinemas:[],
        }
    },

    async created() {
        await this.getCinemas();        
    },

    computed: {
        ...mapState({
            token: state => state.token,
            isAdmin: state => state.isAdmin
        })
    },

    methods: {
        async getCinemas(){
            try {
                const res = await getPaging('area/get-areas');
                if(res.data){
                    console.log('aaaaaa', res.data.data)
                    this.dataCinemas = res.data.data;
                    console.log('bbb', this.dataCinemas)
                }
            } catch (error) {
                console.log(error);
            }
        },

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
