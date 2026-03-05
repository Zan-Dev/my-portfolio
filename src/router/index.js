import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";



const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: { title: 'Ahmad Fauzan - Portofolio'}
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('@/views/ProjectsView.vue'),
            meta: { title: 'Projects — Ahmad Fauzan' }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue'),
            meta: { title: 'About — Ahmad Fauzan' }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('@/views/NotFoundView.vue'),
            meta: { title: '404 — Page Not Found' }
        }
    ],      
})

router.afterEach((to) => {
    document.title = to.meta.title || 'Ahmad Fauzan - Portofolio'
})

router.afterEach((to) => {
  document.title = to.meta.title ?? 'Portfolio'
})

export default router