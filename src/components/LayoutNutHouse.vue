<template lang="pug">
    section
        .container.my-16
            .flex.justify-between.my-12
                h2.text-3xl.text-ui-gray.my-12 TODOS LOS PRODUCTOS
            .flex.justify-around
                .block(class="w-1/3")
                    h2.text-4xl.text-ui-gray THE NUTHOUSE
                    p.text-xl.text-ui-typo Deliciosa línea premium de semillas y frutas secas empacadas, bajas en calorías y sin sal.
                    p.text-xl.text-ui-typo.my-3 #[b Sabías que...] Además de ser riquísimos, los frutos secos ayudan a reducir los niveles de colesterol, a perder peso y a prevenir el deterioro cognitivo. ¡Se volverán tus favoritos!
                .block(class="w-2/3")
                    .flex.flex-col
                        .flex.justify-around.flex-row
                            .product.block
                                g-image(src="@/assets/images/products/product-1.png")
                                p.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                            .product.block
                                g-image(src="@/assets/images/products/product-1.png")
                                p.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                            .product.block
                                g-image(src="@/assets/images/products/product-1.png")
                                p.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                    .flex.flex-col
                        .flex.justify-around.flex-row
                            .product.block
                                g-image(src="@/assets/images/products/product-1.png")
                                p.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                            .product.block
                                g-image(src="@/assets/images/products/product-1.png")
                                p.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                            .product.block
                                g-image(src="@/assets/images/products/product-1.png")
                                p.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                    .flex.flex-col
                        .flex.justify-around.flex-row
                            .product.block
                                g-image(src="@/assets/images/products/product-1.png")
                                p.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                            .product.block
                                g-image(src="@/assets/images/products/product-1.png")
                                p.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                            .product.block
                                g-image(src="@/assets/images/products/product-1.png")
                                p.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                    .flex.flex-col
                        .flex.justify-around.flex-row
                            .product.block
                                g-image(src="@/assets/images/products/product-1.png")
                                p.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                            .product.block
                                g-image(src="@/assets/images/products/product-1.png")
                                p.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]
                            .product.block
                                g-image(src="@/assets/images/products/product-1.png")
                                p.text-lg Mix Cereza con sal
                                button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-fit.align-bottom(src="@/assets/images/amazon-logo.svg")]



</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .btn-amazon{
        background: linear-gradient(180deg, #F6D491 10.58%, #F1BA55 74.54%);
        border: 1.04724px solid #9D7D3E;
        img{
            transform: translateY(5px);
        }
    }
</style>