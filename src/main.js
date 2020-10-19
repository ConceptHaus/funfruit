// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'
import VueTailwind from 'vue-tailwind'
import VueShowdown from 'vue-showdown'

export default function (Vue, { router, head, isClient,appOptions }) {
  // Set default layout as a global component
  const settings = {
    TModal: {
      fixedClasses: {
        overlay: 'z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50',
        wrapper: 'z-50 relative mx-auto my-0 max-w-2xl mt-12',
        modal: 'bg-white shadow rounded-lg overflow-hidden relative',
        body: 'p-4',
        header: 'p-4  text-sm font-semibold uppercase text-gray-700',
        footer: 'p-4 text-sm font-semibold uppercase text-gray-700',
        close: 'absolute right-0 top-0 m-3 text-gray-700 hover:text-gray-600',
        closeIcon: 'h-5 w-5 fill-current'
      },
      classes: {
        overlay: 'bg-black ',
        wrapper: '',
        modal: '',
        body: 'p-4',
        header: 'text-gray-700 border-b',
        footer: 'border-t ',
        close: 'text-gray-700 hover:text-gray-600',
        closeIcon: ''
      },
      variants: {
        danger: {
          overlay: 'bg-red-500',
          header: 'border-red-100 text-red-700 border-b',
          footer: 'border-red-100 bg-red-100 border-t  ',
          close: 'text-red-700 hover:text-red-600'
        },
        clean: {
          modal: 'rounded shadow-lg',
          footer: 'bg-gray-100 ',
          body: 'p-4 text-sm text-gray-700',
          close: 'bg-blue-100 p-1 flex items-center justify-center leading-normal rounded-full text-blue-80 hover:bg-blue-200'
        }
      }
    }
  }
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueShowdown)
  if(isClient){
    Vue.use(VueTailwind,settings)
  }
  Vue.use(Vuex)
  appOptions.store = new Vuex.Store({
    state:{
      link:''
    },
    mutations:{
      changeLink (state,newLink) {
        state.link = newLink
      }
    }
  })
}
