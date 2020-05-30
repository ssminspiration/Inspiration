<template>
   <div>
       <h1>我的私信</h1>
   </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator'
@Component
export default class Hello extends Vue{
   created():void{
       console.log("%cprivate组件的$route","font-size:36px;color:red",this.$route)
   }
}
</script>

<style scoped lang='less'>

</style>
