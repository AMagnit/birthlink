import { useRoute, useRouter } from 'vue-router'



export const Helpers = () => {

    /* */

    const  getAllChildRoutes = (route, allChildRoutes = []) => {
        if (route.children && route.children.length > 0) {
            route.children.forEach(child => {
                allChildRoutes.push(child)
                getAllChildRoutes(child, allChildRoutes)
            })
        }
        return allChildRoutes
    }

    const getChildrenRoutes = (parentPath, routes) => {
        const parentRoute = routes.find(route => route.path === parentPath)
        if (parentRoute) {
            return getAllChildRoutes(parentRoute)
        }
        return []
    }

    /* */

    return {
        getChildrenRoutes,
    }
}