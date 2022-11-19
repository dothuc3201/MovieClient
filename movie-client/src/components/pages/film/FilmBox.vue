<template>
    <div class="row">
        <div class=".col-lg-12 col-md-12 col-sm-6 col-6">
            <div class="product-item no-padding">
                <div class="pi-img-wrapper">
                    <img class="img-responsive border-radius-20" alt="" :src="data.avatarUrl">
                    <!-- <span style="position: absolute; top: 10px; left: 10px;">
                            <img src="/Assets/Common/icons/films/c-18.png" class="img-responsive">
                        </span> -->
                    <div class="border-radius-20">
                        <a href="#product-pop-up" class="fancybox-fast-view"><i class="fa fa-play-circle"></i></a>
                    </div>
                </div>

                <div class="sticker sticker-new"></div>

            </div>
        </div>
        <div class=".col-lg-12 col-md-12 col-sm-6 col-6">
            <div class="film-info film-xs-info">
                <h3 class="text-center text-sm-left text-xs-left bold font-sm-18 font-xs-14"
                    style="max-height: 50px; min-height: 50px;">
                    <a href="/chi-tiet-phim.htm?gf=6eb12b5d-5edf-4cbf-959d-8cc22fe6c0c8">{{ data.name }}</a>
                </h3>
                <ul class="list-unstyled font-sm-14 font-xs-14">
                    <li style="max-height: 50px;"><span class="bold">
                            Thể loại: </span>{{ data.genre }}</li>
                    <li>
                        <span class="bold">Thời lượng: </span>{{ data.durationMin }} phút
                    </li>
                </ul>
            </div>
            <div class="text-center padding-bottom-30" style="min-height: 85px;">
                <a style="display: block;" href="#showtimes-pop-up" class="btn btn-primary">
                    <span><i class="fa fa-ticket mr3"></i></span>
                    MUA VÉ</a>
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
    props: ["data"],
    created(){
        console.log(this.data);
    }

}
</script>

<style>
.img-responsive{
    display: block;
    max-width: 100%;
    height: auto;
}
</style>
