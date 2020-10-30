<template lang="pug">
    Layout
        .container.my-8
            .flex.justify-around.flex-col.items-center(class="sm_flex-row")
                g-image.object-contain(:src="$context.images", alt="alt",class="w-1/2")
                .block.w-full(class="sm_w-2/5")
                    .bg-ui-green.pb-4.pt-12.px-4.sm_px-16
                        h2.product__title.text-white.text-3xl {{$context.title}}
                        p.text-white {{$context.description}}
                        .border-solid.border.border-white.my-4
                        .flex.justify-around
                            .block(v-if="$context.description.length > 1")
                                p.text-white.font-bold Info. Nutrimental
                                ul
                                    li.text-white Contenido energético
                                    li.text-white Proteínas (g)
                                    li.text-white Carbohidratos totales (g)
                                    li.text-white Azúcares (g)
                                    li.text-white Fibra dietética (g)
                                    li.text-white Lípidos (g)
                                    li.text-white Grasas saturadas (g)
                                    li.text-white Sodio (mg)
                                    li.text-white Grasas Trans (g)
                                    li.text-white Azucares añadidos (g)
                            .block
                                p.text-white.font-bold(v-if="$context.description.length > 1") Por cada 100g
                                ul
                                    li.text-white {{$context.info[0]}}
                                    li.text-white {{$context.info[1]}}
                                    li.text-white {{$context.info[2]}}
                                    li.text-white {{$context.info[3]}}
                                    li.text-white {{$context.info[4]}}
                                    li.text-white {{$context.info[5]}}
                                    li.text-white {{$context.info[6]}}
                                    li.text-white {{$context.info[7]}}
                                    li.text-white {{$context.info[8]}}
                                    li.text-white {{$context.info[9]}}
                        .border-solid.border.border-white.my-4
                        button(v-if="$context.categorySlug === 'nut-house'").btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-contain.align-bottom(src="@/assets/images/amazon-logo.svg")]
                        button(v-else).btn-whatsapp.block.my-4.mx-auto.text-ui-light.py-2.px-10.rounded #[img.mx-1.inline-block.object-contain.align-center(src="@/assets/images/whatsapp.svg")] Pedir ahora
                    .text-ui-typo.mt-4(v-if="$context.id<7") *Este producto puede también comercializarse en empaque colectivo con los otros sabores de la línea Snack Mix (Piña, Kiwi o Papaya)
            .border-solid.border.border-gray-400.my-4
            .flex.justify-center
            LayoutSliderRandom
</template>
<script>
import LayoutSliderRandom from "~/components/LayoutSliderRandom"
export default {
    components:{
        LayoutSliderRandom
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