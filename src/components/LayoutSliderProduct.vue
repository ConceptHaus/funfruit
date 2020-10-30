<template lang="pug">
section#products
    .container.sm_my-20.my-10
        .flex.justify-center
            h2.text-4xl.text-ui-navy.product-title.text-center ELIGE TU PREFERIDO
    .swiper-container.slideproduct.mb-24
        .swiper-wrapper.py-24
            .swiper-slide.slide(@mouseenter="sunEffect(5)" @mouseleave="sunEffectOver")
                .products__sun.products__sun5.absolute
                    img.mx-auto.object-contain(src="@/assets/images/sun.svg")
                img.mx-auto.object-contain(src="@/assets/images/products/nut-5.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center NUECES MIXTAS
                g-link(to="/nut-house/nueces-mixtas-tostadas")
                    button.block.my-4.mx-auto.bg-ui-blue.text-white.py-3.px-16.rounded Ver producto
            .swiper-slide.slide(@mouseenter="sunEffect(4)" @mouseleave="sunEffectOver")
                .products__sun.products__sun4.absolute
                    img.mx-auto.object-contain(src="@/assets/images/sun.svg")
                img.mx-auto.object-contain(src="@/assets/images/products/nut-4.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center NUEZ DE LA INDIA CON CHIPOTLE
                g-link(to="/nut-house/nuez-de-la-india-con-chipotle")
                    button.block.my-4.mx-auto.bg-ui-blue.text-white.py-3.px-16.rounded Ver producto
            .swiper-slide.slide(@mouseenter="sunEffect(2)" @mouseleave="sunEffectOver")
                .products__sun.products__sun2.absolute
                    img.mx-auto.object-contain(src="@/assets/images/sun.svg")
                img.mx-auto.object-contain(src="@/assets/images/products/nut-2.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center NUEZ DE LA INDIA
                g-link(to="/nut-house/nuez-de-la-india-tostada-y-salada")
                    button.block.my-4.mx-auto.bg-ui-blue.text-white.py-3.px-16.rounded Ver producto
            .swiper-slide.slide(@mouseenter="sunEffect(3)" @mouseleave="sunEffectOver")
                .products__sun.products__sun3.absolute
                    img.mx-auto.object-contain(src="@/assets/images/sun.svg")
                img.mx-auto.object-contain(src="@/assets/images/products/nut-3.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center NUEZ PECANERA
                g-link(to="/nut-house/nuez-pecanera-mitades")
                    button.block.my-4.mx-auto.bg-ui-blue.text-white.py-3.px-16.rounded Ver producto
            .swiper-slide.slide(@mouseenter="sunEffect(3)" @mouseleave="sunEffectOver")
                .products__sun.products__sun3.absolute
                    img.mx-auto.object-contain(src="@/assets/images/sun.svg")
                img.mx-auto.object-contain(src="@/assets/images/nuez_pecanera_tostada_ chipotle.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center NUEZ PECANERA
                g-link(to="/nut-house/nuez-pecanera-mitades")
                    button.block.my-4.mx-auto.bg-ui-blue.text-white.py-3.px-16.rounded Ver producto
            .swiper-slide.slide(@mouseenter="sunEffect(1)" @mouseleave="sunEffectOver")
                .products__sun.products__sun1.absolute
                    img.mx-auto.object-contain(src="@/assets/images/sun.svg")
                img.mx-auto.object-contain(src="@/assets/images/products/nut-1.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center PISTACHE
                g-link(to="/nut-house/pistache-tostado")
                    button.block.my-4.mx-auto.bg-ui-blue.text-white.py-3.px-16.rounded Ver producto
            .swiper-slide.slide(@mouseenter="sunEffect(6)" @mouseleave="sunEffectOver")
                .products__sun.products__sun6.absolute
                    img.mx-auto.object-contain(src="@/assets/images/sun.svg")
                img.mx-auto.object-contain(src="@/assets/images/products/nut-6.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center ALMENDRA ENTERA
                g-link(to="/nut-house/almendra-entera")
                    button.block.my-4.mx-auto.bg-ui-blue.text-white.py-3.px-16.rounded Ver producto
            .swiper-slide.slide(@mouseenter="sunEffect(7)" @mouseleave="sunEffectOver")
                .products__sun.products__sun7.absolute
                    img.mx-auto.object-contain(src="@/assets/images/sun.svg")
                img.mx-auto.object-contain(src="@/assets/images/products/nut-7.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center MANGO ENCHILADO
                g-link(to="/nut-house/mango-enchilado-1")
                    button.block.my-4.mx-auto.bg-ui-blue.text-white.py-3.px-16.rounded Ver producto
            .swiper-slide.slide(@mouseenter="sunEffect(7)" @mouseleave="sunEffectOver")
                .products__sun.products__sun7.absolute
                    img.mx-auto.object-contain(src="@/assets/images/sun.svg")
                img.mx-auto.object-contain(src="@/assets/images/mezcla_nueces_480.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center NUECES MIXTAS
                g-link(to="/nut-house/nueces-mixtas-tostadas")
                    button.block.my-4.mx-auto.bg-ui-blue.text-white.py-3.px-16.rounded Ver producto
            .swiper-slide.slide(@mouseenter="sunEffect(7)" @mouseleave="sunEffectOver")
                .products__sun.products__sun7.absolute
                    img.mx-auto.object-contain(src="@/assets/images/sun.svg")
                img.mx-auto.object-contain(src="@/assets/images/nuez_india_500.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center NUEZ DE LA INDIA
                g-link(to="/nut-house/nuez-de-la-india")
                    button.block.my-4.mx-auto.bg-ui-blue.text-white.py-3.px-16.rounded Ver producto
            .swiper-slide.slide(@mouseenter="sunEffect(7)" @mouseleave="sunEffectOver")
                .products__sun.products__sun7.absolute
                    img.mx-auto.object-contain(src="@/assets/images/sun.svg")
                img.mx-auto.object-contain(src="@/assets/images/mango_enchilado_550.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center MANGO ENCHILADO
                g-link(to="/nut-house/mango-enchilado")
                    button.block.my-4.mx-auto.bg-ui-blue.text-white.py-3.px-16.rounded Ver producto
            .swiper-slide.slide(@mouseenter="sunEffect(7)" @mouseleave="sunEffectOver")
                .products__sun.products__sun7.absolute
                    img.mx-auto.object-contain(src="@/assets/images/sun.svg")
                img.mx-auto.object-contain(src="@/assets/images/pistache_tostado_salado_400.png")
                h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center PISTACHE
                g-link(to="/nut-house/pistache-tostado")
                    button.block.my-4.mx-auto.bg-ui-blue.text-white.py-3.px-16.rounded Ver producto
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
        sunEffect(index){
            this.sunAnimation = gsap.timeline()
            this.sunAnimation.fromTo(`.products__sun${index}`,0.3,{scale:0,opacity:0},{scale:1,opacity:1, rotate:90, ease:'power'})
            this.sunAnimation.play()
        },
        sunEffectOver(){
            this.sunAnimation.reverse()
        },
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
                    720:{
                        slidesPerView:4,
                        spaceBetween:0
                    },
                    1025:{
                        slidesPerView:5,
                        spaceBetween:0
                    },
                    1444:{
                        slidesPerView:6,
                        spaceBetween:0
                    }
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .slide{
        transition: .2s all ease;
        cursor: pointer;
        position: relative;
        h2{
            min-height: 60px;
        }
    }
    .products{
        &__sun{
            z-index: -10;
            transform: translateY(-80px);
            left: 3%;
            opacity: 0;
            @include down-screen(mobile-big){
                left: 15%;
                opacity: 1;
            }
        }
    }
    .products-prev,.products-next{
        color: #FFF;
        top: 38%;
        right: 3%;
        transition: .2s all ease;
        @include down-screen(mobile-big){
            right: 5%;
            top: 30%;
        }
        &:hover{
            transform: scale(1.1);
        }
        &::after{
            padding: 1rem 1.5rem;
            background: #BDBDBD;
            opacity: 0.55;
            @include down-screen(mobile-big){
                padding: 0.5rem 0.8rem;
                font-size: 1.3rem;
            }
        }
    }
    .products-prev{
        left:3%;
        @include down-screen(mobile-big){
            left: 5%;
            top: 30%;
        }
    }
</style>