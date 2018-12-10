<template>
    <div class="box">
        <ul>
            <router-link :to="{name:'commoditydetails',query:{id:item.id}}" 
                        tag="li" v-for='item in data' :key='item.id'>
                <div class="img">
                    <img :src="item.sku_info[0].ali_image" alt="">
                </div>
                <p>{{item.name|dataFormat}}</p>
                <p class="introduce">{{item.sku_info[0].sub_title|dataFormat}}</p>
                <!-- <div class="tabs">18G+24px</div> -->
                <div class="price">￥{{item.price}}</div>
            </router-link>
        </ul>
    </div>
</template>
<script>
    import Vue from 'vue'
    Vue.filter('dataFormat',(a)=>{
                return a.replace('·','').slice(0,11)+(a.length>11?'...':'')
            })
    export default{
        data(){
            return{
                data:''
            }
        },
        created(){
            this.axios.get('api/spus?category_id='+this.$route.path.slice(1)).then(result=>{
                if(this.$route.path.slice(1)==64){
                    result.data.data.list.splice(-2)
                }
                this.data=result.data.data.list
                
            })
        },
        filters:{
            dataFormat:function(a){
                return a.replace('·','').slice(0,13)+(a.length>13?'...':'')
            }
        }
    }
</script>
<style scoped>

ul,li{
    list-style: none;
    padding: 0;
    margin: 0;
}
.box li{
    height: 160px;
    border-bottom: 1px solid #ddd;
    padding:15px;
}
.img{
    width: 130px;
    height: 130px;
    float: left;
    margin-right: 20px;
}
.img img{
    width:100%;
}
p{
   font:bold 14px/18px '微软雅黑';
   color: #000;
   margin-bottom: 10px;
}
.introduce{
    font: 12px/18px '微软雅黑';
    color: rgba(78, 78, 78, 0.781);
}
.tabs{
    height: 15px;
    background: rgba(60, 193, 255, 0.418);
    border: 1px solid  rgb(60, 193, 255);
    border-radius: 2px;
    float: left;
    text-align: center;
    font:bold .4em/12px'微软雅黑';
    padding: 0 5px 0 5px;
    margin: 0 5px 5px 0;
    color:  rgb(102, 36, 255);
}
.price{
    float: left;
    width: 40%;
    padding-top:30px;
    color:rgb(209, 20, 20);
    font:  1em/1em'微软雅黑';
}
</style>
