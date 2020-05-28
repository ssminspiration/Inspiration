<template>
    <div class="user-home-wrapper">
        <common-head></common-head>
    </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator';
import CommonHead from './commonHead.vue';
@Component({
    components:{
        CommonHead
    }
})
export default class Hello extends Vue{
    
}
</script>

<style scoped lang='less'>
    .user-home-wrapper{
        width: 100%;
    }
</style>
