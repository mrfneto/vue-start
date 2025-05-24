import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '@/stores'

import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title} - Farmácia UFRJ`

  const store = useStore()

  const user = await store.init()

  if (to.meta.requiresAuth && !user) next({ name: 'login' })
  else if (to.meta.requiresGuest && user) next({ name: 'home' })
  else next()
})

export default router
