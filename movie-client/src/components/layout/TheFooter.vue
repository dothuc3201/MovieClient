<template>
    <footer>
        <div class="row">
            <div class="container">
            <router-link to="/" class="header-logo">
                <img :src="logo" alt="logo" style="width: 130px" />
            </router-link>
            <div class="pre-footer-col">
                <div><h2>Cụm Beta</h2></div>
                <div>
                    <ul class="list-unstyled">
                    <li>
                        <i class="fa-solid fa-angle-right"></i>
                        <span>Beta Cinemas Quang Trung, tp Hồ Chí Minh - Hotline 036 9939 722</span> 
                    </li>
                    <li>
                        <i class="fa-solid fa-angle-right"></i>
                        Beta Cinemas Quang Trung, tp Hồ Chí Minh - Hotline 036 9939 722 
                    </li>
                    <li>
                        <i class="fa-solid fa-angle-right"></i>
                        Beta Cinemas Quang Trung, tp Hồ Chí Minh - Hotline 036 9939 722 
                    </li>
                    <li>
                        <i class="fa-solid fa-angle-right"></i>
                        Beta Cinemas Quang Trung, tp Hồ Chí Minh - Hotline 036 9939 722 
                    </li>
                    <li>
                        <i class="fa-solid fa-angle-right"></i>
                        Beta Cinemas Quang Trung, tp Hồ Chí Minh - Hotline 036 9939 722 
                    </li>
                </ul>
                </div>
            </div>
            <div class="pre-footer-col">
                <div>
                    <h2>
                        Liên hệ
                    </h2>
                </div>
                <div>
                    <h4>CÔNG TY CỔ PHẦN BETA MEDIA</h4>
                    <h6>Giấy chứng nhận ĐKKD số: 0106633482 - Đăng ký lần đầu ngày 08/09/2014 tại Sở Kế hoạch và Đầu tư Thành phố Hà Nội</h6>
                    <h6>Địa chỉ trụ sở: Tầng 3, số 595, đường Giải Phóng, phường Giáp Bát, quận Hoàng Mai, thành phố Hà Nội</h6>
                </div>
            </div>
            </div>
        </div>
    </footer>
</template>
<script>
import { mapState } from 'vuex';
import logo from "../../assets/image/logo.png";

export default {
    data() {
        return {
            logo
        }
    },
    created(){
        console.log(this.isAdmin);
    },

    computed:{
        ...mapState({
            isAdmin: state => state.isAdmin
        })
    }
}

</script>

<style scoped lang='scss'>
.container {
    padding: 25px 15px 0 15px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    margin-right: auto;
    margin-left: auto;
}
.row {
    font-family: sans-serif;
    border-top: 2px solid #ccc;
}
.header-logo {
    font-size: 30px;
    color: #03599d;
    text-decoration: solid;
    font-weight: 700;
}
.list-unstyled {
    float: left;
}
h2 {
    line-height: 1.5em;
    font-size: 20px;
    padding-bottom: 7px;
    margin: 0 0 15px;
    text-transform: uppercase;
    font-weight: bold;
    color: #333;
    border-bottom: 4px solid transparent;
    border-image: linear-gradient(to right, #39adf0 0%, #075fa3 100%);
    border-image-slice: 1;
    float: left;
}
ul {
    list-style-type: none;
    padding: 0;
}
.pre-footer-col {
    display: flex;
    flex-direction: column;
}
li {
    font-size: 14px;
    color: #000;
}
</style>
