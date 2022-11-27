<template>
    <div class="container">
        <div class="row">
            <h3 class="text-uppercase">{{ label }}</h3>
            <NewsItem v-for="(item, index) in data" :key="index" :index="index" :data="item"></NewsItem>
        </div>
    </div>
</template>
<script>
import NewsItem from '@/components/pages/news/NewsItem.vue';
export default {
    components: { NewsItem },
    data() {
        return {        
        }
    },
    props: ["data", "label"],
    created(){
        console.log("data", this.data);
        console.log("label", this.label);
    }

}
</script>
<style lang="scss" scoped>
.container {
    margin-top: 16px;
    max-width: 1150px;
    h3 {
        line-height: 2;
    }
}
</style>
