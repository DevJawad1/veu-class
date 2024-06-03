import {createWebHistory, createRouter} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/about/About.vue'
import Mission from '../views/about/Mission.vue'
import Ourcompany from '../views/about/Ourcompany.vue'
import Userpage from '../views/Userpage.vue'
import Todo from '../views/Todo.vue'
import Recipe from '../views/Recipe.vue'
import Notfound from '../views/Notfound.vue'
const routes=[
    {path:"/", name:'home',component:Home},

    {path:"/aboutus", name:"about", component:About, children:[
        {path:"mission", name:'mission',component:Mission},
        {path:"ourcompany", name:'company',component:Ourcompany},
    ]},

    {path:`/user/:name/post/:id`, name:"user", component:Userpage},
    {path:`/todo`, name:"todo", component:Todo},
    {path:`/recipe`, name:"recipe", component:Recipe},
    {path:'/:pathMatch:(.*)*', name:"bbbb", component:Notfound},
    {path:'/:pathMatch:(.*)*', name:"bbbb", component:Notfound},
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router