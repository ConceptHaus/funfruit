<template lang="pug">
section
    #slider
        .swiper-container.slideshow
            .swiper-wrapper
                .swiper-slide.slide
                    .slide-image(:style="{ 'background-image': 'url(' + require('../assets/images/slider-1.jpg') + ')' }")
                    span.slide-title LOS PRODUCTOS MÁS RICOS Y SALUDABLES SON FUNFRUIT
                .swiper-slide.slide
                    .slide-image(:style="{ 'background-image': 'url(' + require('../assets/images/slider-2.jpg') + ')' }")
                    span.slide-title AHORA EN AMAZON
    .flex.bg-ui-green.justify-center.p-8
        p.text-xl.text-ui-light Frescura y calidad garantizadas. #[b ¡Compra ya!]

</template>
<script>
import Swiper from 'swiper'
import { gsap } from 'gsap'
import { SplitText } from "../lib/SplitText.js";
gsap.registerPlugin(SplitText)

import 'swiper/css/swiper.min.css'
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.slider()
    },
    updated(){
        this.slider()
    },
    methods:{
        textEffect(){
            var tl = gsap.timeline(), splitText = new SplitText(".swiper-slide-active .slide-title",{type:"words,chars"}), chars=splitText.chars

            gsap.set(".swiper-slide-active .slide-title",{perspective:400})
            tl.from(chars, {duration: 1, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.02}, "+=0");
            
        },
        slider(){
            var swiper = new Swiper('.slideshow',{
                effect:'fade',
                autoplay:true,
                loop:true,
                speed:1200,
                preloadImages:true,
                updateOnImagesReady:true,
            })
            swiper.on('slideNextTransitionStart', () => this.textEffect())
        }
    }
}
</script>
<style lang="scss" scoped>
    #slider {
        width: 100%;
        height: 70vh;
    }

    .swiper-container {
        width: 100%;
        height: 100%;
    }

    .slide {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        text-align: center;
        font-size: 18px;
        background: #fff;
        overflow: hidden;

        &-image {
            position: absolute;
            top: -200px;
            left: -200px;
            width: calc(100% + 400px);
            height: calc(100% + 400px);
            background-position: center;
            background-size: contain;
        }

        &-title {
            margin-left: 10%;
            font-size: 3rem;
            line-height: 1.2;
            max-width: 40%;
            white-space: normal;
            word-break: break-word;
            color: #FFF;
            z-index: 10;
            font-family: 'Funfruit', sans-serif;
            text-transform: uppercase;
            font-weight: normal;
            span {
                white-space: pre;
                display: inline-block;
                opacity: 0;
            }
        }
    }
</style>