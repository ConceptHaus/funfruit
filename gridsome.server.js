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
        id: project.id,
        slug: project.slug,
        categorySlug: project.categorySlug,
        category: project.category,
        title: project.title,
        description: project.description,
        info: project.info,
        images: project.images,
        link: project.link,

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
    data.Products.edges.forEach(({node})=>{
      createPage({
        path:`/${node.categorySlug}/${slug}`,
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

    data.Products.edges.forEach(({node})=>{
      createPage({
        path:`/category/${categorySlug}`,
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
