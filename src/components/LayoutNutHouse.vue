<template lang="pug">
    section
        .container.my-16
            .flex.justify-between.my-12
                h2.text-3xl.text-ui-gray.my-12.text-center TODOS LOS PRODUCTOS
            .flex.flex-col.sm_flex-row.justify-around
                .block.w-full(class="sm_w-1/3")
                    h2.text-4xl.text-ui-gray THE NUT HOUSE
                    p.text-xl.text-ui-typo Deliciosa línea premium de semillas y frutas secas empacadas, bajas en calorías y sin sal.
                    p.text-xl.text-ui-typo.my-3 #[b Sabías que...] Además de ser riquísimos, los frutos secos ayudan a reducir los niveles de colesterol, a perder peso y a prevenir el deterioro cognitivo. ¡Se volverán tus favoritos!
                .block.w-full(class="sm_w-2/3")
                    .flex.flex-col
                        .flex.justify-center.sm_justify-around.flex-row.flex-wrap
                            .product.w-full.block.my-4(class="md_w-1/3")
                                g-image.mx-auto(src="@/assets/images/products/product-1.png")
                                p.text-center.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                            .product.w-full.block.my-4(class="md_w-1/3")
                                g-image.mx-auto(src="@/assets/images/products/product-1.png")
                                p.text-center.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                            .product.w-full.block.my-4(class="md_w-1/3")
                                g-image.mx-auto(src="@/assets/images/products/product-1.png")
                                p.text-center.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                            .product.w-full.block.my-4(class="md_w-1/3")
                                g-image.mx-auto(src="@/assets/images/products/product-1.png")
                                p.text-center.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                            .product.w-full.block.my-4(class="md_w-1/3")
                                g-image.mx-auto(src="@/assets/images/products/product-1.png")
                                p.text-center.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                            .product.w-full.block.my-4(class="md_w-1/3")
                                g-image.mx-auto(src="@/assets/images/products/product-1.png")
                                p.text-center.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]

</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    
</style>