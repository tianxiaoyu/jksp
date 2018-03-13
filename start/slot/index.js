const Child={
    template:`
       <div>
         <slot :msg="childMessage">default</slot>
       </div>
    
    `,
    data:()=>{
        return {
            childMessage:'test'
        }
    }
}
new Vue({
    el:'#app',
    template:`
     <child>
      <template slot-scope="props">
       {{message}}
       {{props.msg}}  
      
      </template>
     </child>
    `,
    data:{
        message:'text'
    },
    components:{
        Child
    }

})