<template>
    <div v-if='x'>
        <header class="head">
            <img   :src="this.data[0].sku_info[0].ali_image" alt="">
        </header>
        <div class="merchandise">
            <div class="top">
                商品信息
            </div>
            <div class="con">
                <p>{{this.name}}</p>
                <p class="b">{{this.data[0].shop_info.highlights}}</p>
                <p class="c">￥{{this.data[0].sku_info[0].price}}</p>
            </div>
            <div class="foot">
                <div class="shopping" @click="add">加入购物车</div>
                <router-link :to="{name:'shop'}" class="buy">现在购买</router-link>
            </div>
        </div>
        <div>
            <div class="details">商品详情</div>
            <img :src="this.img" alt="">
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                data:'',
                x:false,
                img:'',
                name:'',
                versions:'',
                msg:'',
                price:''
            }
        },
        created(){
            this.axios.get('api/spus?ids='+this.$route.query.id).then(result=>{
                this.data=result.data.data.list
                if(this.data){
                    this.x=true
                    this.img=this.data[0].sku_info[0].ali_image
                    this.name=this.data[0].sku_info[0].title
                    this.versions=this.data[0].sku_info[0].spec_json[0].show_name
                    this.price=this.data[0].sku_info[0].price
                }
            })
        },
        methods:{
            add(){
                this.msg={img:this.img,name:this.name,versions:this.versions,price:this.price}
                this.$store.commit('add',this.msg)
            }
        
        }
    }
</script>
<style>
.head{
    height: 19em;
    border-bottom: 5px solid #ddd;
    padding: 0 2em 0 2em;
}
img{
    width: 100%;
    height: 100%;
}
.details{
    height: 2em;
    border-bottom:1px solid rgba(221, 221, 221, 0.479);
    font:bold 16px/2em'Helvetica Neue';
    padding-left: .5em;
}
.merchandise{
    height: 12em;
    border-bottom: 5px solid #ddd;
}
.top{
    height: 2.5em;
    border-bottom: 1px solid rgba(221, 221, 221, 0.479);
    font:bold 16px/2.5em'Helvetica Neue';
    padding-left: .5em;
}
.con{
    height: 7em;
    border-bottom: 1px solid rgba(221, 221, 221, 0.479);
    padding-left: .8em;
}
.con p{
    font:bold 16px/30px'Helvetica Neue';
    color:  rgba(0, 0, 0, 0.801);
    margin-bottom: 0;
}
.con .b{
    font: 12px/18px'Helvetica Neue';
    color: #888;
}
.con .c{

    font:bold 18px/50px'Helvetica Neue';
    color:rgb(209, 20, 20);
}
.foot{
    padding-left: .8em;
    
}
.shopping{
    width: 6em;
    height: 2em;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: rgba(255, 60, 0, 0.76);
    text-align: center;
    font:1em/2em'Helvetica Neue';
    float: left;
    margin-right: .2em;
    margin-top:.2em;
    color: #fff;
}
.buy{
    width: 6em;
    height: 2em;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: rgb(0, 162, 255);
    text-align: center;
    font:1em/2em'Helvetica Neue';
    float: left;
    margin-top:.2em;
    color: #fff;
}
</style>

