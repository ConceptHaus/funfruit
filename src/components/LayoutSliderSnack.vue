<template lang="pug">
section.snack
    .container.my-20
        .flex.justify-center
            h2(class="sm_w-1/2").w-full.snack-title.text-center.text-3xl.text-ui-navy UN DELICIOSO #[span.text-ui-secondary SNACK] EN CUALQUIER MOMENTO DEL DÍA
        .flex.justify-center.my-5
            p.text-ui-typo Elige el que más se te #[b antoje]
    .swiper-container.slidersnack
        .swiper-wrapper
            .swiper-slide.slide
                g-link(to="/nut-house/mezcla-de-higo-y-nueces")
                    .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer.bg-ui-blue.sm_bg-transparent
                        img.mx-auto(src="@/assets/images/products/snack-1.png", alt="alt")
                        h2.snack__card--title(class="w-2/3").mx-auto.text-center.font-bold.text-xl.text-white MEZCLA DE HIGOS Y NUECES
                    g-link(to="/nut-house/mezcla-de-higo-y-nueces")
                        button.snack__button.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-16.rounded Lo quiero
            .swiper-slide.slide
                g-link(to="/nut-house/mezcla-de-frutos-y-nueces")
                    .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer.bg-ui-blue.sm_bg-transparent
                        img.mx-auto(src="@/assets/images/products/snack-2.png", alt="alt")
                        h2.snack__card--title(class="w-2/3").mx-auto.text-center.font-bold.text-xl.text-white MEZCLA DE FRUTOS Y NUECES 
                    g-link(to="/nut-house/mezcla-de-frutos-y-nueces")
                        button.snack__button.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-16.rounded Lo quiero
            .swiper-slide.slide
                g-link(to="/nut-house/nuez-pecanera-en-mitades")
                    .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer.bg-ui-blue.sm_bg-transparent
                        img.mx-auto(src="@/assets/images/products/snack-3.png", alt="alt")
                        h2.snack__card--title(class="w-2/3").mx-auto.text-center.font-bold.text-xl.text-white NUEZ PECANERA EN MITADES
                    g-link(to="/nut-house/nuez-pecanera-en-mitades")
                        button.snack__button.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-16.rounded Lo quiero
            .swiper-slide.slide
                g-link(to="/nut-house/nuez-de-la-india-1")
                    .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer.bg-ui-blue.sm_bg-transparent
                        img.mx-auto(src="@/assets/images/products/snack-4.png", alt="alt")
                        h2.snack__card--title(class="w-2/3").mx-auto.text-center.font-bold.text-xl.text-white NUEZ DE LA INDIA SALADA Y TOSTADA
                    g-link(to="/nut-house/nuez-de-la-india-1")
                        button.snack__button.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-16.rounded Lo quiero
            .swiper-slide.slide
                g-link(to="/nut-house/nuez-pecanera-chipotle")
                    .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer.bg-ui-blue.sm_bg-transparent
                        img.mx-auto(src="@/assets/images/products/snack-5.png", alt="alt")
                        h2.snack__card--title(class="w-2/3").mx-auto.text-center.font-bold.text-xl.text-white NUEZ PECANERA CON CHIPOTLE
                    g-link(to="/nut-house/nuez-pecanera-chipotle")
                        button.snack__button.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-16.rounded Lo quiero
            .swiper-slide.slide
                g-link(to="/nut-house/pistache-salado-tostado-2")
                    .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer.bg-ui-blue.sm_bg-transparent
                        img.mx-auto(src="@/assets/images/products/snack-6.png", alt="alt")
                        h2.snack__card--title(class="w-2/3").mx-auto.text-center.font-bold.text-xl.text-white PISTACHE SALADO Y TOSTADO
                    g-link(to="/nut-house/pistache-salado-tostado-2")
                        button.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-16.rounded Lo quiero
            .swiper-slide.slide
                g-link(to="/nut-house/spicy-fruit-mix")
                    .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer.bg-ui-blue.sm_bg-transparent
                        img.mx-auto(src="@/assets/images/products/snack-7.png", alt="alt")
                        h2.snack__card--title(class="w-2/3").mx-auto.text-center.font-bold.text-xl.text-white SPICY FRUIT MIX
                    g-link(to="/nut-house/spicy-fruit-mix")
                        button.snack__button.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-16.rounded Lo quiero
            .swiper-slide.slide
                g-link(to="/nut-house/spicy-trail-mix")
                    .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer.bg-ui-blue.sm_bg-transparent
                        img.mx-auto(src="@/assets/images/products/snack-8.png", alt="alt")
                        h2.snack__card--title(class="w-2/3").mx-auto.text-center.font-bold.text-xl.text-white SPICY TRAIL MIX
                    g-link(to="/nut-house/spicy-trail-mix")
                        button.snack__button.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-16.rounded Lo quiero
        .swiper-button-prev.prev-snack
        .swiper-button-next.next-snack
    .block.text-center.mb-20
        h2.text-center.text-3xl.text-ui-navy.my-6 #[span ¿] SE TE ANTOJÓ #[span ?]
        g-link(to="/category/funfruit")
            button.text-xl.block.my-4.mx-auto.bg-ui-blue.text-white.py-3.px-6.rounded Ver todos los productos
</template>
<script>
import Swiper from 'swiper'
import { gsap } from 'gsap'
import { SplitText } from "../lib/SplitText.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger)

import 'swiper/css/swiper.min.css'
export default {
    data(){
        return{
            
        }
    },
    mounted(){
        this.slider()
        this.textEffect()
        
    },
    updated(){
        this.slider()
    },
    methods:{
        textEffect(){
            var tl = gsap.timeline({
                    scrollTrigger:
                    {
                        trigger:".snack",
                        scrub:false, 
                        markers:false,
                        toggleActions:"play pause reverse reverse"
                    }
                }), splitText = new SplitText(".snack-title",{type:"words,chars"}), chars=splitText.chars

            gsap.set(".snack-title",{perspective:400})
            tl.from(chars, {duration: 0.6, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:'bottom center',  ease:"back", stagger:{each:0.03, from:'left'}}, "+=0");
        },
        slider(){
            var swiper = new Swiper('.slidersnack',{
                effect:'slide',
                // autoplay:true,
                // loop:true,
                speed:600,
                slidesPerView:4,
                autoHeight: true,
                navigation:{
                    nextEl:'.prev-snack',
                    prevEl:'.next-snack'
                },
                breakpoints:{
                    320:{
                        slidesPerView:1,
                        spaceBetween:20
                    },
                    1200:{
                        slidesPerView:4,
                        spaceBetween:20
                    }
                }
            }) 
        }
    }
}
</script>
<style lang="scss" scoped>
    .slide{
        .snack__button{
            transition: all .2s ease; 
            opacity: 0;
            
            @include down-screen(mobile-big){
                opacity: 1;
            }
        }
        &:hover{
            .snack__button{
                opacity: 1;
            }
        }
    }
    .card{
        box-shadow: 0px 5px 10px rgba(51, 51, 51, 0.16);
        border-radius: 20px;
        transition: all .4s ease;
        padding:1rem 0;
        min-height: 430px;
        @include down-screen(mobile-big){
            margin: 0 1.5rem;
        }
        .snack__card--title{
            transition: all .2s ease;     
        }
        img{
            transition: all .2s ease; 
        }
        &:hover{
            .snack__card--title{
                transform: translateY(-10px);
            }
        }
    }
    .swiper-button-prev, .swiper-button-next{
        color: #FFF !important;
    }
    .swiper-button-prev{
        left: 25px;
    }
    .swiper-button-next{
        right: 25px;
    }
    h2{
        span{
            font-family: 'BadTyp';
        }
    }
</style>