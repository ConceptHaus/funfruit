<template lang="pug">
  div
    LayoutHeader
    slot
    LayoutFooter
  
</template>


<script>
import LayoutHeader from "~/components/LayoutHeader.vue"
import LayoutFooter from "~/components/LayoutFooter.vue"
export default {
  components:{
    LayoutHeader,
    LayoutFooter
  }
}
</script>
<style lang="scss">
:root {
  --color-ui-background: theme('colors.white');
  --color-ui-typo: #000000;
  --color-ui-gray: #4F4F4F;
  --color-ui-primary: #41427D;
  --color-ui-secondary:#F08828;
  --color-ui-navy:#1C3D79;
  --color-ui-light:#fff;
  --color-ui-blue:#1C79B1;
  --color-ui-green:#225D38;
  --color-ui-yellow:#EFC432;
  scroll-behavior: smooth;
}
html, body{
  font-family: "Zilla Slab";
}
h1,h2,h4{
  font-family: "Funfruit";
}
</style>
