// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async actions => {
    const Products = require('./src/data/products.json')
    const collection = actions.addCollection({
      typeName: 'Products'
    })
    for(const product of Products){
      collection.addNode({
        id: product.id,
        slug: product.slug,
        categorySlug: product.categorySlug,
        category: product.category,
        title: product.title,
        description: product.description,
        info: product.info,
        images: product.images,
        link: product.link,

      })
    }
  })

  api.createPages(async ({ graphql, createPage }) => {
    const {data} = await graphql(`{
      allProducts {
          edges{
            node{
              id
              slug
              categorySlug
              category
              title
              description
              info
              images
              link
            }
          }
        }
      }`)
    data.allProducts.edges.forEach(({node})=>{
      createPage({
        path:`/${node.categorySlug}/${node.slug}`,
        component:'./src/templates/Product.vue',
        context:{
          id:node.id,
          title:node.title,
          description:node.description,
          info: node.info,
          images: node.images,
          link:node.link
        }
      })
    })

    data.allProducts.edges.forEach(({node})=>{
      createPage({
        path:`/category/${node.categorySlug}`,
        component:'./src/templates/Category.vue',
        context:{
          id:node.id,
          title:node.title,
          images:node.images,
          link:node.link
        }
      })
    })
    
  })

}
