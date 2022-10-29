<template>
    <div class="card rounded-0" style="width: 12rem;">
        <img src="../assets/image/img-1.jpg" class="card-img-top rounded-0" alt="" style="height: 8rem;">
        <div class="card-body p-2">
            <div class="d-flex align-items-center justify-content-between">
                <div>
                    <p class="card-text fs-8 mb-0 pb-0 fw-bold">Lorem ipsum dolor sit</p>
                    <span class="fs-9 mt-0 pt-0 mb-0 pb-0">20 Oktober - 30 Oktober 2022</span>
                </div>
                <div class="d-flex flex-row align-items-center">
                    <div class="img-icon sz-1 bg-primary" :style="{ backgroundImage: `url('${Image}')` }"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Image from '../assets/image/img-2.jpg'
</script>