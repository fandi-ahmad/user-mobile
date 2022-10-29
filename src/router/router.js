import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import EventList from '../views/EventList.vue'
import Order from '../views/Order.vue'
import Profile from '../views/Profile.vue'
import DetailEvent from '../views/DetailEvent.vue'

const routes = [
    {
        path: '/',
        name : 'home',
        component: Home
    },
    {
        path: '/event-list',
        name: 'event-list',
        component: EventList
    },
    {
        path: '/order',
        name: 'order',
        component: Order
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/detail-event',
        name: 'detail-event',
        component: DetailEvent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;