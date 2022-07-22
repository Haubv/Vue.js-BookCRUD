import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Dashboard from '../views/DashBoard.vue';
import BookEditPage from '../views/book/BookEditPage.vue';
import BookListPage from '../views/book/BookListPage.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: '/book',
        name: 'book',
        component: BookListPage,
      },
      {
        path: '/book',
        name: 'book_edit',
        component: BookEditPage,
      },
      {
        path: '/book',
        name: 'book_add',
        component: BookEditPage,
      },
      

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


