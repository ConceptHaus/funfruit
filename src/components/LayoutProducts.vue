<template lang="pug">
section
    .flex.flex-wrap.flex-col.sm_flex-row
        .flex.flex-col.justify-center.items-center.bg-funfruit.w-full(class="sm_w-1/2")
            h2.text-center.text-4xl.text-white FUNFRUIT
            h4.text-center.text-lg.text-white "EL SOL BRILLA PARA TODOS"
            button.text-xl.block.my-4.mx-auto.bg-ui-blue.text-white.py-3.px-6.rounded Conocer nuestra marca
        .flex.flex-col.justify-center.items-center.bg-granel.w-full(class="sm_w-1/2")
            h2.text-center.text-4xl.text-white PRODUCTOS A GRANEL
            h4.text-center.text-center.text-lg.text-white CUIDADOSAMENTE SELECCIONADOS
            button.text-xl.block.my-4.mx-auto.bg-ui-blue.text-white.py-3.px-6.rounded Conocer nuestra marca
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.bg-funfruit{
    min-height: 60vh;
    background-image: url(~@/assets/images/bg-1.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.bg-granel{
    min-height: 60vh;
    background-image: url(~@/assets/images/bg-2.png);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>