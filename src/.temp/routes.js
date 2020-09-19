const c1 = () => import(/* webpackChunkName: "page--src--templates--product-vue" */ "/Users/sergioramos/Development/Projects/fun-fruit/src/templates/Product.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--category-vue" */ "/Users/sergioramos/Development/Projects/fun-fruit/src/templates/Category.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/sergioramos/Development/Projects/fun-fruit/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/sergioramos/Development/Projects/fun-fruit/src/pages/Index.vue")

export default [
  {
    path: "/nut-house/snack-miguelito-spicy-fruit-mix/",
    component: c1
  },
  {
    path: "/nut-house/snack-miguelito-spicy-trail-mix/",
    component: c1
  },
  {
    path: "/nut-house/snack-spicy-fruit-mix-25g/",
    component: c1
  },
  {
    path: "/nut-house/snack-spicy-trail-mix-25g/",
    component: c1
  },
  {
    path: "/nut-house/snack-mix-cereza/",
    component: c1
  },
  {
    path: "/nut-house/snack-mix-kiwi/",
    component: c1
  },
  {
    path: "/nut-house/snack-mix-papaya/",
    component: c1
  },
  {
    path: "/nut-house/snack-mix-piña/",
    component: c1
  },
  {
    path: "/nut-house/spicy-fruit-mix/",
    component: c1
  },
  {
    path: "/nut-house/spicy-trail-mix/",
    component: c1
  },
  {
    path: "/nut-house/nuez-de-la-india-tostada-y-salada/",
    component: c1
  },
  {
    path: "/nut-house/nuez-de-la-india-con-chipotle/",
    component: c1
  },
  {
    path: "/nut-house/pistache-tostado-y-salado/",
    component: c1
  },
  {
    path: "/nut-house/nuez-de-la-india-1/",
    component: c1
  },
  {
    path: "/nut-house/nuez-de-la-india-chipotle/",
    component: c1
  },
  {
    path: "/nut-house/nuez-pecanera-mitades-con-chipotle/",
    component: c1
  },
  {
    path: "/nut-house/mezcla-de-frutos-y-nueces/",
    component: c1
  },
  {
    path: "/nut-house/mezcla-de-higo-y-nueces/",
    component: c1
  },
  {
    path: "/nut-house/nuez-de-la-india/",
    component: c1
  },
  {
    path: "/nut-house/nuez-pecanera-en-mitades/",
    component: c1
  },
  {
    path: "/nut-house/pistache-tostado/",
    component: c1
  },
  {
    path: "/nut-house/nueces-mixtas-tostadas/",
    component: c1
  },
  {
    path: "/nut-house/nuez-pecanera-chipotle/",
    component: c1
  },
  {
    path: "/nut-house/nuez-pecanera-mitades/",
    component: c1
  },
  {
    path: "/nut-house/mango-enchilado-1/",
    component: c1
  },
  {
    path: "/nut-house/mango-enchilado/",
    component: c1
  },
  {
    path: "/nut-house/almendra-entera/",
    component: c1
  },
  {
    path: "/category/:slug/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
