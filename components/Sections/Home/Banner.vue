<template>
    <section id="banner"  class="section_banner ">
        <div class="banner__wrapper relative  min-h-banner flex flex-col justify-center ">
            <div class="banner__content relative z-10 text-center">
                <div class="container-medium">
                    <h1 class="md:text-h1 text-h2 md:font-bold text-white reveal">The best products start with Figma</h1>
                    <h4 class="text-3xl text-white mt-10 reveal">Most calendars are designed for teams. Slate is designed for freelancers</h4>
                    <div class="banner__button -mt-60">
                        <NuxtLink to="#" class="btn btn-primary reveal">Try For Free</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="banner__bg absolute z-0 top-0 left-0 h-full w-full">
                <img src="images/bg-banner.png" class="object-cover	h-full w-full" alt="best products start with Figma"/>
            </div>
        </div>
    </section>
</template>
<script>
    export default{
        name:"Banner"
    }
</script>