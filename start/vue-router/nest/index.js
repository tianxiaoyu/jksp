const Home={
    template:`<div>这是首页</div>`
}
const Profile={
    template:`<div>关于我们-介绍</div>`
}
const Photo={
    template:`<div>关于我们-图片</div>`
}
const About={
    template:`<div>
        <div>这是关于我们页面</div>
        <div>
        <router-link to='/about/profile'>介绍</router-link>
        <router-link to='/about/photo'>介绍</router-link>
        </div>
        <div><router-view></router-view></div>
    
    </div>`
    ,
    data:()=>{
        return {
            id:'',
            name:''
        }
    },
    methods(){

    }
} 
const routes=[
    {path:'/',component:Home},
    {path:'/about',component:About,children:[{
        path:'profile',
        component:Profile
    },
    {
        path:'photo',
        component:Photo
    }
]}
]
const router = new VueRouter({
    routes
})
const vm = new Vue({
    el:'#app',
    router
})