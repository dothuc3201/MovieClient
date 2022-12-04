<template>
    <div class="row">
        <div class=".col-lg-12 col-md-12 col-sm-6 col-6">
            <div class="product-item no-padding">
                <div class="pi-img-wrapper">
                    <img class="img-responsive border-radius-20 m-auto" alt="" :src="data.avatarUrl">
                    <!-- <span style="position: absolute; top: 10px; left: 10px;">
                            <img src="/Assets/Common/icons/films/c-18.png" class="img-responsive">
                        </span> -->
                    <div class="border-radius-20">
                        <a class="fancybox-fast-view" @click="openTrailerPopup"><i class="fa fa-play-circle"></i></a>
                    </div>
                </div>

                <div class="sticker sticker-new"></div>

            </div>
        </div>
        <div class=".col-lg-12 col-md-12 col-sm-6 col-6 film-content">
            <div class="film-info film-xs-info">
                <h3 class="d-flex align-items-center text-center text-sm-left text-xs-left bold font-sm-18 font-xs-14"
                    style="max-height: 50px; min-height: 50px;"
                    >
                    <router-link class="film-name" :to="'/chi-tiet-film/' + data._id">{{ data.name }}</router-link>
                </h3>
                <ul class="list-unstyled font-sm-14 font-xs-14">
                    <li style="max-height: 50px;"><span class="bold film-text" style="font-weight: 700">
                            Thể loại: </span>{{ data.genre }}</li>
                    <li>
                        <span class="bold film-text" style="font-weight: 700">Thời lượng: </span>{{ data.durationMin }} phút
                    </li>
                </ul>
            </div>
            <div class="text-center padding-bottom-30" style="min-height: 85px;" v-if="isAdmin">
                <a style="display: block;" class="btn btn-primary"                 
                @click="openShowtimesPopup">
                    <span><i class="fa fa-ticket mr3"></i></span>
                    MUA VÉ</a>
            </div>
        </div>
    </div>

</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {        
        }
    },
    props: ["data"],
    created(){
        
    },
    methods:{
        /**
         * mở popup lịch chiếu của phim
         */
        openShowtimesPopup(){
            this.changeFilmId(this.data._id);
            this.$emit("openShowtimesPopup" , this.data);
        },

        /**
         * mở trailer của phim
         */
        openTrailerPopup(){
            this.changeFilmId(this.data._id);
            this.$emit("openTrailerPopup");
        },
       

        //gán filmId
        ...mapActions(['changeFilmId'])
    },
    computed: {
        ...mapState({
            filmId: state => state.filmId,
            isAdmin: state => state.isAdmin
        })
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;422&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
.img-responsive {
    border-radius: 10px;
}
.film-name {
    font-family: 'Oswald', sans-serif;
    line-height: 1.5em;
    font-weight: 700;
    color: #337ab7;
    font-size: 18px;
}
.film-content {
    padding: 0 12px;
}
.film-text {
    font-family: 'Source Sans Pro', sans-serif;
}
</style>
