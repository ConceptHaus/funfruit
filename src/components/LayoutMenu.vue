<template lang="pug">
.menu#menu.h-0.sm_h-full
    .flex.w-full.items-center.justify-around.p-4.flex-wrap.flex-col(class="sm_flex-row")
        .element(@click="animationMenu")
            g-link.hover_text-ui-green.hover_font-bold.mt-4(to="/category/nut-house") The Nut House
            img.active-shape.ml-auto.mb-4(src="@/assets/images/active-shape.svg", alt="alt")
            .hero-menu.absolute.w-full.bg-gray-100.flex.justify-around.z-10.py-8.left-0
                img(src="@/assets/images/nuthouse-menu.png", alt="alt")
                .hero-menu--list.flex.justify-center.items-center
                    ul
                        li.mb-4.text-lg 
                            a.font-bold(href="#") Doy Pack
                        li.text-lg
                            a(href="#") Variedades
                .hero-menu--list.flex.justify-center.items-center
                    ul
                        li.mb-4.text-lg 
                            a.font-bold(href="#") Snack
                        li.text-lg 
                            a(href="#") Frutas secas
                .hero-menu--list.flex.justify-center.items-center
                    ul
                        li.mb-4.text-lg 
                            a.font-bold(href="#") Vitrolero
                        li.text-lg 
                            a(href="#") Variedades de nueces
                .flex.flex-col.justify-center
                    button.block.my-5.bg-ui-blue.text-xl.text-white.py-3.px-16.rounded Ver todo
        .element
            g-link.hover_text-ui-green.hover_font-bold(to="/category/funfruit") Fun Fruit
            img.active-shape.ml-auto.mb-4(src="@/assets/images/active-shape.svg", alt="alt")
        .element
            g-link.hover_text-ui-green.hover_font-bold(to="/category/granel") Productos a granel
            img.active-shape.ml-auto.mb-4(src="@/assets/images/active-shape.svg", alt="alt")
        .element
            g-link.hover_text-ui-green.hover_font-bold(to="/") Acerca de Fun Fruit
            img.active-shape.ml-auto.mb-4(src="@/assets/images/active-shape.svg", alt="alt")
        .element
            g-link.hover_text-ui-green.hover_font-bold(to="/") Fundación
            img.active-shape.ml-auto.mb-4(src="@/assets/images/active-shape.svg", alt="alt")

</template>
<script>
import { gsap } from 'gsap'
export default {
    data(){
        return{
            
        }
    },
    mounted(){
    },
    updated(){
    },
    methods:{
        animationMenu(){
            var tl = gsap.timeline()
            tl.from('.hero-menu--list ul li',2, { y: -30, alpha:0, stagger:.05, ease:'elastic.out(.5)' })
        }
    }
}
</script>
<style lang="scss" scoped>
.menu{
    display: none;
    transition: height 0.2s ease;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    .element{
        .hero-menu{
            display: none;
        }
        .active-shape{
            opacity: 0;
            transition: all 0.3s ease;
        }
        &:hover{
            .active-shape{
                opacity: 1;
            }
            .hero-menu{
                display: flex;
                &:hover{
                    display: flex;
                }
                @include down-screen(mobile-big){
                    display: none;
                }
            }
        }
        a{
            letter-spacing: 0.08em;
            transition: all 0.3s ease;
        }
    }
    
}
</style>
