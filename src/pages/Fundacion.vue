<template lang="pug">
    Layout
        .fundacion__hero.flex.justify-center.items-center
                .block
                    img.object-contain.mx-auto(src="@/assets/images/fundcion-logo.svg", alt="alt")
                    h2.text-xl.text-ui-green.text-center.align-middle.mt-2.px-4 Asociación Ministerios de Amor A.C.
        .flex.sm_flex-row.flex-col.justify-around.items-center.my-20
            g-image(src="@/assets/images/fundacion-1.png")
            .block(class="sm_w-1/3")
                h2.text-2xl.text-ui-green.text-center.mt-6 UNIDOS
                p.px-6 En Fun Fruit estamos comprometidos con la sociedad, creemos en el talento de los pequeños que no tienen los recursos necesarios, razón por la cual apoyamos a la Asociación Misterios de Amor A.C. dedicada al apoyo de infantes en situación de calle. 
        .flex.sm_flex-row.flex-col.justify-around.items-center.my-20
            .block(class="sm_w-1/3")
                h2.text-2xl.text-ui-navy.text-center AYUDAMOS
                p.px-6.mb-6 Por medio de la Fundación, convertimos sueños en realidades, transformamos caras tristes en momentos de alegría y bienestar ayudando a cambiar el entorno de los pequeños dándoles nueva oportunidad y esperanza.
            g-image(src="@/assets/images/fundacion2.png")
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .fundacion{
        &__hero{
            height: 80vh;
            background-image:url('~@/assets/images/bg_fundacion.png') ; 
            background-repeat: no-repeat;
            background-size: cover;
            background-position: top center;
            @include down-screen(mobile-big){
                height: 60vh;
            }
            h2{
                text-transform: uppercase;
            }
        }
    }
</style>
