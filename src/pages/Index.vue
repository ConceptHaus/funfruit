<template lang="pug">
    Layout
      LayoutSlider
      LayoutSliderProduct
      LayoutProducts
      LayoutSliderSnack
      LayoutStores
</template>

<script>
import LayoutSlider from "~/components/LayoutSlider"
import LayoutSliderProduct from "~/components/LayoutSliderProduct"
import LayoutSliderSnack from "~/components/LayoutSliderSnack"
import LayoutStores from "~/components/LayoutStores"
import LayoutProducts from "~/components/LayoutProducts"

export default {
  components:{
    LayoutSlider,
    LayoutSliderProduct,
    LayoutSliderSnack,
    LayoutStores,
    LayoutProducts
  }
}
</script>

<style>

</style>
