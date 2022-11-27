<template>
	<div
		class="mb-5 news-box"
		:class="{ 'col-md-6 large': index === 0, 'col-md-3': index !== 0 }"
	>
		<router-link to="/news/1">
			<div class="image">
				<img :src="data.image" />
			</div>
		</router-link>
		<div class="title">
			<p class="py-3 px-2 text-uppercase">
				<router-link to="/news/1">{{ data.title }}</router-link>
			</p>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["data", "index"],
  created() {
    console.log("data", this.data);
    console.log("index", this.index);
  },
};
</script>

<style lang="scss" scoped>
.news-box {
	&:nth-child(1),
	&:nth-child(2),
	&:nth-child(3) {
		height: 415px;
	}

	.image {
		height: 208px;
		border-radius: 10px 10px 0px 0px !important;
		overflow: hidden;
		img {
			height: 100%;
		}
	}

	.title a {
		color: #000;
		font-size: 0.9rem;
		&:hover {
			text-decoration: underline;
		}
	}

	&.large {
		position: relative;
		.image {
			height: 100%;
		border-radius: 10px !important;
		}
		.title {
			position: absolute; 
			bottom: 0px;
			left: 12px;
			background: rgba(254, 121, 0, 0.6) none repeat scroll 0 0;
			border-radius: 0px 0px 10px 10px !important;
			a {
				color: #fff;
				font-size: 1.25rem;
			}
		}
	}
}
</style>
