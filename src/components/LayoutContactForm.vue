<template lang="pug">
    section.container
        form.mx-auto( @submit.prevent="sendForm" name="contactForm" class="w-full sm_w-1/2")
            .flex.flex-wrap.p-4.sm_p-0.sm_my-10.sm_px-10
                .w-full.px-3.mb-6
                    label.block.text-ui-typo.text-base.mb-2 Nombre completo #[span.text-red-600 *]
                    input.py-3.px-4.mb-1.w-full.form-input.border-ui-typo(name="name" :class="validator.name.error" @change="validateInput('name')" v-model="user.name")
                    span(v-if="validator.name.error === 'error'").text-xs.text-red-600 {{validator.name.message}}
                .w-full.px-3.mb-6
                    label.block.text-ui-typo.text-base.mb-2 Correo electrónico #[span.text-red-600 *]
                    input.py-3.px-4.mb-1.w-full.form-input.border-ui-typo(name="email" :class="validator.email.error" @change="validateInput('email')" v-model="user.email")
                    span(v-if="validator.email.error === 'error'").text-xs.text-red-600 {{validator.email.message}}
                .w-full.px-3.mb-6
                    label.block.text-ui-typo.text-base.mb-2 ¿Cómo podemos ayudarte? #[span.text-red-600 *]
                    select.py-3.px-4.mb-1.w-full.form-select.border-ui-typo(name="option_help" :class="validator.option_help.error" @change="validateInput('option_help')" v-model="user.option_help")
                        option(value="" disabled selected) Elige una opción
                        option(value="producto") Producto
                        option(value="compra") Compra
                        option(value="orden") Orden
                        option(value="otro") Otro
                .w-full.px-3.mb-6
                    label.block.text-ui-typo.text-base.mb-2 Por favor escribe tu mensaje aquí #[span.text-red-600 *]
                    textarea.py-3.px-4.mb-1.w-full.form-textarea.border-ui-typo(name="message" rows="5" :class="validator.message.error" @change="validateInput('message')" v-model="user.message")
                    span(v-if="validator.message.error === 'error'").text-xs.text-red-600 {{validator.message.message}}
                .w-full.px-3.mb-6
                    button( type="submit" :disabled="validator.name.error != 'success' || validator.email.error != 'success' ").button__submit.block.my-4.mx-auto.bg-ui-blue.text-white.py-3.px-16.rounded Enviar
                    
</template>
<script>
export default {
    data(){
        return{
            user:{
                name:undefined,
                email:undefined,
                option_help:undefined,
                message:undefined
            },
            validator:{
                name:{
                    error:'',
                    message:'',
                },
                email:{
                    error:'',
                    message:'',
                },
                option_help:{
                    error:'',
                    message:'',
                },
                message:{
                    error:'',
                    message:'',
                }
            }
        }
    },
    methods:{
        sendForm(){
            this.$toasted.show('¡Gracias por contactarnos! 🎉',{position:'top-left',duration:2000,className:'toasted-bubble',type:'success'})
        },
        validateInput(type){
            var _self = this
            switch(type){
                case 'name':
                    if(_self.user.name.length < 1){
                        _self.validator.name.error = 'error'
                        _self.validator.name.message = 'Este campo es requerido'
                    }
                    else if(_self.user.name.length < 2){
                        _self.validator.name.error = 'error';
                        _self.validator.name.message = 'El nombre es demasiado corto';
                    }
                    else{
                        _self.validator.name.error = 'success'
                        _self.validator.name.message = ''
                    }
                    break
                case 'email':
                    if(_self.user.email.length < 1){
                        _self.validator.email.error = 'error'
                        _self.validator.email.message = 'Este campo es requerido'
                    }
                    else if(!_self.user.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                        _self.validator.email.error = 'error'
                        _self.validator.email.message = 'Ingresa un correo válido'
                    }else{
                        _self.validator.email.error = 'success'
                        _self.validator.email.message = ''
                    }
                    break
                case 'option_help':
                    if(_self.user.option_help.length < 1){
                        _self.validator.option_help.error = 'error'
                        _self.validator.option_help.message = 'Este campo es requerido'
                    }
                    else{
                        _self.validator.option_help.error = 'success'
                        _self.validator.option_help.message = ''
                    }
                    break
                case 'message':
                    if(_self.user.message.length < 1){
                        _self.validator.message.error = 'error'
                        _self.validator.message.message = 'Este campo es requerido'
                    }
                    else{
                        _self.validator.message.error = 'success'
                        _self.validator.message.message = ''
                    }
                    break
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    form{
            input{
                &.error{
                    border: 1px solid #FF0000;
                }
            }
        }
    .button__submit{
            transition: all .2s ease;
            &:hover{
                transform: translateY(-5px);
                cursor: pointer;
            }
            &:disabled{
                opacity: .5;
                cursor: not-allowed;
                &:hover{
                    transform: inherit;
                }
            }
        }
</style>