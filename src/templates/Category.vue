<template lang="pug">
    Layout
        section
            .container.my-16
                .flex.flex-col.sm_flex-row.justify-between.my-12
                    h2.text-3xl.text-ui-gray.sm_my-10.my-0.text-center TODOS LOS PRODUCTOS
                    .filter.my-12.flex.justify-around.items-center.w-full.flex-col.sm_flex-row(class="sm_w-1/3")
                        p.font-bold.text-ui-typo.sm_text-xl.mb-6.sm_mb-0.text-2xl {{productFilter.length}} artículos
                        select(class="sm_w-2/3" v-model="selectedType" ).w-full.block.appereance-none.bg-gray-200.border.border-gray-200.text-gray-700.py-3.px-4.pr-8.rounded.leading-tight.focus_outline-none.focus_bg-white.focus_border-gray-500
                            option(:value="allProducts") Todos
                            option(v-for="(item,index) in $page.category.filter" :key="index" :value="item") {{item}}
                .flex.flex-col.sm_flex-row.justify-around
                    .block.w-full(class="sm_w-1/3")
                        h2.text-4xl.text-ui-gray {{$page.category.title}}
                        p.text-xl.text-ui-typo {{$page.category.description[0]}}
                        p.text-xl.text-ui-typo.my-3 #[b Sabías que...] {{$page.category.description[1]}}
                    .block.w-full(class="sm_w-2/3")
                        .flex.flex-col
                            .flex.justify-around.sm_justify-around.flex-row.flex-wrap
                                .product.w-full.block.my-4(class="md_w-1/3", v-for="edge in productFilter" :key="edge.node.id")
                                    g-link(:to="`/${edge.node.categorySlug}/${edge.node.slug}`")
                                        g-image.product__image.object-contain.mx-auto(:src="edge.node.images" :alt="edge.node.title")
                                        p.text-center.text-lg {{edge.node.title}} #[a(:href="`/${edge.node.categorySlug}/${edge.node.slug}`") #[img.inline.ml-2(src="@/assets/images/detail.svg", alt="alt")]]
                                        button.btn-amazon.block.my-4.mx-auto.text-ui-typo.py-2.px-4.rounded Comprar en #[img.mx-1.inline-block.object-contain.align-bottom(src="@/assets/images/amazon-logo.svg")]
</template>
<page-query>
query($id: ID!){
    category(id:$id){
        title
        description
        slug
        filter
        belongsTo(sortBy:"id", order:ASC){
            edges{
                node{
                ... on Products{
                    id
                    title
                    categorySlug
                    images
                    slug
                    type
                }
                }
            }
        }
    }

}
</page-query>
<script>
export default {
    data(){
        return{
            allProducts: '',
            selectedType : ''
        }
    },
    computed:{
        productFilter(){
            var self = this
            if(self.selectedType != ''){
                var listFiltered = self.$page.category.belongsTo.edges.filter(function(product){
                    return product.node.type === self.selectedType
                })
                return listFiltered
            }else{
                return self.$page.category.belongsTo.edges
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .product{
        &:hover{
            box-shadow: 0px 5px 10px rgba(51, 51, 51, 0.16);
            border-radius: 12px;
        }
        &__image{
            height: 282px;
        }
    }
</style>