<template>
    <nav class="navbar navbar-light bg-light fixed-bottom w-100 d-flex justify-content-around">
        <router-link :to="{name : 'home'}" class="d-flex flex-column align-items-center nav-menu">
            <i class="fa-solid fa-house"></i>
            <span class="fs-7">Home</span>
        </router-link>
        <router-link :to="{name : 'event-list'}" class="d-flex flex-column align-items-center nav-menu">
            <i class="fa-solid fa-calendar-check"></i>
            <span class="fs-7">Event List</span>
        </router-link>
        <router-link :to="{name : 'order'}" class="d-flex flex-column align-items-center nav-menu">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="fs-7">Order</span>
        </router-link>
        <router-link :to="{name: 'profile'}" class="d-flex flex-column align-items-center nav-menu">
            <i class="fa-solid fa-user"></i>
            <span class="fs-7">Profile</span>
        </router-link>
    </nav>
</template>