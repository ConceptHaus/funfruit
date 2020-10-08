<template lang="pug">
    Layout
        .bolsa__hero.flex.justify-center.items-center.relative
            .bolsa__bubble.absolute
                svg(viewBox="0 0 725 593")
                    path.bubble__red(d="")
            .block
                img.block.mx-auto(src="@/assets/images/sun_face.svg", alt="alt")
                h2(class="sm_w-full").mx-auto.sm_text-5xl.text-2xl.text-white.text-center.align-middle.mt-2.px-4.uppercase Trabaja en Funfruit 
                p.text-ui-yellow.sm_text-3xl.text-xl.text-center Oportunidades profesionales
        LayoutHunter
</template>
<script>
import { gsap } from 'gsap'
import Blob from '../lib/Blob'
import { SplitText } from "../lib/SplitText.js";
import { isMobile } from 'mobile-device-detect'
import LayoutHunter from '@/components/LayoutHunter'
gsap.registerPlugin(SplitText)
export default {
    data(){
        return{
            redBlob:Object
        }
    },
    mounted(){
            this.setBlob()
    },
    methods:{
        setBlob(){
            this.redBlob = new Blob({
                element:document.querySelector('.bubble__red'),
                numPoints: 7,
                centerX: 600,
                centerY: 100,
                minRadius: 350,
                maxRadius: 500,
                minDuration: 2,
                maxDuration: 3
            })
        }
    },
    components:{
        LayoutHunter
    }
}
</script>
<style lang="scss" scoped>
    .bolsa{
        &__hero{
            background: #19467F;
            height: 45vh;
        }
        &__bubble{
            top: 0;
            right: 0;
            width: 300px;
            @include down-screen(mobile-big){
                width: 140px;
                z-index: 0;
            }
            svg{
                path{
                    fill:#C53C2A;
                }
            }
        }
    }
</style>