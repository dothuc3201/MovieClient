<template>
    <NewsPage />
</template>

<script>
import { getTokenDataApi } from '@/js/api/fetchAPI';
import NewsPage from '../../news/NewsPage.vue';
import { mapState } from 'vuex';

export default {
    components: { NewsPage },

    async created() {
        await this.loadProfile();
    },

    methods:{
        async loadProfile(){
            try {
                const res = await getTokenDataApi('user/profile', this.token);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
    },

    computed:{
        ...mapState({
            token: state => state.token
        })
    }
}
</script>