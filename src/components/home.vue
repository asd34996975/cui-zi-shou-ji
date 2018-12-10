<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(item,i) in data" :key="i">
                <img :src="item.src" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <router-link :to="{name:'mobile'}" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" tag="li"><a href="#">
                    <img src="../img/f9a5b8819b634ef59233506226707541.png" alt="">
                    <div class="mui-media-body">手机</div></a></router-link>
            <router-link :to="{name:'air'}" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" tag="li"><a href="#">
                    <img src="../img/e98cfb0a63e8b8c80e5b87ca66bda64c.png" alt="">
                    <div class="mui-media-body">空气净化</div></a></router-link>
            <router-link :to="{name:'parts'}" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" tag="li"><a href="#">
                    <img src="../img/d786768427ca1e26d4fdfaf96a3dce02.png" alt="">
                    <div class="mui-media-body">官方配件</div></a></router-link>
            <router-link :to="{name:'rim'}" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" tag="li"><a href="#">
                    <img src="../img/75892aebb63f998fa9b37e9a18984a98.png" alt="">
                    <div class="mui-media-body">品牌周边</div></a></router-link>
            <router-link :to="{name:'excellent'}" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" tag="li"><a href="#">
                    <img src="../img/0e036713c753445624e7f18c9471d392.png" alt="">
                    <div class="mui-media-body">好物优选</div></a></router-link>
        </ul> 
        <div class="hot">
            <header>
                热销商品
            </header>
            <div class="gd">
                <ul>
                    <li v-for="item in this.hotdata" :key="item.id">
                        <div class="top">
                            <img :src="item.shop_info.ali_image" alt="">
                        </div>
                        <div class="bot">
                            <p class="name">{{item.shop_info.sku_mobile_title|Fli}}</p>
                            <p class="tab">{{item.shop_info.sub_title|Fli}}</p>
                            <p class="price">￥{{item.price}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    
    export default{
        data(){
            return{
                data:'',
                hot:'',
                hotdata:''
            }
        },
        created(){
            this.axios.get('https://resource.smartisan.com/marketing/mobile/index_120fcb7f93fa49871d886b7197a44bf0.json').then(abc=> {
                this.data=abc.data.banner.dataList;
                console.log(abc.data.banner.dataList)
                this.hot=abc.data.floors[0].dataList.join()
                if(this.hot){
                    this.axios.get('api/skus?ids='+this.hot).then(abc=>{
                        this.hotdata=abc.data.data.list
                    })
                }
            })
        },
        filters:{
            Fli:function(a){
                return a.replace('·','').slice(0,7)+(a.length>7?'...':'')
            }
        }
    }
</script>
<style scoped>
.bot .name{
    font: bold .14rem/.24rem'Helvetica Neue';
    color: rgb(70, 70, 70);
    
}
.bot .tab{
    font: .12rem/.14rem'Helvetica Neue';
    color: #888;
}
.bot .price{
    font:.14rem/.24rem'Helvetica Neue';
    color:rgb(209, 20, 20);
}
.gd{
    overflow-x:scroll;
}
li .bot{
    width: 1.3rem;
    padding-left: .1rem;
}
.bot p{
    margin:0px;
}
.gd ul li{
    width: .13rem;
    height:100%;
    float: left;
    margin-right: 1.25rem;
}
li .top{
    border: 1px solid rgba(233, 233, 233, 0.89);
    width: 1.3rem;
    height:1.3rem;
    border-radius: .05rem;
    
}
.gd ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 11rem;
    height: 2.1rem;
    display: flex;
    padding-left: .07rem;
}
.mint-swipe{
    height: 1.5rem;
    margin:.1rem .1rem 0 .1rem;
}
img{
    width: 100%;
    height: 100%;
}
.is-active{
    opacity: .7;
}
.mui-grid-view.mui-grid-9{
    background: #fff;
    border: none;
    border-bottom: 5px solid #ddd;
}
.mui-grid-view.mui-grid-9 img{
    width: .25rem;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
    padding: 0;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font: .12rem/.14rem'Helvetica Neue';
    width: .72rem;
    height: .15rem;
    
}

.mui-col-xs-4{
    width: 20%;
}
.hot{
    height: 2.55rem;
    border-bottom: 5px solid #ddd;
}
.hot header{
    height: .35rem;
    border-bottom: 1px solid rgba(233, 233, 233, 0.89);
    font:bold .18rem/.35rem '微软雅黑';
    color:rgba(39, 39, 39, 0.897);
    padding: 0 .1rem .1rem .1rem;
    margin-bottom: .07rem;
}

</style>
