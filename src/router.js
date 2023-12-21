import { createWebHistory, createRouter } from "vue-router";
//! la ƒ° createWebHistory
//* très commun dans les app SPA (web-mobile-etc...)
//* Permet de créer un historique de navigation (VUE sait tjrs d'ou vous venez)
//* Exemple  : les boutons précèdent dans les app Mobile
// ! la ƒ° createRouter 
//* permet à VUE d'instancier une nouvelle instance router
const routes =  [
    {
        path: "/",
        alias: "/articles",
        name: "articles",
        component: () => import("./components/ArticlesList.vue")
    },
    {
        path: "/add",
        name: "add",
        component: () => import("./components/AddArticle.vue")
    },
    {
        path: "/rqt",
        name: "rqt",
        component: () => import("./components/GetRequest.vue")
    },
    {
        path: "/:patchMatch(.*)",
        name: "notFound",
        component: () => import("./components/NotFound.vue")
    },
    {
        path: "/users",
        name: "usersList",
        component: () => import("./components/UsersList.vue")
    },
    {
        path: "/users/:id",
        name: "user",
        component: () => import("./components/User.vue")
    }
    ];
    
    const router = createRouter({
    history: createWebHistory(),
    routes,
    });
    
    export default router;