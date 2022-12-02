import Home from "@/components/pages/home/HomePage.vue";
import Film from "@/components/pages/film/FilmPage.vue";
import FilmDetail from "@/components/pages/film/FilmDetail.vue";
import Showtime from "@/components/pages/showtimes/ShowtimePage.vue";
import Book from "@/components/pages/book/BookPage.vue";
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
    }
]

const router =  createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;