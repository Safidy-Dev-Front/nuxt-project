<template>
    <div>
        <PartsHeader />
        <transition appear @before-enter="beforEnter" @enter="enter">
            <main ref="main">
                <NuxtPage />
            </main>
        </transition>
        <PartsFooter />
    </div>
</template>
<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Draggable } from 'gsap/Draggable';
import { onMounted, onUnmounted, ref } from 'vue';
gsap.registerPlugin(ScrollTrigger)
const main = ref();
let ctx;
onMounted(() => {
    ctx = gsap.context((self) => {
    const boxes = self.selector('.reveal');
    boxes.forEach((box) => {
      gsap.to(box, {
        y: 0,
        opacity:1,
        scrollTrigger: {
          trigger: box,
          start: 'top bottom',
          end: 'top 20%',
          scrub: false,
        },
      });
    });
  }, main.value); // <- Scope!
})

onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
});
</script>