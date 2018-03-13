const vm=new Vue({
    el:'#app',
    data:{
        inputvalue:'',
       list:["item"]
    },
    methods:{
        changes(){
            this.list.push(this.inputvalue);
            this.inputvalue=''
        },
        removeitem(i){
            this.list.splice(i,1)
        }
    }
})