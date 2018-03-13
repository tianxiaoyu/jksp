const dataSource={
   
    message:'hello',
    imgsrc:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3248517447,4006991638&fm=27&gp=0.jpg',
    imgwidth:"100px",
    imgheight:'100px',
    mes:'首页',
    fontsize:'fontsize',
    fontColor:'fontcolor',
    comments:[
        {comment:'html'},
        {comment:'js'},
        {comment:'html'}
    ],
    courses:['html','css','js'],
    inputvalue:[true,false,true]


}
const vm=new Vue({
   el:'#app',
    data:dataSource,
    beforeCreate(){
        console.log("beforecreate")
    },
    methods:{

    }
})
$(function(){
    $('#input').on('keyup',function(e){
        if(e.keyCode==13){
            render($(this).val())
            $(this).val('')
        }
    })
    $("#container").delegate('span','click',function(){
        $(this).parent().remove()
    })

})
function render(value){
    $("#container li").append('<li>'+value+'<span>X</span>')
}