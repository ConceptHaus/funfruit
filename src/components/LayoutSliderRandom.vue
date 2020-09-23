<template lang="pug">
    section
        .container.sm_mt-16.my-10
            .flex.justify-center
                h2.text-4xl.text-ui-gray.product-title.text-center PRUEBA OTROS DE NUESTROS PRODUCTOS
        .swiper-container.sliderproductrandom.mb-16
            .swiper-wrapper.pb-10
                .swiper-slide.slide(v-for="edge in $static.allProducts.edges" :key="edge.node.id")
                    a(:href="`/${edge.node.categorySlug}/${edge.node.slug}`")
                        g-image.mx-auto.object-contain(:src="edge.node.images")
                        h2.text-xl.block.mx-auto.my-4.text-ui-navy.text-center {{edge.node.title}}
            .swiper-button-prev.products-prev
            .swiper-button-next.products-next

</template>
<static-query>
    query{
        allProducts(limit:10, order:ASC){
            edges{
                node{
                    id
                    title
                    slug
                    categorySlug
                    images
                }
            }
        } 
    }
</static-query>
<script>
import Swiper from 'swiper'
import { gsap } from 'gsap'
import 'swiper/css/swiper.min.css'
export default {
    mounted(){
        this.slider()
    },
    methods:{
        slider(){
            var swiper = new Swiper('.sliderproductrandom',{
                effect:'slide',
                speed:1200,
                slidesPerView:3,
                navigation:{
                    nextEl:'.products-next',
                    prevEl:'.products-prev'
                },
                breakpoints:{
                    320:{
                        slidesPerView:1,
                        spaceBetween:0
                    },
                    720:{
                        slidesPerView:4,
                        spaceBetween:0
                    },
                    1025:{
                        slidesPerView:3,
                        spaceBetween:0
                    },
                    1444:{
                        slidesPerView:4,
                        spaceBetween:0
                    }
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .slide{
        img{
            max-width: 150px;
            min-width: 150px;
            min-height: 150px;
        }
    }
    h2{
        text-transform: uppercase;
    }
    .products-prev,.products-next{
        color: #FFF;
        top: 38%;
        right: 3%;
        transition: .2s all ease;
        @include down-screen(mobile-big){
            right: 5%;
            top: 30%;
        }
        &:hover{
            transform: scale(1.1);
        }
        &::after{
            padding: 1rem 1.5rem;
            background: #BDBDBD;
            opacity: 0.55;
            @include down-screen(mobile-big){
                padding: 0.5rem 0.8rem;
                font-size: 1.3rem;
            }
        }
    }
    .products-prev{
        left:3%;
        @include down-screen(mobile-big){
            left: 5%;
            top: 30%;
        }
    }
</style>