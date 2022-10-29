<template>
    <div class="container-fluid p-0 min-vh-100 font-poppins">
        <NavbarTop/>
        <div class="p-2 pb-5 mb-5">
            <InputSearch class="mb-4" placeHolder="Search event, merchant..." />
            <div class="d-flex justify-content-between align-items-end mb-2">
                <div>
                    <b>Popullar Event</b>
                    <div class="d-flex align-items-center mt-1">
                        <span class="fs-7">Filter</span>
                        <select class="ms-2 form-control px-2 py-1 fs-7" style="width: 6rem;">
                            <option value="">Price up</option>
                            <option value="">Price up</option>
                        </select>
                    </div>
                </div>
                <span class="fs-7 text-primary">See more</span>
            </div>

            <div class="w-100" style="overflow-x: scroll; ">
                <div class="my-carousel">
                    <router-link :to="{ name: 'detail-event' }" class="link-style-none">
                        <BaseCard></BaseCard>
                    </router-link>
                    <router-link :to="{ name: 'detail-event' }" class="link-style-none">
                        <BaseCard></BaseCard>
                    </router-link>
                    <router-link :to="{ name: 'detail-event' }" class="link-style-none">
                        <BaseCard></BaseCard>
                    </router-link>
                </div>
            </div>

            <div class="mt-4 mb-2">
                <b>Ongoing Events</b>
            </div>

            <div class="w-100" style="overflow-x: scroll;">
                <div class="my-carousel">
                    <BaseCard2></BaseCard2>
                    <BaseCard2></BaseCard2>
                    <BaseCard2></BaseCard2>
                </div>
            </div>

        </div>
    </div>
    <Navbar/>
</template>

<script setup>
import BaseCard from '../components/BaseCard.vue';
import BaseCard2 from '../components/BaseCard2.vue';
import InputSearch from '../components/InputSearch.vue';
import Navbar from '../components/Navbar.vue';
import NavbarTop from '../components/NavbarTop.vue';



</script>