const Home={
    template:`<div> 这是首页</div>`
}
Vue.component(
    'cpmpont',{
        template:`<button>点击</button>`
  
    })
    
const vm = new Vue({
    el:'#app',
    data:{
        msg:123
    },
    methods:{
        handelmsg:function(){
            this.msg=4
        },
        watch:{
            msg(val){
                console(1);
            }
        }
    }
    
     
})
vm.$watch(msg,()=>{console.log(2)})
