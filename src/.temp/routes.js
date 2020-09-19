const c1 = () => import(/* webpackChunkName: "page--src--pages--nut-house-vue" */ "/Users/sergioramos/Development/Projects/fun-fruit/src/pages/NutHouse.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--detail-vue" */ "/Users/sergioramos/Development/Projects/fun-fruit/src/pages/Detail.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--category-vue" */ "/Users/sergioramos/Development/Projects/fun-fruit/src/templates/Category.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/sergioramos/Development/Projects/fun-fruit/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/sergioramos/Development/Projects/fun-fruit/src/pages/Index.vue")

export default [
  {
    path: "/nut-house/",
    component: c1
  },
  {
    path: "/detail/",
    component: c2
  },
  {
    path: "/category/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
