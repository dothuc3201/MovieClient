<template>
    <div class="container">
        <div class="row">
            <div class="fare-header">
                GIÁ VÉ RẠP BETA THÁI NGUYÊN
            </div>
            <div class="fare-content">
                <div class="background-fare"></div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
     data() {
        return {
            
        }
    },
    async created() {
        await this.loadData();
    },
    methods: {
        async loadData() {
            
        },
    },
    computed: {
    }

}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;422&display=swap');
.fare-header {
    font-family: 'Oswald', sans-serif;
    line-height: 1.5em;
    font-size: 26px;
    font-weight: 400;
    margin: 30px 0 15px 0;
}
.fare-content {
    margin-bottom: 30px;
}
.background-fare {
    background-image: url('../../../assets/image/gia-ve.jpg');
    height: 1100px;
    background-size: 100%;
    background-repeat: no-repeat;
}
</style>
