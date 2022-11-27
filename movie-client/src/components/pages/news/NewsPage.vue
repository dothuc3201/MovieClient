<template>
    <div>
        <NewsBox :data="promotionList" label="Khuyến mãi lớn"></NewsBox>
        <NewsBox :data="newsList" label="Tin bên lề"></NewsBox>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import NewsBox from '@/components/pages/news/NewsBox.vue';
export default {
    components: { NewsBox },
    data() {
        return {
            promotionList: [],
            newsList: []
        }
    },
    async created() {
        await this.loadData();
    },
    methods: {
        async loadData() {
            try {
                var current = this;
                current.controllLoader();
                // TODO: Binding data vào giao diện
                // Fake data để cắt giao diện
                current.promotionList = [
                    {
                        title: `Chụp băng mũ rơm - tặng ngay bắp thơm`,
                        image: "https://files.betacorp.vn/files/ecm/2022/11/17/check-in-bang-mu-rom-bap-thom-ngon-tang-lien-545-x-415-175500-171122-64.png"
                    },
                    {
                        title: `Mừng ngày thầy cô - khuyến mãi "hết cỡ"`,
                        image: "https://files.betacorp.vn/files/ecm/2022/11/17/check-in-20-11-545-x-415-175055-171122-87.png"
                    },
                    {
                        title: `Ở ghép cùng aplus`,
                        image: "https://files.betacorp.vn/files/ecm/2022/09/10/banner-web-1702x621-v4-02-720-100925-100922-14.jpg"
                    },
                    {
                        title: `Giảm ngay 20k với shopee scan & pay voucher`,
                        image: "https://files.betacorp.vn/files/ecm/2022/11/01/untitled-1-180035-011122-29.jpg"
                    },
                    {
                        title: `Ưu đãi hủy diệt - vé xem phim 0 đồng`,
                        image: "https://files.betacorp.vn/files/ecm/2022/06/08/mb-bank-ctkm-545x415-090344-080622-39.jpg"
                    },
                    {
                        title: `Thành viên beta - đồng giá 45k/50k`,
                        image: "https://files.betacorp.vn/files/ecm/2021/01/21/545x415-member-163558-210121-74.jpg"
                    },
                    {
                        title: `Thứ ba vui vẻ`,
                        image: "https://files.betacorp.vn/files/ecm/2021/01/21/545x415-t3vv-1-164323-210121-12.jpg"
                    }
                ];

                current.newsList = [
                    {
                        title: `Ở ghép cùng aplus`,
                        image: "https://files.betacorp.vn/files/ecm/2022/09/10/banner-web-1702x621-v4-02-720-100925-100922-14.jpg"
                    },
                    {
                        title: `😍 Ưu đãi 15% khóa mini-mba, dành cho thành viên của beta cinemas 🎉`,
                        image: "https://files.betacorp.vn/files/ecm/2022/07/28/banner-app-va-web-7-2022-02-1-143932-280722-14.png"
                    },
                    {
                        title: `Thám tử lừng danh conan - nàng dâu halloween - khởi chiếu 21/07/2022`,
                        image: "https://files.betacorp.vn/files/ecm/2022/07/19/4185a7725d5f2453-f10fb0ada972e963-12350616502142048185710-2245-161420-190722-70.jpg"
                    },
                    {
                        title: `Quảng cáo tại Rạp chiếu phim đẹp nhất Việt Nam`,
                        image: "https://files.betacorp.vn/files/ecm/2022/06/28/sss-113139-280622-26.jpg"
                    },
                    {
                        title: `Suất chiếu sớm đặc biệt - sát thủ nhân tạo 2 (29.06.2022)`,
                        image: "https://files.betacorp.vn/files/ecm/2022/06/27/545x415-164641-270622-28.jpg"
                    },
                    {
                        title: `Điện thoại đen suất chiếu sớm từ 22/06/2022`,
                        image: "https://files.betacorp.vn/files/ecm/2022/06/17/ten-son-545x415-173428-170622-78.jpg"
                    },
                    {
                        title: `Cả hai phim "trịnh công sơn" & "em và trịnh" sẽ có các suất chiếu đặc biệt từ rất sớm`,
                        image: "https://files.betacorp.vn/files/ecm/2022/06/06/em-v-tr-nh-545x415-144359-060622-30.jpg"
                    }
                ];
                current.controllLoader();
            } catch (error) {
                console.log(error);
            }
        },

        // ẩn/ hiện loading
        ...mapActions(['controllLoader']),
    },
    computed: {
    }
}
</script>