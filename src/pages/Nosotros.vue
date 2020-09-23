<template lang="pug">
    Layout
        .nosotros__hero.flex.justify-center.items-center.bg-ui-navy
            img.object-contain(src="@/assets/images/logo_funfruit.svg", alt="alt")
        .nosotros__desc.flex.flex-col.sm_flex-row.justify-center.items-center.mb-4
            h2.text-6xl.text-ui-green.mt-10(class="sm_w-1/3").text-center QUIÉNES SOMOS
            .nosotros__text.mt-10.sm_mt-20.mx-6(class="sm_w-1/3")
                p.mb-2 Fun Fruit nace con el nombre de Tepehuana, que hace referencia a la Sierra de Tepehuanes, ubicada al sur de Chihuahua y parte de Durango, lugar de donde es originaria la marca.
                p En el año 2000 se funda Fun Fruit con una imagen de un Sol feliz por encima del monte que hace referencia a la naturaleza de nuestros productos y lo amigable que son para la salud.
        .nosotros__banner.flex.justify-center.items-center
            h2.sm_text-6xl.text-3xl.text-center.text-ui-yellow.mt-10(class="sm_w-1/3") EL SOL BRILLA PARA TODOS
        .nosotros__title.flex.justify-center.items-center
            h2.text-4xl.text-ui-navy.my-16.text-center CONOCE NUESTRAS LÍNEAS
        .nosotros__lineas.flex.flex-col.sm_flex-row.justify-around.items-center
            .card.my-10.p-4.text-center
                g-image(src="@/assets/images/nut-house-group.png", alt="alt")
                h2.text-4xl.text-ui-typo.mt-4.text-center NUT HOUSE
                a(href="/category/nut-house").inline-block.my-4.bg-ui-blue.text-white.py-3.px-16.rounded Lo quiero
            .card.my-10.p-4.text-center
                g-image(src="@/assets/images/funfruit-product.png", alt="alt")
                h2.text-4xl.text-ui-typo.mt-4.text-center FUNFRUIT
                a(href="/category/funfruit").inline-block.my-4.bg-ui-blue.text-white.py-3.px-16.rounded Lo quiero
            .card.my-10.p-4.text-center
                g-image(src="@/assets/images/granel-product.png", alt="alt")
                h2.text-4xl.text-ui-typo.mt-4.text-center A GRANEL
                a(href="/category/granel").inline-block.my-4.bg-ui-blue.text-white.py-3.px-16.rounded Lo quiero


</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .nosotros{
        &__hero{
            height: 70vh;
            @include down-screen(mobile-big){
                height: 90vh;
            }
        }
        &__desc{
            height: 60vh;
            background-image:url('~@/assets/images/bg2-nosotros.png') ;
            background-repeat: no-repeat;
            background-position: top right;
            background-size: 30%;
            @include down-screen(mobile-big){
                height: 80vh;
            }
        }
        &__banner{
            height: 60vh;
            background-image:url('~@/assets/images/bg_nosotros.png') ;
            background-repeat: no-repeat;
            background-position: top right;
            background-size: cover;
            @include down-screen(mobile-big){
                height: 50vh;
            }
        }
        &__lineas{
            .card{
                a{
                    opacity: 0;
                    transition: all .2s ease;
                }
                &:hover{
                    a{
                        opacity: 1;
                    }
                    cursor: pointer;
                    box-shadow: 0px 5px 10px rgba(51, 51, 51, 0.16);
                    border-radius: 12px;
                }
                
            }
        }
    }
</style>