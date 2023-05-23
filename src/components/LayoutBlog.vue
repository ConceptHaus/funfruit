<template lang="pug">
    section.blog
        .flex.sm_flex-row.flex-col.justify-center.items-start.my-10
            .flex.flex-col.justify-start.sm_ml-5.mx-3(class="sm_w-2/3")
                h2.text-ui-gray.text-4xl LO ÚLTIMO
                

</template>

<script>
import LayoutSidebar from '@/components/LayoutSidebar'
export default {
    components:{
        LayoutSidebar
    },
    filters:{
        truncate: function (text, length, suffix) {
            return text.substring(0, length) + suffix;
        },
    },
}
</script>
<style lang="scss" scoped>

</style>
