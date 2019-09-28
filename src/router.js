import Vue from "vue";
import Router from "vue-router";
import ToDoAdd from "./components/ToDoAdd";
import SignIn from "./components/SignIn";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn
    },
    {
      path: "/home",
      name: "home",
      component: ToDoAdd
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
