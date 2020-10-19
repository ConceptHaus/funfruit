<template lang="pug">
    section.blog
        .flex.flex-row.justify-center.items-baseline.my-10
            .flex.flex-col.justify-start(class="w-2/3")
                h2.text-ui-gray.text-4xl LO ÚLTIMO
                .article.flex-col.items-center.justify-center
                    g-image(src="@/assets/images/blog_example.png")
                    h3.text-ui-gray.text-2xl.font-bold APRENDE A PREPARAR UNA TARTA CON QUESO, NUECES Y MIEL
                    p.text-ui-navy.text-sm.font-bold RECETAS
                    p.text-ui-typo.text-base(class="w-3/4") Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    a(href="#").text-ui-navy.text-base.font-bold Leer más >
                    p.text-ui-typo.text-xs.font-bold 19/19/2020
                    .border.boder-ui-typo.mt-5(class="w-3/4")
            LayoutSidebar

</template>

<script>
import LayoutSidebar from '@/components/LayoutSidebar'
export default {
    components:{
        LayoutSidebar
    }
}
</script>
<style lang="scss" scoped>

</style>