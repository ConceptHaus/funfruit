<template lang="pug">
    .flex.flex-col.justify-center.items-center
        h2.text-ui-typo.text-3xl DESCUBRE
        g-image(src="@/assets/images/blog_desc.png")
        .flex.flex-col.my-4.w-full
            .flex.justify-between.items-center.flex-wrap.my-2
                a(href="#").text-ui-navy.font-bold.text-sm RECETAS
                p.text-ui-navy.text-sm 56 entradas
            .flex.justify-between.items-center.flex-wrap.my-2
                a(href="#").text-ui-navy.font-bold.text-sm SALUD
                p.text-ui-navy.text-sm 21 entradas
            .flex.justify-between.items-center.flex-wrap.my-2
                a(href="#").text-ui-navy.font-bold.text-sm ACTUALIDAD
                p.text-ui-navy.text-sm 32 entradas
            .flex.justify-between.items-center.flex-wrap.my-2
                a(href="#").text-ui-navy.font-bold.text-sm ALIMENTACIÓN
                p.text-ui-navy.text-sm 44 entradas
            .flex.justify-between.items-center.flex-wrap.my-2
                a(href="#").text-ui-navy.font-bold.text-sm CONSEJOS
                p.text-ui-navy.text-sm 26 entradas
            .flex.justify-between.items-center.flex-wrap.my-2
                a(href="#").text-ui-navy.font-bold.text-sm FESTEJOS
                p.text-ui-navy.text-sm 17 entradas
        h2.text-ui-typo.text-3xl.mt-5 RECETAS POPULARES
            .flex.flex-row.justify-around.my-4
                g-image(src="@/assets/images/blog1.png" class="")
                p.text-ui-typo.text-base(class="w-1/2") Linguini con setas shiitake y nueces.
            .flex.flex-row.justify-around.my-4
                g-image(src="@/assets/images/blog2.png" class="")
                p.text-ui-typo.text-base(class="w-1/2") Ensalada de corujas con queso de cabra y nueces.
            .flex.flex-row.justify-around.my-4
                g-image(src="@/assets/images/blog3.png" class="")
                p.text-ui-typo.text-base(class="w-1/2") Brownie de Katharine Hepburn.
</template>
<style lang="scss" scoped>

</style>