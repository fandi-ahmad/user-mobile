<template>
    <div class="card rounded-0 border border-0" style="width: 12rem;">
        <img src="../assets/image/img-2.jpg" class="card-img-top rounded-0 my-shadow" alt="" style="height: 16rem;">
        <div class="card-body p-2">
            <p class="card-text fs-8 mb-2">Lorem ipsum dolor sit</p>
            <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex flex-row align-items-center">
                    <div class="img-icon sz-1 bg-primary" :style="{ backgroundImage: `url('${Image}')` }"></div>
                    <span class="fs-9 ms-1">Lorem ipsum dolor sit</span>
                </div>
                <span class="fs-10">29 Oktober 2022</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Image from '../assets/image/img-2.jpg'
</script>