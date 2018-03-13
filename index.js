Vue.component('my-component',{
    props:['content'],
    template:'<div>{{content}}</div>'
})
new Vue({
    el:'#app',
    data:{
        message:'hello',
        title:'首页',
        isshow:'false',
        courses:['html','css','js']
    },
    methods:{
         showmessage(){
             console.log(this.message)
         }
    }
})