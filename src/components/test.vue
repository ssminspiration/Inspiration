<template>
    <div>Test</div>
</template>

<script lang="ts">
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    @Component
    export default class Test extends Vue{
        @Prop({default:false}) private isCollapse!: boolean;
        private name: string = 'lucy';
    }

   
</script>

<style>

</style>