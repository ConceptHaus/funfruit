<template lang="pug">
    .menu.flex.items-center.justify-around.p-4
        .element
            g-link(to="/") The Nut House
        .element
            g-link(to="/") Fun Fruit
        .element
            g-link(to="/") Productos a granel
        .element
            g-link(to="/") Acerca de Fun Fruit
        .element
            g-link(to="/") Fundación
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.menu{
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    .element{
        a{
            letter-spacing: 0.08em;
        }
    }
}
</style>
