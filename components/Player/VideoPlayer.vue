<template>
    <div class="video-player__sizing relative shadow-v-player rounded-v-player">
        <video class="w-full rounded-v-player">
            <source type="video/mp4" src="videos/pexels-fauxels-3254066-3840x2160-25fps.mp4" />
        </video>
        <img class="video-player__screen rounded-v-player absolute left-0 top-0 w-full h-full object-cover"
            src="images/screen-videos.png" />
        <div class="video-player__icon-play ">
            <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.402344 0.593994L39.4434 24.0186L0.402344 47.4432V0.593994Z" fill="white" />
            </svg>
        </div>
    </div>
</template>
<script>

</script>