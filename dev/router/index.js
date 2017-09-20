import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Charge from '../pages/Charge'
import Shop from '../pages/Mall'
import Login from '../pages/Login'
import Register from '../pages/user/Register'
import FindPassword from '../pages/user/FindPassword'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },{
            path:'/charge',
            name:'Charge',
            component:Charge
        },{
            path:'/mall/:id',
            name:'Mall',
            component:Shop
        },{
            path:'/login',
            name:'Login',
            component:Login
        },{
            path:'/user/register',
            name:'Register',
            component:Register
        },{
            path:'/user/findpassword',
            name:'FindPassword',
            component:FindPassword
        }
    ]
})


