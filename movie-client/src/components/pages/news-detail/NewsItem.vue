<template>
	<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
		<router-link to="/news/1">
			<div class="image">
				<img :src="data.image" />
			</div>
		</router-link>
		<h6 class="py-2 text-center" style="height: 100px; overflow: hidden">
			<router-link to="/news/1">{{ data.title }}</router-link>
		</h6>
	</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["data"],
  created() {
    console.log("data", this.data);
  },
};
</script>

<style lang="scss" scoped>
.image {
	height: 107.5px; 
	border-radius: 10px !important;
	overflow: hidden;
	img {
		height: 100%;
	}
}

h6 a {
	color: #000;
	font-size: 0.9rem;
	&:hover {
		text-decoration: underline;
	}
}
</style>
