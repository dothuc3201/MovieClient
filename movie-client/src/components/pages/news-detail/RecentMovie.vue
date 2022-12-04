<template>
	<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pb-4">
		<router-link to="/">
			<img class="image" :src="data.image" />
		</router-link>
		<p class="text-center fw-semibold mt-3" style="max-height: 70px">
			<router-link to="/">{{ data.title }}</router-link>
		</p>
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
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;422&display=swap');
img {
	width: 100%;
	border-radius: 20px !important;
}

a {
	font-family: 'Oswald', sans-serif;
	color: #337ab7;
	&:hover {
		text-decoration: underline;
	}
}
</style>
