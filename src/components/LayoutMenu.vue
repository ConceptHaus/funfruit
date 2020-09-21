<template lang="pug">
.menu#menu.h-0.sm_h-full
    .flex.w-full.items-center.justify-around.p-4.flex-wrap.flex-col(class="sm_flex-row")
        .element(@click="hideMenu")
            g-link.hover_text-ui-green.hover_font-bold.mt-4(to="/category/nut-house") The Nut House
            img.active-shape.ml-auto.mb-4.sm_mb-0(src="@/assets/images/active-shape.svg", alt="alt")
            .hero-menu.absolute.w-full.bg-gray-100.flex.justify-around.z-10.py-8.left-0
                img(src="@/assets/images/nuthouse-menu.png", alt="alt")
                .hero-menu--list.flex.justify-center.items-center
                    ul
                        li.mb-4.text-lg.font-bold Doy Pack
                        li.text-lg
                            a(href="/category/nut-house") Variedades
                .hero-menu--list.flex.justify-center.items-center
                    ul
                        li.mb-4.text-lg.font-bold Snack
                        li.text-lg 
                            a(href="/category/nut-house") Frutas secas
                .hero-menu--list.flex.justify-center.items-center
                    ul
                        li.mb-4.text-lg.font-bold Vitrolero 
                        li.text-lg 
                            a(href="/category/nut-house") Variedades de nueces
                .flex.flex-col.justify-center
                    g-link(to="/category/nut-house")
                        button.block.my-5.bg-ui-blue.text-xl.text-white.py-3.px-16.rounded Ver todo
        .element(@click="hideMenu")
            g-link.hover_text-ui-green.hover_font-bold(to="/category/funfruit") Fun Fruit
            img.active-shape.ml-auto.mb-4.sm_mb-0(src="@/assets/images/active-shape.svg", alt="alt")
            .hero-menu.absolute.w-full.bg-gray-100.flex.justify-around.z-10.py-8.left-0
                img(src="@/assets/images/funfruit-menu.jpg", alt="alt")
                .hero-menu--list.flex.justify-center.items-center
                    ul
                        li.text-lg
                            a(href="/category/funfruit") Abarrotes
                .hero-menu--list.flex.justify-center.items-center
                    ul
                        li.text-lg 
                            a(href="/category/funfruit") Fruta en almíbar
                .flex.flex-col.justify-center
                    g-link(to="/category/funfruit")
                        button.block.my-5.bg-ui-blue.text-xl.text-white.py-3.px-16.rounded Ver todo
        .element(@click="hideMenu")
            g-link.hover_text-ui-green.hover_font-bold(to="/category/granel") Productos a granel
            img.active-shape.ml-auto.mb-4.sm_mb-0(src="@/assets/images/active-shape.svg", alt="alt")
            .hero-menu.absolute.w-full.bg-gray-100.flex.justify-around.z-10.py-8.left-0
                img(src="@/assets/images/funfruit-menu.jpg", alt="alt")
                .hero-menu--list.flex.justify-center.items-center
                    ul
                        li.text-lg
                            a(href="/category/granel") Frutos secos
                .hero-menu--list.flex.justify-center.items-center
                    ul
                        li.text-lg 
                            a(href="/category/granel") Fruta deshidratada
                .hero-menu--list.flex.justify-center.items-center
                    ul
                        li.text-lg 
                            a(href="/category/granel") Nueces y semillas
                .flex.flex-col.justify-center
                    g-link(to="/category/granel")
                        button.block.my-5.bg-ui-blue.text-xl.text-white.py-3.px-16.rounded Ver todo
        .element
            g-link.hover_text-ui-green.hover_font-bold(to="/") Acerca de Fun Fruit
            img.active-shape.ml-auto.mb-4.sm_mb-0(src="@/assets/images/active-shape.svg", alt="alt")
        .element
            g-link.hover_text-ui-green.hover_font-bold(to="/") Fundación
            img.active-shape.ml-auto.mb-4.sm_mb-0(src="@/assets/images/active-shape.svg", alt="alt")

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
        hideMenu(){
            const breakpoint = window.matchMedia('(max-width: 640px)');
            if(breakpoint.matches === true){
                var btn = document.getElementById('menuBtn');
                btn.classList.remove('open')
                var tl = gsap.timeline()
                tl.to('#menu', 0.2,{height:"0",ease: "Power3.easeOut"})
                tl.set('#menu',{display:'none'})
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.menu{
    @include down-screen(mobile-big){
        display: none;
    }
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
