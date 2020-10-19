<template lang="pug">
    Layout
        .blog__hero.flex.justify-center.items-center.relative
            .block 
                h2(class="sm_w-full").mx-auto.sm_text-5xl.text-2xl.text-white.text-center.align-middle.mt-2.px-4.uppercase FUNFBLOG
        LayoutBlog
</template>
<script>
import LayoutBlog from '@/components/LayoutBlog'
export default {
    components:{
        LayoutBlog
    }
}
</script>
<style lang="scss" scoped>
    .blog{
        &__hero{
            background: #41427D;
            height: 35vh;
        }
    }
</style>