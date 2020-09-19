<template lang="pug">
    Layout
        section
            .container.my-16
                .flex.justify-between.my-12
                    h2.text-3xl.text-ui-gray.my-12.text-center TODOS LOS PRODUCTOS
                .flex.flex-col.sm_flex-row.justify-around
                    .block.w-full(class="sm_w-1/3")
                        h2.text-4xl.text-ui-gray {{$page.category.title}}
                        p.text-xl.text-ui-typo Deliciosa línea premium de semillas y frutas secas empacadas, bajas en calorías y sin sal.
                        p.text-xl.text-ui-typo.my-3 #[b Sabías que...] Además de ser riquísimos, los frutos secos ayudan a reducir los niveles de colesterol, a perder peso y a prevenir el deterioro cognitivo. ¡Se volverán tus favoritos!
                    .block.w-full(class="sm_w-2/3")
                        .flex.flex-col
                            .flex.justify-around.sm_justify-around.flex-row.flex-wrap
                                .product.w-full.block.my-4(class="md_w-1/3", v-for="edge in $page.category.belongsTo.edges" :key="edge.node.id")
                                    g-image.product__image.object-contain.mx-auto(:src="edge.node.images" :alt="edge.node.title")
                                    p.text-center.text-lg {{edge.node.title}} #[a(:href="`/${edge.node.categorySlug}/${edge.node.slug}`") #[img.inline.ml-2(src="@/assets/images/detail.svg", alt="alt")]]
                                    button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-contain.align-bottom(src="@/assets/images/amazon-logo.svg")]
</template>
<page-query>
query($id: ID!){
    category(id:$id){
        title
        slug
        belongsTo(sortBy:"id", order:ASC){
            edges{
                node{
                ... on Products{
                    id
                    title
                    categorySlug
                    images
                    slug
                }
                }
            }
        }
    }

}
</page-query>
<script>
export default {

}
</script>
<style lang="scss" scoped>
    .product{
        &:hover{
            box-shadow: 0px 5px 10px rgba(51, 51, 51, 0.16);
            border-radius: 12px;
        }
        &__image{
            min-height: 281px;
        }
    }
</style>