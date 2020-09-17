<template lang="pug">
    .flex.flex-col.justify-start
        header.top-0.w-full.bg-ui-background
            LayoutBanner
            #header
                .flex.items-center.justify-center.p-6
                    g-link(to="/")
                        g-image.flex.items-center(src="@/assets/images/logo.svg")
            LayoutMenu
            
</template>
<script>
import LayoutBanner from "~/components/LayoutBanner.vue"
import LayoutMenu from "~/components/LayoutMenu.vue"
export default {
    components:{
        LayoutBanner,
        LayoutMenu
    }
}
</script>
<style lang="scss">
    #header{
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
    }
</style>