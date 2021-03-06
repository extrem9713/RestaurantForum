import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Restaurants from '../views/Restaurants.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/restaurants'
  },

  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants'
  },

  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants.vue')
  },

  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () => import('../views/AdminRestaurantsNew.vue')
  },

  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue')
  },

  {
    path:'/admin/user',
    name: 'user',
    component: () => import('../views/AdminUsers.vue')
  },

  {
    path:'/admin/user/edit',
    name: 'user-edit',
    component: () => import('../views/UserEdit.vue')
  },

  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestaurantEdit.vue')
  },

  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('../views/AdminRestaurant.vue')
  },

  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },

  {
    path: '/signup',
    name: 'sign-up',
    component: SignUp
  },

  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },

  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () => import('../views/RestaurantsFeeds.vue')
  },

  {
    path: '/restaurants/top',
    name: 'restaurants-tops',
    component: () => import('../views/RestaurantTop.vue')
  },

  {
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('../views/Restaurant.vue')
  },

  {
    path: '/restaurants/:id/dashboard',
    name: 'restaurantdashboard',
    component: () => import('../views/RestaurantDashboard.vue')
  },

 

  {
    path:'users/:id/edit',
    name:'user-edit',
    component: () => import('../views/UserEdit.vue')
  },  
  
  {
    path: '/users/top',
    name: 'users-top',
    component: () => import('../views/UserTop.vue')
  }, 
 
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
