<template>
    <div>Test</div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    @Component
    export default class Test extends Vue{
        @Prop({default:false}) private isCollapse!: boolean;
        private name: string = 'lucy';

        created():void{
            console.log('%c子组件created','font-size:38px;color:blue')
        }

        mounted():void{
            console.log('%c子组件mounted','font-size:36px;color:green')
        }
    }

    
   
</script>

<style>

</style>