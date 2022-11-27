import Home from "@/components/pages/home/HomePage.vue";
import Film from "@/components/pages/film/FilmPage.vue";
import News from "@/components/pages/news/NewsPage.vue";
import Member from "@/components/pages/member/MemberPage.vue";
import NewsDetail from "@/components/pages/news-detail/NewsDetailPage.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path:"/",
        name:'home',
        component: Home
    },
    {
        path:"/films",
        name:'films',
        component: Film
    },
    {
        path:"/news",
        name:'news',
        component: News
    },
    {
        path:"/news/:id",
        name:'news-detail',
        component: NewsDetail
    },
    {
        path:"/member",
        name:'member',
        component: Member
    }
]

const router =  createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;