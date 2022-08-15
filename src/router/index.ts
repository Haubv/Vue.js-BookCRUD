import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import BookEditPage from '../views/book/BookEditPage.vue';
import BookListPage from '../views/book/BookListPage.vue';
import Login from '../views/user/Login.vue'
import Home from '../views/Home.vue'
import Register from '../views/user/Register.vue'
import FileBookListPage from '../views/file_book/FileBookListPage.vue'
import FavoriteBookPage from '@/views/favorite/FavoriteBookPage.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/file-book',
    name : 'view',
    component: FileBookListPage
  },
  {
    path: '/profile',
    name: 'profile',
    // lazy-loaded
    component: () => import('../views/user/Profile.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../components/BoardAdmin.vue')
  },
  {
    path: '/mod',
    name: 'moderator',
    component: () => import('../components/BoardModerator.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../components/BoardUser.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/book',
    name: 'book',
    component: BookListPage,
  },
  {
    path: '/book/:id',
    name: 'book_edit',
    component: BookEditPage,
  },
  {
    path: '/book',
    name: 'book_add',
    component: BookEditPage,
  },
  {
    path: '/fav',
    name : 'favorite',
    component : FavoriteBookPage
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


