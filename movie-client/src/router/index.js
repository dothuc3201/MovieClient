import Home from "@/components/pages/home/HomePage.vue";
import Film from "@/components/pages/film/FilmPage.vue";
import News from "@/components/pages/news/NewsPage.vue";
import Member from "@/components/pages/member/MemberPage.vue";
import NewsDetail from "@/components/pages/news-detail/NewsDetailPage.vue";
import Showtime from "@/components/pages/showtimes/ShowtimePage.vue";
import Login from "@/components/pages/login/LoginPage.vue";
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
    },
    {
        path:"/showtimes",
        name:'showtimes',
        component: Showtime
    },
    {
        path:"/login",
        name:'login',
        component: Login
    },
]

const router =  createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;