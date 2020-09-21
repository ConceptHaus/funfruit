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
    const categories = actions.addCollection('Category')
    collection.addReference('id_category','Category')
    categories.addNode({
        id:'1',
        title:'THE NUT HOUSE',
        filter:['Doy Pack','Vitroleros','Snack'],
        description:['Deliciosa línea premium de semillas y frutas secas empacadas, bajas en calorías y sin sal.','Además de ser riquísimos, los frutos secos ayudan a reducir los niveles de colesterol, a perder peso y a prevenir el deterioro cognitivo. ¡Se volverán tus favoritos! '],
        slug:'nut-house'
      })
    categories.addNode({
        id:'2',
        title:'GRANEL',
        filter:['Frutos secos','Fruta deshidratada','Nueces y semillas'],
        description:['Una gran variedad de frutos y semillas listos para disfrutar.','Nuestros productos a granel están cuidadosamente seleccionados para ofrecerte sólo lo mejor. '],
        slug:'granel'
    })
    categories.addNode({
        id:'3',
        title:'FUNFRUIT',
        filter:['Abarrotes','Fruta en almíbar'],
        description:['Las mejores opciones naturales son Fun Fruit.','Nuestros productos son una opción más para tener una gran alimentación.'],
        slug:'funfruit'
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
        images: require.resolve(product.images),
        link: product.link,
        type:product.type,
        id_category: product.id_category
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
              type
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
          categorySlug:node.categorySlug,
          title:node.title,
          description:node.description,
          info: node.info,
          images: node.images,
          link:node.link,
          id_category:node.id_category
        }
      })
    })
  })

}
