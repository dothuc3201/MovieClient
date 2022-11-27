<template>
	<div class="container mt-4">
		<div class="row">
			<div class="col-lg-6">
				<div id="content">
					<h4 class="text-uppercase">CHỤP BĂNG MŨ RƠM - TẶNG NGAY BẮP THƠM</h4>
					<img
						alt=""
						src="https://files.betacorp.vn/files/ecm/2022/11/17/check-in-bang-mu-rom-bap-thom-ngon-tang-lien-545-x-415-175500-171122-64.png"
						style="width: 100%; height: 100%"
					/>

					<p>&nbsp;</p>

					<p class="fw-semibold">Từ 18 - 25/11/2022, khách hàng được tham gia chương trình sau “CHỤP BĂNG MŨ RƠM - TẶNG NGAY BẮP THƠM”, miễn phí BẮP cho khách hàng post hình check in kèm hashtag #Betacinemas.</p>
					
					<p>&nbsp;</p>

					<h5>Điều khoản và điều kiện áp dụng:</h5>
					<ul>
						<li>
							<p class="fw-semibold">Áp dụng cho toàn bộ khách hàng của Beta Cinemas khi mua vé xem phim và ÁP DỤNG TRƯỚC 18H:</p>
						</li>
					</ul>
					<p class="fw-semibold">Lưu ý: Số lượng nhận bắp dựa vào số lượng vé;</p>
					<p class="fw-semibold">VD: Số lượng bắp nhận phụ thuộc vào số lượng bài đăng</p>

					<ul>
						<li>
							<p class="fw-semibold">Áp dụng cả với khách hàng mua vé trực tiếp tại quầy và khách hàng đã mua vé online tới quầy lấy vé.</p>
						</li>
						<li>
							<p class="fw-semibold">KHÔNG áp dụng đồng thời cùng các chương trình khuyến mãi khác của quầy Concession.</p>
						</li>
						<li>
							<p class="fw-semibold">KHÔNG áp dụng tại rạp Phú Mỹ và Hồ Tràm</p>
						</li>
						<li>
							<p class="fw-semibold">Áp dụng cho các giao dịch trong thời gian khuyến mãi, kể cả các giao dịch mua vé suất chiếu những ngày sau.</p>
						</li>
					</ul>
				</div>

				<div id="related_news">
					<h4 class="text-uppercase mt-5 mb-3">Tin tức khác</h4>
					<div class="row">
						<NewsItem v-for="(item, index) in relatedNewsList" :key="index" :data="item"></NewsItem>
					</div>
				</div>
			</div>
			<div class="col-lg-6 pt-5">
				<h4 class="text-center text-uppercase mb-3">Phim đang hot</h4>
				<div class="row">
					<RecentMovie v-for="(item, index) in recentMovies" :key="index" :data="item"></RecentMovie>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import NewsItem from '@/components/pages/news-detail/NewsItem.vue';
import RecentMovie from '@/components/pages/news-detail/RecentMovie.vue';
import { mapActions } from 'vuex';
export default {
    components: { NewsItem, RecentMovie },
	data() {
		return {
			relatedNewsList: []
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
                current.relatedNewsList = [
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
                    }
                ];
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
</style>