<template lang="pug">
section
    .container.my-20
        .flex.justify-center.my-5
            h2.text-center.text-3xl.text-ui-navy ¡ENCUÉNTRANOS TAMBIÉN AQUÍ!
        .flex.justify-center.my-4
            p.text-ui-typo.text-lg Toda nuestra variedad #[b a tu alcance]
    .flex.justify-around.my-20.items-center
        .card.overflow-hidden.shadow-lg.rounded-lg
            img.px-12.py-24(src="@/assets/images/walmart.svg", alt="alt")
        .card.overflow-hidden.shadow-lg.rounded-lg
            img.p-16(src="@/assets/images/chedraui.svg", alt="alt")
        .card.overflow-hidden.shadow-lg.rounded-lg
            img.px-12.py-24(src="@/assets/images/amazon.svg", alt="alt")
    .flex.justify-around.my-20.items-center
        button.text-xl.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-5.rounded ¡Quiero comprar ahí!
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

</style>