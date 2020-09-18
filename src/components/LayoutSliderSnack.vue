<template lang="pug">
section.snack
    .container.my-20
        .flex.justify-center
            h2(class="sm_w-1/2").w-full.snack-title.text-center.text-3xl.text-ui-navy UN DELICIOSO #[span.text-ui-secondary SNACK] EN CUALQUIER MOMENTO DEL DÍA
        .flex.justify-center.my-5
            p.text-ui-typo Elige el que más se te #[b antoje]
    .flex.flex-col.sm_flex-row.justify-around.my-10.sm_my-20
        .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer
            img.mx-auto.py-16(src="@/assets/images/products/snack-1.png", alt="alt")
        .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer
            img.mx-auto.py-16(src="@/assets/images/products/snack-2.png", alt="alt")
        .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer
            img.mx-auto.py-16(src="@/assets/images/products/snack-3.png", alt="alt")
        .card.overflow-hidden.shadow-lg.rounded-lg.hover_bg-ui-blue.cursor-pointer
            img.mx-auto.py-16(src="@/assets/images/products/snack-4.png", alt="alt")
    .block.text-center.my-20
        h2.text-center.text-3xl.text-ui-navy.my-6 ¿SE TE ANTOJÓ?
        button.text-xl.block.my-4.mx-auto.bg-ui-blue.text-white.py-2.px-4.rounded Ver todos los productos
</template>
<script>
import Swiper from 'swiper'
import { gsap } from 'gsap'
import { SplitText } from "../lib/SplitText.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger)

import 'swiper/css/swiper.min.css'
export default {
    mounted(){
        this.textEffect()
    },
    updated(){

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
        }
    }
}
</script>
<style lang="scss" scoped>
    .card{
        box-shadow: 0px 5px 10px rgba(51, 51, 51, 0.16);
        border-radius: 20px;
        transition: all .2s ease;
        
    }
</style>