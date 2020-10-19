<template lang="pug">
    Layout
        .container

        section
            article.container
                g-image.my-4(:src="$page.strapiArticle.image.url" :alt="$page.strapiArticle.title")
                .article-body
                        VueShowdown(:markdown="$page.strapiArticle.content" flavor="github" :options="{ emoji: true }")
</template>
<page-query>
query ($id: ID!) {
strapiArticle(id: $id) {
    title
    content,
    slug,
    image {
        url
    },
    published_at
}
}
</page-query>
<style lang="scss" scoped>
    .article-body{
        font-size: 1.1rem;
        line-height: var(--line-height);
        white-space: pre-line;
        margin: 5rem 0;
    }
</style>