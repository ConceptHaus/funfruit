<template lang="pug">
    Layout
        .contacto__hero.flex.justify-center.items-center
            .block
                h2(class="sm_w-2/3").mx-auto.sm_text-5xl.text-2xl.text-white.text-center.align-middle.mt-2.px-4 #[span ¿] Cómo podemos ayudarte #[span ?]
        .flex.justify-center.items-center.sm_my-20.my-10
            p(class="sm_w-1/3 w-full").px-4.text-black.text-lg.mx-auto.text-center #[b ¡Nos encantaría saber de ti!] Nuestro equipo responderá cualquier pregunta o comentario sobre tu experiencia con los productos #[b Fun Fruit.]
        LayoutContactForm

</template>
<script>
import LayoutContactForm from '@/components/LayoutContactForm'
export default {
    components:{
        LayoutContactForm
    }
}
</script>
<style lang="scss" scoped>
    .contacto{
        &__hero{
            height: 40vh;
            background-image:url('~@/assets/images/bg-contacto.svg') ; 
            background-repeat: no-repeat;
            background-size: cover;
            background-position: top center;
            @include down-screen(mobile-big){
                height: 20vh;
            }
            h2{
                text-transform: uppercase;
                span{
                    font-family: 'BadTyp';
                }
            }
        }
    }
</style>