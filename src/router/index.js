import { createRouter, createWebHistory } from 'vue-router'
import signin from '@/views/signin.vue'
import signup from '@/views/signup.vue'
import addcompany from '@/views/addcompany.vue'
import thedata from '@/views/thedata.vue'

const routes = [{
        path: '/',
        name: 'signin',
        component: signin
    },
    {
        path: '/signup',
        name: 'signup',
        component: signup

    },
    {
        path: '/addcompany',
        name: 'addcompany',
        component: addcompany
    },
    {
        path: '/thedata',
        name: 'thedata',
        component: thedata
    }
    
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router