<template lang="pug">
    .w-full.hidden.sm_block(v-if="showbanner")
        .flex.item-center.justify-center.p-5.bg-ui-yellow
            p.text-ui-gray.text-center #[b ¡The Nut House llegó a Amazon!] Pide tu #[b producto] preferido.
</template>
<script>
export default {
    data(){
        return{
            showbanner:false
        }
    },
    mounted(){
        if(this.$route.name === 'home'){
            this.showbanner = true
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>