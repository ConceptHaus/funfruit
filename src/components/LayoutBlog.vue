<template lang="pug">
    section.blog
        .flex.sm_flex-row.flex-col.justify-center.items-start.my-10
            .flex.flex-col.justify-start.sm_ml-5.mx-3(class="sm_w-2/3")
                h2.text-ui-gray.text-4xl LO ÚLTIMO
                .article.flex-col.items-center.justify-center(v-for="article in $static.allStrapiArticle.edges" :key="article.node.id")
                    g-image.object-contain.sm_max-w-screen-md(:src="article.node.image.url" :alt="article.node.title")
                    h3.text-ui-gray.text-2xl.font-bold {{ article.node.title }}
                    p.text-ui-navy.text-sm.font-bold RECETAS
                    p.text-ui-typo.text-base(class="sm_w-3/4") #[VueShowdown(:markdown="article.node.content | truncate(110,' ...')" flavor="github" :options="{ emoji: true }")]
                    a(:href="`/blog/${article.node.slug}`").text-ui-navy.text-base.font-bold Leer más >
                    p.text-ui-typo.text-xs.font-bold {{ article.node.published_at }}
                    .border.boder-ui-typo.mt-5(class="sm_w-3/4")
            LayoutSidebar

</template>
<static-query>
query{
    allStrapiArticle(sortBy:"published_at", order:DESC){
        edges{
            node{
                id,
                title,
                content,
                slug,
                image{
                    url,
                    caption
                },
                published_at
            }
        }
    }
}
</static-query>
<script>
import LayoutSidebar from '@/components/LayoutSidebar'
export default {
    components: {
        LayoutSidebar
    },
    filters: {
        truncate: function (text, length, suffix) {
            return text.substring(0, length) + suffix;
        },
    },
}
</script>
<style lang="scss" scoped></style>
