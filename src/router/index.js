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

import randomNum from '@/views/random-num/index.vue'
import statisticsWordNum from '@/views/statistics-word-num/index.vue'
import translateDecimal from '@/views/transfate-10-2/index.vue'
import translateText from '@/views/translate-text-2-ascll/index.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Comments', component: Comments },

  { path: '/TextTools', component: TextTools },
  { path: '/ImageTools', component: ImageTools },
  { path: '/EncryptTools', component: EncryptTools },

  { path: '/test', component: Test },
  { path: '/TextToUppercase', component: TextToUppercase },
  { path: '/TextToUnicode', component: TextToUnicode },
  { path: '/StringToMd5', component: StringToMd5 },
  { path: '/random-num', component: randomNum },
  { path: '/statistics-word-num', component: statisticsWordNum },
  { path: '/translate-10-2', component: translateDecimal },
  { path: '/translate-text-2-ascll', component: translateText },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
