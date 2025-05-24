export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Home', requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: { title: 'Login', requiresGuest: true }
  },
  {
    path: '/departamentos',
    name: 'departments',
    component: () => import('@/views/DepartmentListView.vue'),
    meta: { title: 'Departamentos', requiresAuth: true }
  },
  {
    path: '/departamento',
    name: 'department-create',
    component: () => import('@/views/DepartmentFormView.vue'),
    meta: { title: 'Departamentos', requiresAuth: true }
  },
  {
    path: '/departamento/:id',
    name: 'department-update',
    component: () => import('@/views/DepartmentFormView.vue'),
    meta: { title: 'Departamentos', requiresAuth: true }
  }
]
