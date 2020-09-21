<template lang="pug">
    header.top-0.w-full.bg-ui-background.z-10.sticky
        LayoutBanner
        #header
            .flex.items-center.justify-around.sm_justify-center.p-6
                g-link(to="/")
                    g-image.logo.flex.items-center(src="@/assets/images/logo.svg")
                button#menuBtn.hamburger.relative.sm_hidden.block(type="button" @click="navToggle")
                    span.hamburger__top-bun.bg-ui-navy
                    span.hamburger__bottom-bun.bg-ui-navy
        LayoutMenu
            
</template>
<script>
import LayoutBanner from "~/components/LayoutBanner.vue"
import LayoutMenu from "~/components/LayoutMenu.vue"
import { gsap } from 'gsap'
export default {
    components:{
        LayoutBanner,
        LayoutMenu
    },
    mounted(){
    },
    methods:{
        navToggle(){
            var btn = document.getElementById('menuBtn');
            var tl = gsap.timeline()
            btn.classList.toggle('open');
            if(!btn.classList.contains('open')){
                tl.to('#menu', 0.2,{height:"0",ease: "Power3.easeOut"})
                tl.set('#menu',{display:'none'})
            }else{
                tl.set('#menu',{display:'block'})
                tl.to('#menu', 0.2,{height:"auto",ease: "Power3.easeOut"})
                tl.from('.menu .flex .element',1.5,{y:-30,alpha:0,stagger:0.20,color:'#225D38', ease:'elastic.out(.8)'})
            }
        }
    }
}
</script>
<style lang="scss">
    #header{
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
    }
    .logo{
        @include down-screen(mobile-big){
            margin-right: 30px;
            width: 55%;
        }
    }
    .hamburger {
        cursor: pointer;
        width: 48px;
        height: 48px;
        transition: all 0.25s;
        &__top-bun, &__bottom-bun{
            content: '';
            position: absolute;
            width: 30px;
            height: 2px;
            transform: rotate(0);
            transition: all 0.5s;
        }
        &__top-bun{
            transform: translateY(-5px);
        }
        &__bottom-bun{
            transform: translateY(3px);
        }
        &:hover [class*="-bun"] {
            background: #333;
        }
    }
    .open {
        transform: rotate(90deg);
        transform: translateY(-1px);
    }

    .open .hamburger__top-bun {
    transform:
        rotate(45deg)
        translateY(0px);
    }

    .open .hamburger__bottom-bun {
    transform:
        rotate(-45deg)
        translateY(0px);
    }
</style>