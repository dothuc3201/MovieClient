<template>
    <div>
        <div class="block text-center slider" m="t-4">
            <el-carousel trigger="click" height="400px" interval="5000">
            <el-carousel-item key="1">
                <!-- <img :src="slider1" alt="slider"> -->
                <div class="background background-item1"></div>
            </el-carousel-item>
            <el-carousel-item key="2">
                <div class="background background-item2"></div>
            </el-carousel-item>
            <el-carousel-item key="3">
                <div class="background background-item3"></div>
            </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang='scss'>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item {
    img {
        height: 100%;
    }
    .background {
        height: 100%;
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .background-item1 {
        background-image: url('../../../assets/image/slider1.png');
    }
    .background-item2 {
        background-image: url('../../../assets/image/slider2.png');
    }
    .background-item3 {
        background-image: url('../../../assets/image/slider3.jpg');
    }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
