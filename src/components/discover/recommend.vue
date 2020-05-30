<template>
   <div id="recommed-wrapper">
       <div class="swiperBox">
           <swiper ref="mySwiper" 
            :options="swiperOptions"
            :auto-update="true"
            :auto-destroy="true"
            :delete-instance-on-destroy="true"
            :cleanup-styles-on-destroy="true"
            @ready="handleSwiperReadied"
            @click-slide="handleClickSlide">
                <swiper-slide v-for="(item,index) in swiperData" :key="index">
                    <div class="swiper-img" :style="{backgroundImage:`url(${item.src})`}">
                        {{item.name}}
                    </div>
                </swiper-slide>
                <!-- 分页器 -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
             <!-- 导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
       </div>
       
            
   </div>
</template>

<script lang='ts'>
import {Vue, Component, Prop} from 'vue-property-decorator';
// 本地使用swiper
import {Swiper, SwiperSlide, directive} from "vue-awesome-swiper";
import "swiper/css/swiper.css"

interface IProps {
    autoUpdate ?: boolean;
    autoDestroy ?: boolean;
    deleteInstanceOnDestroy ?: boolean;
    cleanupStylesOnDestroy ?: boolean;
}
@Component({
    components:{
        Swiper,
        SwiperSlide
    }
})
export default class Recommend extends Vue{
    swiperOptions:object = {
        loop:true, //循环模式
        pagination:{
            el:".swiper-pagination"
        },

        // 需要前进后退按钮
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev",
        },
        slidePreView:"auto",
        centerSlides:true,
        spaceBetween:10,
        speed:600,     
    }

    swiperData: Array<object>= [
        {
            src:require('@/assets/img/time.jpeg'),
            name:"侧耳倾听"
        },
        {
            src:require('@/assets/img/fairytales.jpg'),
            name:"月岛雯"
        },
        {
            src:require('@/assets/img/friend.jpg'),
            name:"青梅竹马"
        },
        {
            src:require('@/assets/img/mouse.jpg'),
            name:"小老鼠"
        },
        {
            src:require('@/assets/img/flower.jpg'),
            name:"花"
        },
        {
            src:require('@/assets/img/rain.jpeg'),
            name:"雨"
        },
    ]
    get swiper(){
        return this.$refs.mySwiper['$swiper'];
    }
    handleSwiperReadied(swiper:Swiper):void{
        // console.log("Swiper was mouonted",swiper)
    }
    handleClickSlide(index:number, reallyIndex:number | null):void{
        // console.log("Click slide!",index,reallyIndex)
    }

    created():void{
        
    }
    mounted(){
        // console.log("%crecommend",'font-size:34px;color:blue',this.swiper)
        this.swiper.slideTo(3,2000,false)
    }
}
</script>

<style scoped lang='less'>
    #recommed-wrapper{
        .swiperBox{
            position: relative;
            .swiper-container{
                height: 500px;
                background-color: pink;
                .swiper-slide{
                    .swiper-img{
                        width:100%;
                        height:100%;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;
                    }
                }
            }
        }
        
    }
</style>
