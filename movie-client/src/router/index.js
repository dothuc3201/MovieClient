import Home from "@/components/pages/home/HomePage.vue";
import Film from "@/components/pages/film/FilmPage.vue";
import FilmDetail from "@/components/pages/film/FilmDetail.vue";
import Showtime from "@/components/pages/showtimes/ShowtimePage.vue";
import Book from "@/components/pages/book/BookPage.vue";
import BookSuccess from "@/components/pages/book/BookSuccess.vue";
import News from "@/components/pages/news/NewsPage.vue";
import Member from "@/components/pages/member/MemberPage.vue";
import NewsDetail from "@/components/pages/news-detail/NewsDetailPage.vue";
import Login from "@/components/pages/login/LoginPage.vue";
import InformationCinema from "@/components/pages/cinema/InformationCinema.vue";
import InfoFare from "@/components/pages/fare/InfoFare.vue";
import Admin from "@/components/pages/admin/home/AdminHome.vue";
import AdminArea from "@/components/pages/admin/area/AdminArea.vue";
import AdminCinema from "@/components/pages/admin/cinema/AdminCinema.vue";
import AdminFilm from "@/components/pages/admin/film/AdminFilm.vue";
import AdminShowtime from "@/components/pages/admin/showtime/AdminShowtime.vue";
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
    },
    {
        path:"/login",
        name:'login',
        component: Login
    },
    {
        path:"/login-admin",
        name:'login-admin',
        component: Login
    },
    {
        path:"/thong-tin-rap",
        name:'infoCinema',
        component: InformationCinema
    },
    {
        path:"/gia-ve",
        name:'infoFare',
        component: InfoFare
    },
    {
        path:"/admin",
        name:'admin',
        component: Admin
    },
    {
        path:"/admin-area",
        name:'admin-area',
        component: AdminArea
    },
    {
        path:"/admin-cinema",
        name:'admin-cinema',
        component: AdminCinema
    },
    {
        path:"/admin-film",
        name:'admin-film',
        component: AdminFilm
    },
    {
        path:"/admin-showtime",
        name:'admin-showtime',
        component: AdminShowtime
    },
]

const router =  createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;