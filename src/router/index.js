import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import SignUp from "../components/Signup.vue";
import Login from "../components/Login.vue";
import Add from "../components/Add.vue";
import Update from "../components/Update.vue";


const routes = [
  {
    path: '/',
    name: 'HomeVue',
    component:Home
  },
  {
    path: '/signup',
    name: 'signUp',
    component:SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path: '/update/:id',
    name: 'UpdateVue',
    component:Update
  },
  {
    path: '/add',
    name: 'AddVue',
    component:Add
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
