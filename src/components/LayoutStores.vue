<template lang="pug">
section
    .container
        .flex.justify-center.my-5
            h2.text-center.text-3xl.text-ui-navy #[span ¡] ENCUÉNTRANOS TAMBIÉN AQUÍ #[span !]
        .flex.justify-center.my-4
            p.text-ui-typo.text-lg Toda nuestra variedad #[b a tu alcance]
    .flex.flex-col.sm_flex-row.justify-around.my-20.items-center
        .card.overflow-hidden.shadow-lg.mb-8.sm_mb-0
            img.px-32.py-16(src="@/assets/images/walmart.svg", alt="alt")
        .card.overflow-hidden.shadow-lg.mb-8.sm_mb-0
            img.px-32.py-16(src="@/assets/images/chedraui.svg", alt="alt")
        .card.overflow-hidden.shadow-lg.mb-8.sm_mb-0
            img.px-32.py-16(src="@/assets/images/amazon.svg", alt="alt")
    .flex.justify-around.my-10.sm_my-20.items-center
        button.text-xl.block.my-4.mx-auto.bg-ui-yellow.text-ui-navy.py-3.px-6.rounded ¡Quiero comprar ahí!
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .card{
        border-radius: 20px;
        box-shadow: 0px 5px 10px rgba(51, 51, 51, 0.16);
        transition: all .2s ease;
        &:hover{
            background: #F2F2F2;
            cursor: pointer;
        }
    }
    h2{
        span{
            font-family: 'BadTyp';
        }
    }
</style>