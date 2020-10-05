<template lang="pug">
    footer.w-full.bg-ui-navy.p-8
        .flex.flex-col.sm_flex-row.justify-around
            .block
                h3.text-ui-light.text-center Certificaciones
                g-image.object-contain.mx-auto.m-5(src="@/assets/images/cert1.svg")
                g-image.object-contain.mx-auto.m-5(src="@/assets/images/cert2.svg")
            .block
                h1.text-ui-light.text-center FUNFRUIT EN TU BANDEJA DE ENTRADA
                p.my-5.text-ui-light.text-center Regístrate para recibir ofertas y nuevo contenido de FUNFRUIT.
                input.my-5.bg-ui-navy.focus_outline-none.focus_shadow-outline.border.border-gray-300.rounded-lg.py-5.px-4.block.w-full.appearance-none.leading-normal(type="email" placeholder="Ingresa tu email")
                .flex.justify-center.flex-col.sm_flex-row.items-center
                    a.m-3.text-ui-light.font-bold(href="") Aviso de privacidad
                    a.m-3.text-ui-light.font-bold(href="") Términos y condiciones
                    a.m-3.text-ui-light.font-bold(href="#") ©FUNFRUIT 2020
            .block
                a(href="/contacto").block.text-ui-light.text-center Contáctanos
                p.text-ui-light.my-5.text-center Únete a nuestro equipo
                p.text-ui-light.my-5.text-center Blog
                .flex.justify-center
                    img.mx-3(src="@/assets/images/facebook.svg", alt="alt")
                    img.mx-3(src="@/assets/images/instagram.svg", alt="alt")
                    img.mx-3(src="@/assets/images/twitter.svg", alt="alt")
                img.mx-auto.m-4(src="@/assets/images/concept.svg", alt="alt")
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

</style>