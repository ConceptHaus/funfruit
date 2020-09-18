<template lang="pug">
section#products
    .container.sm_my-20.my-10
        .flex.justify-center
            h2.text-4xl.text-ui-navy.product-title.text-center ELIGE TU PREFERIDO
    .swiper-container.slideproduct.mb-24
        .swiper-wrapper
            .swiper-slide.slide
                img.mx-auto.object-fit(src="@/assets/images/products/nut-1.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center PISTACHE - SALADO Y TOSTADO
                button.block.my-4.mx-auto.bg-ui-blue.text-white.font-bold.py-2.px-4.rounded Ver producto
            .swiper-slide.slide
                img.mx-auto.object-fit(src="@/assets/images/products/nut-2.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center PISTACHE - SALADO Y TOSTADO
                button.block.my-4.mx-auto.bg-ui-blue.text-white.font-bold.py-2.px-4.rounded Ver producto
            .swiper-slide.slide
                img.mx-auto.object-fit(src="@/assets/images/products/nut-3.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center PISTACHE - SALADO Y TOSTADO
                button.block.my-4.mx-auto.bg-ui-blue.text-white.font-bold.py-2.px-4.rounded Ver producto
            .swiper-slide.slide
                img.mx-auto.object-fit(src="@/assets/images/products/nut-4.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center PISTACHE - SALADO Y TOSTADO
                button.block.my-4.mx-auto.bg-ui-blue.text-white.font-bold.py-2.px-4.rounded Ver producto
            .swiper-slide.slide
                img.mx-auto.object-fit(src="@/assets/images/products/nut-5.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center PISTACHE - SALADO Y TOSTADO
                button.block.my-4.mx-auto.bg-ui-blue.text-white.font-bold.py-2.px-4.rounded Ver producto
            .swiper-slide.slide
                img.mx-auto.object-fit(src="@/assets/images/products/nut-6.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center PISTACHE - SALADO Y TOSTADO
                button.block.my-4.mx-auto.bg-ui-blue.text-white.font-bold.py-2.px-4.rounded Ver producto
        .swiper-button-prev.products-prev
        .swiper-button-next.products-next

</template>
<script>
import Swiper from 'swiper'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "../lib/SplitText.js";
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
        this.textEffect()
    },
    methods:{
        textEffect(){
            var tl = gsap.timeline({
                scrollTrigger:
                {
                    trigger:"#products",
                    scrub:false, 
                    markers:false,
                    toggleActions:"play pause reverse reverse"
                }
            }), splitText = new SplitText(".product-title",{type:"words,chars"}), words=splitText.words,chars=splitText.chars
            gsap.set(".product-title",{perspective:400})
            tl.from(chars, {duration: 0.6, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:'bottom center',  ease:"back", stagger:{each:0.03, from:'left'}}, "+=0");
        },
        slider(){
            var swiper = new Swiper('.slideproduct',{
                effect:'slide',
                autoplay:true,
                loop:true,
                speed:1200,
                slidesPerView:5,
                navigation:{
                    nextEl:'.products-next',
                    prevEl:'.products-prev'
                },
                breakpoints:{
                    320:{
                        slidesPerView:1,
                        spaceBetween:0
                    },
                    1200:{
                        slidesPerView:5,
                        spaceBetween:0
                    }
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .products-prev,.products-next{
        color: #FFF;
        top: 40%;
        right: 2%;
        &::after{
            padding: 1rem;
            background: #BDBDBD;
        }
    }
    .products-prev{
        left: 2%;
    }
</style>