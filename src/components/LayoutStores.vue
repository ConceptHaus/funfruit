<template lang="pug">
section
    .container
        .flex.justify-center.my-5
            h2.text-center.text-3xl.text-ui-navy #[span ¡] ENCUÉNTRANOS TAMBIÉN AQUÍ #[span !]
        .flex.justify-center.my-4
            p.text-ui-typo.text-lg Toda nuestra variedad #[b a tu alcance]
    .swiper-container.sliderstores.my-20
        .swiper-wrapper.pb-6
            .swiper-slide.slide__store
                .card.overflow-hidden.shadow-lg.mb-8.sm_mb-0
                    a(href="https://www.walmart.com.mx/inicio" target="_blank")
                        img.px-16.py-10.mx-auto(src="@/assets/images/walmart.svg", alt="alt")
            .swiper-slide.slide__store
                .card.overflow-hidden.shadow-lg.mb-8.sm_mb-0
                    a(href="https://www.chedraui.com.mx/search?text=Nuthouse&method=enter" target="_blank")
                        img.px-16.py-10.mx-auto(src="@/assets/images/chedraui.svg", alt="alt")
            .swiper-slide.slide__store
                .card.overflow-hidden.shadow-lg.mb-8.sm_mb-0
                    a(href="https://www.amazon.com.mx" target="_blank")
                        img.px-16.py-10.mx-auto(src="@/assets/images/amazon.svg", alt="alt")
    .flex.justify-around.my-10.sm_my-20.items-center
        a(href="https://www.chedraui.com.mx/search?text=Nuthouse&method=enter" target="_blank")
            button.text-xl.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-6.rounded ¡Quieroo comprar ahí!
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css' 
import gsap from 'gsap'
export default {
    mounted(){
        this.slider()
        this.effects()
    },
    updated(){
        this.slider()
    },
    methods:{
        effects(){
            gsap.from('.swiper-slide-active.slide__store .card img',0.8,{y:1500,alpha:0, ease:'Power3.easeOut'})
        },
        breakpointChecker(swiper){
            const breakpoint = window.matchMedia('(max-width: 640px)');

            if(breakpoint.matches === true) {
                swiper.on('slideNextTransitionStart', () => this.effects())
            }
        },
        slider(){
            var swiper = new Swiper('.sliderstores',{
                effect:'slide',
                autoplay:true,
                loop:true,
                speed:600,
                delay:800,
                slidesPerView:3,
                autoHeight: true,
                breakpoints:{
                    320:{
                        slidesPerView:1,
                        spaceBetween:20
                    },
                    1200:{
                        slidesPerView:3,
                        spaceBetween:20
                    }
                }
            })
            this.breakpointChecker(swiper)
        }
    }
}
</script>
<style lang="scss" scoped>
    .card{
        border-radius: 20px;
        box-shadow: 0px 5px 10px rgba(51, 51, 51, 0.16);
        transition: all .2s ease;
        @include down-screen(mobile-big){
            margin: 0 1.5rem;
        }
        &:hover{
            background: #F2F2F2;
            cursor: pointer;
        }
    }
    h2{
        span{
            font-family: 'BadTyp';
        }
    }
</style>