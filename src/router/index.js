import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue'
import Comments from '@/pages/Comments.vue'

import TextTools from '@/pages/TextTools.vue'
import ImageTools from '@/pages/ImageTools.vue'
import EncryptTools from '@/pages/EncryptTools.vue'

import Test from '@/components/Test.vue'

import TextToUppercase from '@/pages/cardsPages/TextToUppercase.vue'
import TextToUnicode from '@/pages/cardsPages/TextToUnicode.vue'
import StringToMd5 from '@/pages/cardsPages/StringToMd5.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/Comments', component: Comments },

  { path: '/TextTools', component: TextTools },
  { path: '/ImageTools', component: ImageTools },
  { path: '/EncryptTools', component: EncryptTools },

  { path: '/test', component: Test },
  { path: '/TextToUppercase', component: TextToUppercase},
  { path: '/TextToUnicode', component: TextToUnicode},
  { path: '/StringToMd5', component: StringToMd5}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
