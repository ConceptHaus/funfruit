<template lang="pug">
    Layout
        .container.my-8
            .flex.justify-around.flex-col(class="sm_flex-row")
                .block
                    g-image.object-fit(:src="$context.images", alt="alt")
                .block.w-full(class="sm_w-2/5")
                    .bg-ui-green.pb-4.pt-12.px-4.sm_px-16
                        h2.product__title.text-white.text-3xl {{$context.title}}
                        p.text-white {{$context.description}}
                        .border-solid.border.border-white.my-4
                        .flex.justify-around
                            .block
                                p.text-white.font-bold Info. Nutrimental
                                ul
                                    li.text-white Contenido energético
                                    li.text-white Proteínas (g)
                                    li.text-white Carbohidratos totales (g)
                                    li.text-white Azúcares (g)
                                    li.text-white Fibra dietética (g)
                                    li.text-white Lípidos (g)
                                    li.text-white Grasas saturadas (g)
                                    li.text-white Sodio (g)
                            .block
                                p.text-white.font-bold Por cada 100g
                                ul
                                    li.text-white {{$context.info[0]}}
                                    li.text-white {{$context.info[1]}}
                                    li.text-white {{$context.info[2]}}
                                    li.text-white {{$context.info[3]}}
                                    li.text-white {{$context.info[4]}}
                                    li.text-white {{$context.info[5]}}
                                    li.text-white {{$context.info[6]}}
                                    li.text-white {{$context.info[7]}}
                        .border-solid.border.border-white.my-4
                        button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                    .text-ui-typo.mt-4 *Este producto puede también comercializarse en empaque colectivo con los otros sabores de la línea Snack Mix (Piña, Kiwi o Papaya)
            .border-solid.border.border-gray-400.my-4
            .flex.justify-center
                //- h2.text-ui-gray.text-3xl PRUEBA OTROS DE NUESTROS PRODUCTOS
            LayoutSliderProduct
</template>
<script>
import LayoutSliderProduct from "~/components/LayoutSliderProduct"
export default {
    components:{
        LayoutSliderProduct
    }
}
</script>
<style lang="scss" scoped>
    .product{
        &__title{
            
            font-family: 'Zilla Slab';
        }
    }
</style>