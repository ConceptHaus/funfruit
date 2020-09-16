const c1 = () => import(/* webpackChunkName: "page--src--pages--nut-house-vue" */ "/Users/sergioramos/Development/Projects/fun-fruit/src/pages/NutHouse.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/sergioramos/Development/Projects/fun-fruit/node_modules/gridsome/app/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/sergioramos/Development/Projects/fun-fruit/src/pages/Index.vue")

export default [
  {
    path: "/nut-house/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
