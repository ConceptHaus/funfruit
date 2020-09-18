<template lang="pug">
section
    #slider
        .swiper-container.slideshow
            .swiper-wrapper
                .swiper-slide.slide(:style="{ 'background-image': 'url(' + require('../assets/images/slider-1.jpg') + ')' }")
                    .slide-text.text-left.absolute.first-text
                        span.slide-title LOS PRODUCTOS MÁS RICOS Y SALUDABLES SON FUNFRUIT
                        svg(width="233" height="63" viewBox="0 0 233 63" fill="none" xmlns="http://www.w3.org/2000/svg")
                            path(id="shape" d='M12.3676 35.7095C12.0209 35.4779 11.6083 35.2106 11.2781 34.8899C10.816 34.4444 10.4693 33.9099 10.5354 33.1972C10.6344 31.9499 11.9219 31.3976 12.9453 31.4154C15.9494 31.5045 19.2837 32.7695 22.1888 33.5001C25.6882 34.391 28.7088 35.2284 32.2412 35.9233C46.8492 38.8098 61.7709 39.9858 76.61 40.2709C97.474 40.0571 118.239 36.6004 138.492 31.2372C148.66 28.5467 158.712 25.3395 168.649 21.8116C178.124 18.4618 187.202 14.3281 196.99 11.9048C202.735 10.4794 209.073 9.2856 214.636 12.0652C219.571 14.5419 223.368 20.5109 221.865 26.5155C221.123 29.4554 219.191 31.647 216.782 33.3397C214.718 34.783 212.457 35.8343 210.162 36.7786C201.629 40.3422 192.567 42.4981 183.604 44.3334C164.968 48.1464 146.036 50.2133 127.136 51.6743C104.852 53.4027 82.998 52.4583 60.9126 48.9482C44.4228 46.2933 27.8175 42.5516 12.3676 35.7095Z' fill='#EFC432')
                        button#button-cta.block.my-5.bg-ui-blue.text-xl.text-white.font-bold.py-3.px-16.rounded Descubrir productos
                .swiper-slide.slide(:style="{ 'background-image': 'url(' + require('../assets/images/slider-2.jpg') + ')' }")
                    .slide-text.text-right.absolute.right-0.mr-16.second-text
                        span.slide-title AHORA EN
                        img.amazon-logo.object-fit(src="@/assets/images/amazon-white.svg", alt="alt")
                        button#button-cta.btn-amazon.block.my-10.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
            .swiper-button-prev
            .swiper-button-next
    .flex.bg-ui-green.justify-center.p-8
        p.text-xl.text-ui-light.text-center Frescura y calidad garantizadas. #[b ¡Compra ya!]

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
    created(){
        
    },
    mounted(){
        this.slider()
        this.effects()
    },
    updated(){
        this.slider()
    },
    methods:{
        effects(){
            var tl = gsap.timeline(), splitText = new SplitText(".swiper-slide-active .slide-title",{type:"words,chars"}), chars=splitText.chars, words=splitText.words

            gsap.set(".swiper-slide-active .slide-text .slide-title",{perspective:400})
            tl.from(chars, {duration: 1, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.02}, "+=0");
            tl.fromTo(".swiper-slide-active .slide-text #shape",{duration:0.5, scale:0, ease:'Circ.easeOut'},{scale:1,y:-10},"-=0.5")
            tl.from(".swiper-slide-active .slide-text .amazon-logo", 0.3, {x:1000, ease:'Power2.easeOut'},"-=0.2")
            tl.fromTo(".swiper-slide-active .slide-text #button-cta", 0.4,{scale:0},{scale:1, ease:"Back.easeOut"},"+=0.3")
            
        },
        slider(){
            var swiper = new Swiper('.slideshow',{
                effect:'slide',
                autoplay:true,
                loop:true,
                speed:400,
                delay:10000,
                preloadImages:true,
                updateOnImagesReady:true,
                navigation:{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev'
                }
            })
            swiper.on('init', () => this.effects())
            swiper.on('slideNextTransitionStart', () => this.effects())
            swiper.init()
        }
    }
}
</script>
<style lang="scss" scoped>
    #slider {
        width: 100%;
        height: 80vh;
    }

    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-button-prev, .swiper-button-next{
        color: #FFF !important;
    }
    .slide {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        &-text {
            &.first-text{
                left: 10%;
            }
            &.second-text{
                right: 8%;
            }
            margin-top: 8%;
            max-width: 550px;
            z-index: 2;
            svg{
                margin-left: 35%;
            }
        }
        &-title{
            white-space: normal;
            font-size: 3rem;
            word-break: break-word;
            font-family: 'Funfruit', sans-serif;
            color: #FFF;
            line-height: 1.2;
            span {
                white-space: pre;
                display: inline-block;
                opacity: 0;
            }
        }
    }
</style>