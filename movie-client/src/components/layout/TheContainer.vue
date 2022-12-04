<template>
    <div class="content" style="min-height: 200px;" v-if="!isAdmin">
        <router-view></router-view>
    </div>
    <div class="content-admin d-flex" v-if="isAdmin">
        <div id="menu" class="h-100" style="width: 200px;">
            <router-link to="/admin" class="menu-item">
                <div class="menu-icon">
                    <div class="icon-dashboard icon-24 icon-sprite"></div>
                </div>
                <div class="text">Tổng quan</div>
            </router-link>
            <router-link to="/admin-area" class="menu-item">
                <div class="menu-icon">
                    <div class="icon-dashboard icon-24 icon-sprite"></div>
                </div>
                <div class="text">Khu vực</div>
            </router-link>
            <router-link to="/admin-cinema" class="menu-item">
                <div class="menu-icon">
                    <div class="icon-dashboard icon-24 icon-sprite"></div>
                </div>
                <div class="text">Rạp chiếu</div>
            </router-link>
            <router-link to="/admin-film" class="menu-item">
                <div class="menu-icon">
                    <div class="icon-dashboard icon-24 icon-sprite"></div>
                </div>
                <div class="text">Phim</div>
            </router-link>
            <router-link to="/admin-showtime" class="menu-item">
                <div class="menu-icon">
                    <div class="icon-dashboard icon-24 icon-sprite"></div>
                </div>
                <div class="text">Lịch chiếu phim</div>
            </router-link>
        </div>
        <div id="container-admin" class="flex-fill h-100 p-3">
            <router-view></router-view>
        </div>
    </div>
    <BaseLoading></BaseLoading>
</template>
<script >
import { mapState } from 'vuex';
import BaseLoading from '../base/loading/BaseLoading.vue';
export default {
    components: { BaseLoading },
    computed: {
        ...mapState({
            isAdmin: state => state.isAdmin
        })
    },

}
</script>

<style scoped>

.content-admin {
    height: calc(100vh - 90px);
}

#menu {
    background-color: #38393d;
}

.menu-item{
    display: flex;
    height: 44px;
    align-items: center;
    text-decoration: none;
}
.menu-item:hover{
    background-color: #5b5b5c;
}
.menu-icon{
    display: flex;
    align-items: center;
    color: #fff;
    margin-left: 16px;
    margin-right: 10px;
}

.router-link-active {
    background-color: #5b5b5c;
    font-weight: 600;
}

#menu .text{
    color: #fff;
}

#container-admin {
    overflow: auto;
}
</style>
