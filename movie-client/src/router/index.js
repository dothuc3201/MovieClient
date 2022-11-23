import Home from "@/components/pages/home/HomePage.vue";
import Film from "@/components/pages/film/FilmPage.vue";
import Showtime from "@/components/pages/showtimes/ShowtimePage.vue";
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
]

const router =  createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;