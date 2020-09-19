<template lang="pug">
section.snack
    .container.my-20
        .flex.justify-center
            h2(class="sm_w-1/2").w-full.snack-title.text-center.text-3xl.text-ui-navy UN DELICIOSO #[span.text-ui-secondary SNACK] EN CUALQUIER MOMENTO DEL DÍA
        .flex.justify-center.my-5
            p.text-ui-typo Elige el que más se te #[b antoje]
    .swiper-container.slidersnack.my-10.sm_my-20
        .swiper-wrapper.py-16
            .swiper-slide.slide
                .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer.bg-ui-blue.sm_bg-transparent
                    img.mx-auto(src="@/assets/images/products/snack-1.png", alt="alt")
                    h2.snack__card--title(class="w-2/3").mx-auto.text-center.font-bold.text-xl.text-white MEZCLA DE HIGOS Y NUECES
                    button.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-16.rounded Lo quiero
            .swiper-slide.slide
                .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer.bg-ui-blue.sm_bg-transparent
                    img.mx-auto(src="@/assets/images/products/snack-2.png", alt="alt")
                    h2.snack__card--title(class="w-2/3").mx-auto.text-center.font-bold.text-xl.text-white MEZCLA DE FRUTOS Y NUECES 
                    button.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-16.rounded Lo quiero
            .swiper-slide.slide
                .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer.bg-ui-blue.sm_bg-transparent
                    img.mx-auto(src="@/assets/images/products/snack-3.png", alt="alt")
                    h2.snack__card--title(class="w-2/3").mx-auto.text-center.font-bold.text-xl.text-white NUEZ PECANERA EN MITADES
                    button.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-16.rounded Lo quiero
            .swiper-slide.slide
                .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer.bg-ui-blue.sm_bg-transparent
                    img.mx-auto(src="@/assets/images/products/snack-4.png", alt="alt")
                    h2.snack__card--title(class="w-2/3").mx-auto.text-center.font-bold.text-xl.text-white NUEZ DE LA INDIA SALADA Y TOSTADA
                    button.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-16.rounded Lo quiero
            .swiper-slide.slide
                .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer.bg-ui-blue.sm_bg-transparent
                    img.mx-auto(src="@/assets/images/products/snack-5.png", alt="alt")
                    h2.snack__card--title(class="w-2/3").mx-auto.text-center.font-bold.text-xl.text-white NUEZ PECANERA CON CHIPOTLE
                    button.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-16.rounded Lo quiero
            .swiper-slide.slide
                .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer.bg-ui-blue.sm_bg-transparent
                    img.mx-auto(src="@/assets/images/products/snack-6.png", alt="alt")
                    h2.snack__card--title(class="w-2/3").mx-auto.text-center.font-bold.text-xl.text-white PISTACHE SALADO Y TOSTADO
                    button.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-16.rounded Lo quiero
            .swiper-slide.slide
                .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer.bg-ui-blue.sm_bg-transparent
                    img.mx-auto(src="@/assets/images/products/snack-7.png", alt="alt")
                    h2.snack__card--title(class="w-2/3").mx-auto.text-center.font-bold.text-xl.text-white SPICY FRUIT MIX
                    button.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-16.rounded Lo quiero
            .swiper-slide.slide
                .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer.bg-ui-blue.sm_bg-transparent
                    img.mx-auto(src="@/assets/images/products/snack-8.png", alt="alt")
                    h2.snack__card--title(class="w-2/3").mx-auto.text-center.font-bold.text-xl.text-white SPICY TRAIL MIX
                    button.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-16.rounded Lo quiero
    .block.text-center.my-20
        h2.text-center.text-3xl.text-ui-navy.my-6 #[span ¿] SE TE ANTOJÓ #[span ?]
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
                autoplay:true,
                loop:true,
                speed:1200,
                slidesPerView:4,
                autoHeight: true,
                navigation:{
                    nextEl:'.products-next',
                    prevEl:'.products-prev'
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
    .card{
        box-shadow: 0px 5px 10px rgba(51, 51, 51, 0.16);
        border-radius: 20px;
        transition: all .4s ease;
        padding:1rem 0;
        min-height: 492px;
        .snack__card--title{
            transition: all .2s ease;     
        }
        img{
            transition: all .2s ease; 
        }
        button{
            transition: all .2s ease; 
            opacity: 0;
            @include down-screen(mobile-big){
                opacity: 1;
            }
        }
        &:hover{
            button{
                opacity: 1;
            }
            .snack__card--title{
                transform: translateY(-10px);
            }
        }
    }
    h2{
        span{
            font-family: 'BadTyp';
        }
    }
</style>