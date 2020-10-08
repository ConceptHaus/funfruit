<template lang="pug">
    section
        .flex.flex-col.justify-center.items-center.my-10.hunter
            h3(class="sm_w-1/2 w-full").text-ui-typo.sm_text-2xl.text-lg.text-center ¡Únete al equipo Fun Fruit! Consulta nuestras vacantes y encuentra la ideal para ti.
            form.mx-auto.my-6(class="w-full sm_w-1/2")
                .flex.flex-wrap.p-4.sm_p-0.sm_my-10.sm_px-10
                    .w-full.px-3.mb-6
                        input(placeholder="Buscar vacantes disponibles").hunter__input.form-input.w-full.border-gray-500.px-4.py-3
            hr(class="sm_w-2/3 w-full").border-solid.border-gray-500
            //- h2(class="sm_w-1/2 w-full").hunter__h2.my-16.sm_text-3xl.text-xl.text-ui-typo.uppercase.text-center Ingresa la vacante que te interese en el buscador
            .flex.flex-col.my-4.sm_px-0.px-4(class="sm_w-1/2 w-full")
                details
                    summary.mb-10.text-2xl.py-4.border-b.border-grey-lighter.flex.items-center  Vacante X #[button.ml-auto #[svg.fill-current.opacity-75.w-6.h-6.mr-1(viewBox="0 0 20 20") #[path(d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z")]]]
                    .mt-4.leading-normal.text-md.flex.flex-col.sm_flex-row.items-center
                        .text-base Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor diam adipiscing Tincidunt nullam scelerisque. Praesent in bibendum laoreet placerat curabitur Ac, sagittis risus, mauris dictum volutpat nec pretium tortor, vestibulum. 
                        button(class="w-2/3" @click="showModal=true").text-xl.block.my-5.mx-auto.bg-ui-blue.text-white.py-3.px-4.rounded Aplicar
                details
                    summary.mb-10.text-2xl.py-4.border-b.border-grey-lighter.flex.items-center  Vacante X #[button.ml-auto #[svg.fill-current.opacity-75.w-6.h-6.mr-1(viewBox="0 0 20 20") #[path(d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z")]]]
                    .mt-4.leading-normal.text-md.flex.flex-col.sm_flex-row.items-center
                        .text-base Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor diam adipiscing Tincidunt nullam scelerisque. Praesent in bibendum laoreet placerat curabitur Ac, sagittis risus, mauris dictum volutpat nec pretium tortor, vestibulum. 
                        button(class="w-2/3" @click="showModal=true").text-xl.block.my-5.mx-auto.bg-ui-blue.text-white.py-3.px-4.rounded Aplicar
                details
                    summary.mb-10.text-2xl.py-4.border-b.border-grey-lighter.flex.items-center  Vacante X #[button.ml-auto #[svg.fill-current.opacity-75.w-6.h-6.mr-1(viewBox="0 0 20 20") #[path(d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z")]]]
                    .mt-4.leading-normal.text-md.flex.flex-col.sm_flex-row.items-center
                        .text-base Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor diam adipiscing Tincidunt nullam scelerisque. Praesent in bibendum laoreet placerat curabitur Ac, sagittis risus, mauris dictum volutpat nec pretium tortor, vestibulum. 
                        button(class="w-2/3" @click="showModal=true").text-xl.block.my-5.mx-auto.bg-ui-blue.text-white.py-3.px-4.rounded Aplicar
                details
                    summary.mb-10.text-2xl.py-4.border-b.border-grey-lighter.flex.items-center  Vacante X #[button.ml-auto #[svg.fill-current.opacity-75.w-6.h-6.mr-1(viewBox="0 0 20 20") #[path(d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z")]]]
                    .mt-4.leading-normal.text-md.flex.flex-col.sm_flex-row.items-center
                        .text-base Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor diam adipiscing Tincidunt nullam scelerisque. Praesent in bibendum laoreet placerat curabitur Ac, sagittis risus, mauris dictum volutpat nec pretium tortor, vestibulum. 
                        button(class="w-2/3" @click="showModal=true").text-xl.block.my-5.mx-auto.bg-ui-blue.text-white.py-3.px-4.rounded Aplicar
        t-modal.p-5(v-model="showModal")
            template(v-slot:default)
                form(name="form" class="w-full")
                    .flex.flex-wrap.p-4.sm_p-0.sm_my-10.sm_px-10
                        .w-full.px-3.mb-6
                            label.block.text-ui-typo.text-base.mb-2 Nombre completo #[span.text-red-600 *]
                            input.py-3.px-4.mb-1.w-full.form-input.border-ui-typo(name="name")
                        .w-full.px-3.mb-6(class="sm_w-1/2")
                            label.block.text-ui-typo.text-base.mb-2 Correo electrónico #[span.text-red-600 *]
                            input.py-3.px-4.mb-1.w-full.form-input.border-ui-typo(name="name")
                        .w-full.px-3.mb-6(class="sm_w-1/2")
                            label.block.text-ui-typo.text-base.mb-2 Teléfono #[span.text-red-600 *]
                            input.py-3.px-4.mb-1.w-full.form-input.border-ui-typo(name="name")
                        .w-full.px-3.mb-6
                            label.block.text-ui-typo.text-base.mb-2 Adjunta tu CV #[span.text-red-600 *]
                            select.py-3.px-4.mb-1.w-full.form-select.border-ui-typo(name="name")
                                option Vacante X
                                option Vacante X
                                option Vacante X
                                option Vacante X
                                option Vacante X
                        .w-full.px-3.mb-6
                            dropzone(id="dropzone" :options="dropzoneOptions")
            template(v-slot:footer)
                .flex
                    button(class="w-2/3").text-xl.block.my-5.mx-auto.bg-ui-blue.text-white.py-3.px-4.rounded Postularme

</template>
<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
export default {
    data(){
        return{
            showModal: false,
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                dictDefaultMessage:"Subir archivo",
                headers: { "My-Awesome-Header": "header value" }
            }
        }
    },
    mounted(){
        
    },
    components:{
        Dropzone
    }
}
</script>
<style lang="scss" scoped>
    .hunter{
        &__input{
            background-image:url('~@/assets/images/search_icon.svg');
            background-repeat: no-repeat; 
            background-size: 20px;
            background-position-x: 97%;
            background-position-y: 60%;
        }
        &__h2{
            color:#828282;
        }
        details {
            user-select: none;
            & summary svg {transform: rotate(90deg);}
        }
        details[open] {
            & summary svg {
                transform: rotate(-90deg);  

            }
        
        }


        details[open] summary ~ *
        {	animation: ease-opacity-t-b .5s ease}

        summary {
        cursor: pointer;
        }
        svg {
        transition: all 0.3s;
        }
        summary::-webkit-details-marker {
            display: none;
        }

    }
</style>