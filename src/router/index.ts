import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',



            children: [

                {
                    path: '/',
                    component: HomeView,
                    meta: {
                        title: 'Birthlink: home',
                    },
                },

                { // About us
                    path: '/about-us/',
                    component: () => import('@/views/content/AboutUs.vue'),
                    meta: {
                        title: 'About Us',
                    }
                },

                {
                    path: '/about-us/history/',
                    component: () => import('@/views/content/OurHistory.vue'),
                    meta: {
                        title: 'Our History',
                    }
                },

                {
                    path: '/about-us/team/',
                    component: () => import('@/views/content/OurTeam.vue'),
                    meta: {
                        title: 'Our Team',
                    }
                },

                {
                    path: '/birthlink-charter/',
                    component: () => import('@/views/content/BirthlinkCharter.vue'),
                    meta: {
                        title: 'Birthlink Charter',
                    }
                },

                {
                    path: '/about-us/thrift-shops/',
                    component: () => import('@/views/content/ThriftShop.vue'),
                    meta: {
                        title: 'Thrift Shop',
                    }
                },

                {
                    path: '/work-for-us/',
                    component: () => import('@/views/content/WorkForUs.vue'),
                    meta: {
                        title: 'Work for us',
                    }
                },

                {
                    path: '/about-us/support-us/',
                    component: () => import('@/views/content/SupportUs.vue'),
                    meta: {
                        title: 'Support us',
                    }
                },

            ]

        },


        {
            path: '/provided_content',
            component: () => import('@/views/content/ProvidedContent.vue'),
            meta: {
                title: 'Provided content',
            }
        },

        {
            path: '/profile',
            component: () => import('@/views/ProfileView.vue'),
            meta: {
                title: 'Profile',
            }
        },

        {
            path: '/subscription',
            component: () => import('@/views/SubscriptionView.vue'),
            meta: {
                title: 'Subscription',
            }
        },


        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (About.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import('../views/AboutView.vue')
        // }
    ]
})

router.beforeEach((to, from, next) => {
    //console.log(to);


    if(typeof(to.meta.title) === 'string'){
        document.title = to.meta.title;
    }

    next();
});

export default router
