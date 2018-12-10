<template>
    <div class="shop">
        <div class="mui-input-row mui-checkbox mui-left" v-for='(item,i) in $store.state.data' :key="i">
            <label>
                <div class="img">
                    <img :src="item.img" alt="">
                </div>
                <p class="name">{{item.name|dataFormat}}</p>
                <p class='tag'>{{item.versions}}</p>
                <p class="amount">￥{{item.price}}</p>
                <p class="x">x2</p>
            </label>
            <input name="checkbox" value="Item 2" type="checkbox" checked>
		</div>
          
        
    </div>
</template>
<style>
.name{
    font:bold 14px/18px 'Helvetica Neue';
   color: #000;
   margin-top:.7em;
}

label .tag{
    font: .7em/26px 'Helvetica Neue';
   color: #888;
}
.amount{
    float: left;
    margin-right: .5em;
    float: left;
    color: rgb(209, 20, 20);
    font: bold 1em/1em'Helvetica Neue';
}
.x{
   font:bold .8em/18px 'Helvetica Neue'; 
}
label{
    height: 7em;
    border-bottom:1px solid rgba(221, 221, 221, 0.479);
}
input{
    margin-top:2.4em;
}
.shop .img{
    width: 6em;
    height: 100%;
    float: left;
}
.shop img{
    width: 100%;
    height: 100%;
}
shop.p{
    margin-bottom: 0;
    
}
</style>
