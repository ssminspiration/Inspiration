<template>
   <div>
       <h1>好物推荐</h1>
   </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator'
@Component
export default class Recommend extends Vue{
    created(){
        this.$axios.get('/search?keywords=海阔天空')
        .then((res)=>{
            console.log('%c请求结果','font-size:48px;color:red',res)
        })
        .catch((err)=>{
            console.log(err,'错误')
        })
    }
    mounted(){
        console.log("hello world")
    }
}
</script>

<style scoped lang='less'>

</style>
