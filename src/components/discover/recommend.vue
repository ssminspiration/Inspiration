<template>
   <div>
       <h1>好物推荐</h1>
   </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator'
@Component
export default class Recommend extends Vue{
    created():void{
      console.log("%crecommend",'font-size:34px;color:blue',this.$route)
    //   if(this.$route)
    }
    mounted(){
        // console.log("%crecommend",'font-size:34px;color:blue',this.$route)
    }
}
</script>

<style scoped lang='less'>

</style>
