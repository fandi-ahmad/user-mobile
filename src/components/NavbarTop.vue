<template>
    <div class="bg-light p-2">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <div style="color: var(--bs-indigo);">
                    <i class="fa-solid fa-torii-gate"></i>
                    <span class="h5 ms-2">SelfGATE</span>
                </div>
                <b>Sofyan Saputra</b>
            </div>

            <div class="btn rounded-pill bg-primary text-white sz-2 img-icon" :style="{ backgroundImage: `url('${Image}')` }">
                <!-- <i class="fa-solid fa-user"></i> -->
            </div>
        </div>
    </div>
</template>

<script setup>
    import Image from '../assets/image/img-2.jpg'
</script>