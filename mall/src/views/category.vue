<template>
    <div id="category">
        <van-search placeholder="商品搜索 共239万款好物" v-model="searchData" />
        
        <van-tree-select 
        :items="items" 
        :main-active-index.sync="active"
        height='calc(100vh - 104px)'
        @click-nav='changeRight'
        >
            <template #content>
                <div class="imgbanner">
                    <img width="100%" height="100%" :src="bannerImg" alt="">
                </div>
                <van-grid :column-num="3">
                    <van-grid-item v-for="(item,index) in subCategoryList" :key='index' :icon="item.wap_banner_url" :text="item.name" :to="'/categoryList/'+item.id" />
                </van-grid>
            </template>
        </van-tree-select>

        <tab-btn></tab-btn>
    </div>
</template>

<script>
import tabBtn from '@/components/tabBtn.vue'
import axios from 'axios'
import api from '@/assets/config/api.js'
export default {
    data(){
        return {
            searchData:'',
            active: 0,
            // items: [{ text: '分组 1' }, { text: '分组 2' }],
            data:{},
            subCategoryList:[],
            bannerImg:''
        }
    },
    async created(){
        let res = await axios.get(api.CatalogList)
        let data = res.data.data
        this.data = data
        console.log(data)
        this.subCategoryList = res.data.data.currentCategory.subCategoryList
        this.bannerImg = this.items[this.active].img_url;

    },
    computed:{
        items:function(){
            //返回出这样一个内容items: [{ text: '分组 1' }, { text: '分组 2' }],
            if(this.data.categoryList==undefined){
                return []
            }else{
                let arr = []
                this.data.categoryList.forEach((item,index)=> {
                    item.text = item.name
                    arr.push(item)
                });
                // console.log(arr)
                return arr;
            }
        }
    },
    methods:{
        changeRight:function(index){
            // console.log(this.active)
            
        }
    },
    watch:{
        active:async function(){
            if(this.items.length!=0){
                let id = this.items[this.active].id
                // console.log(id)
                let res = await axios.get(api.CatalogCurrent,{params:{id}})
                // console.log(res)
                this.subCategoryList = res.data.data.currentCategory.subCategoryList
                this.bannerImg = this.items[this.active].img_url;
                console.log(this.subCategoryList)
            }else{
                return this.subCategoryList = []
            }   
        }
    },
    components:{
        tabBtn
    }
}
</script>

<style lang="less">
   #category{
        .imgbanner{
            width: 100%;
            height: auto;
            box-sizing: border-box;
            padding: 10px;
        }
    }
</style>