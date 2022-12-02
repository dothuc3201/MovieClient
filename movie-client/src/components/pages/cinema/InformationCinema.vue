<template>
    <div class="container pt-5">
        <div class="row">
            <div class="info-cinema">
                <div class="header-info">Thái Nguyên</div>
                <div class="info-content">
                    <div class="background-cinema"></div>
                    <div class="info-text">
                        Thành lập vào tháng 12 năm 2014, Beta Cinemas Thái Nguyên có vị trí trung tâm, toạ lạc tại Hoàng Gia Plaza. Rạp tự hào là rạp phim tư nhân duy nhất và đầu tiên sở hữu hệ thống phòng chiếu phim đạt chuẩn Hollywood tại TP. Thái Nguyên.
                    </div>
                    <div class="info-text">
                        Rạp được trang bị hệ thống máy chiếu, phòng chiếu hiện đại với 100% nhập khẩu từ nước ngoài, với 4 phòng chiếu tương được 535 ghế ngồi. Hệ thống âm thanh Dolby 7.1 và hệ thống cách âm chuẩn quốc tế đảm bảo chất lượng âm thanh sống động nhất cho từng thước phim bom tấn.
                    </div>
                    <div class="info-text">
                        Mức giá xem phim tại Beta Cinemas Thái Nguyên rất cạnh tranh: giá vé 2D chỉ từ 40.000 VNĐ và giá vé 3D chỉ từ 60.000 VNĐ. Không chỉ có vậy, rạp còn có nhiều chương trình khuyến mại, ưu đãi hàng tuần như đồng giá vé 40.000 vào các ngày Thứ 3 vui vẻ, Thứ 4 Beta's Day, đồng giá vé cho Học sinh sinh viên, người cao tuổi, trẻ em.....
                    </div>
                </div>
            </div>
            <div class="col-lg-6 pt-5 list-film">
				<h4 class="text-center text-uppercase mb-3 film-text">Phim đang hot</h4>
				<div class="row">
					<RecentMovie v-for="(item, index) in recentMovies" :key="index" :data="item"></RecentMovie>
				</div>
			</div>
        </div>
    </div>
</template>
<script>
import RecentMovie from '@/components/pages/news-detail/RecentMovie.vue';
import { mapActions } from 'vuex';
export default {
    components: { RecentMovie },
    data() {
        return {
            
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
                // Fake data để cắt giao diện
				current.recentMovies = [
                    {
                        title: `One Piece Film: Red`,
                        image: "https://files.betacorp.vn/files/media%2fimages%2f2022%2f11%2f21%2funtitled-1-090609-211122-53.jpg"
                    },
                    {
                        title: `Hạnh Phúc Máu`,
                        image: "https://files.betacorp.vn/files/media%2fimages%2f2022%2f11%2f23%2fhpmposter-w400xh633-1-131414-231122-18.jpg"
                    },
                    {
                        title: `Thực Đơn Bí Ẩn`,
                        image: "https://files.betacorp.vn/files/media%2fimages%2f2022%2f11%2f09%2f400x633-101712-091122-58.jpg"
                    },
                    {
                        title: `Chiến Binh Báo Đen 2: Wakanda Bất Diệt`,
                        image: "https://files.betacorp.vn/files/media%2fimages%2f2022%2f10%2f13%2fwakanda-124059-131022-46.jpg"
                    }
				]
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
<style lang="scss" scoped>
.row {
    display: flex;
}
.info-cinema, .list-film {
    width: 50%;
    padding: 0 20px;
}
.info-cinema {
    padding-top: 3rem;
    .header-info {
        font-family: "Open Sans", sans-serif;
        line-height: 1.5em;
        font-size: 27px;
        font-weight: 300;
        margin: 0 0 10px;
    }
    .background-cinema {
        background-image: url('../../../assets/image/image-cinema.png');
        height: 303px;
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .info-content {
        div {
            margin: 0 0 10px;
        }
    }
    .info-text {
        font-family: 'Playfair Display', serif;
        font-size: 15px;
        color: #333333;
        line-height: 1.42857143;
        text-align: justify;
    }
} 
.film-text {
    font-weight: 600;
    font-size: 26px;
    font-family: "Open Sans", sans-serif;
    color: inherit;
}
</style>
