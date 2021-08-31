import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/catalog",
    name: "Catalog",
    component: () =>
        import(/* webpackChunkName: "catalog" */ "../views/Catalog.vue"),
    props: true,
    children: [
        {
            path: "/:page",
            name: "CatalogPage",
            component: () =>
                import(/* webpackChunkName: "catalogPage" */ "../views/CatalogPage.vue"),
            props: true
        },
    ],
},
{
    path: "/characters/:slug",
    name: "Character",
    component: () =>
        import(/* webpackChunkName: "character" */ "../views/Character.vue"),
    props: true
},
{
    path: "/",
    redirect: "/catalog",
  }, 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;



