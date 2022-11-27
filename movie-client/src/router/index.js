import Home from "@/components/pages/home/HomePage.vue";
import Film from "@/components/pages/film/FilmPage.vue";
import FilmDetail from "@/components/pages/film/FilmDetail.vue";
import Showtime from "@/components/pages/showtimes/ShowtimePage.vue";
import Book from "@/components/pages/book/BookPage.vue";
import BookSuccess from "@/components/pages/book/BookSuccess.vue";
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
        path:"/showtimes",
        name:'showtimes',
        component: Showtime
    },

    {
        path:"/chi-tiet-film/:id",
        name:'chi-tiet-film',
        component: FilmDetail
    },

    {
        path:"/dat-ve",
        name:'dat-ve',
        component: Book
    },
    {
        path:"/dat-ve-thanh-cong",
        name:'dat-ve-thanh-cong',
        component: BookSuccess
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