<template>
  <div id="app">
    <header class="top">
		<div class="left"></div>
		<h1 class="logo" v-if='!this.data'></h1>
		<h1 class="text" v-if='this.data'>{{this.data}}</h1>
		<div class="right" ></div>
	</header>
		<transition>
			<router-view></router-view>
		</transition>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " :to="{name:'home'}">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'news'}">
				<span class="mui-icon mui-icon-bars"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'shop'}">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart "><span class="mui-badge" v-if=$store.state.data.length>{{$store.state.data.length}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'set'}">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
  </div>
</template>
<script>
	export default{
		data(){
			return{
			data:'',
			stc:'123##asd###ss2##'
      }
		},
		updated(){
			if(this.$route.path.slice(1)=='64'){
					this.data='手机'
			}
			if(this.$route.path.slice(1)=='home'){
					this.data=''
			}
			if(this.$route.path.slice(1)=='shop'){
					this.data='购物车'
			}
			if(this.$route.path.slice(1)=='news'){
					this.data='分类'
			}
			if(this.$route.path.slice(1)=='set'){
					this.data='设置'
			}
			
		}
	}
</script>
<style scoped>
.left{
	width: .5rem;
	height: .5rem;
	background: url(./img/下载.png);
	background-size: 100%;
	
}
.text{
	color:#fff;
	font:bold 20px/50px'Helvetica Neue';
	width:.5rem;
	height:.5rem;
}
.logo{
	width:.5rem;
	height:.5rem;
	background: url(./img/logo.png);
	background-size: 100%;
	margin: 0;
}
.right{
	width:.5rem;
	height:.5rem;
	background: url(./img/下载1.png)no-repeat .1rem .15rem;
	background-size:40%;
	
}
.top{
	justify-content:space-between;
	height: .5rem;
	width: 100%;
	background: #000;
	text-align: center;
	position: fixed;
	top:0;
	display: flex;
	z-index:1;
}
.mint-header{
	height:.45rem;
	background: #000;
	
}

#app{
  padding-top:.45rem;
	padding-bottom:.45rem;
  overflow-x: hidden;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%)
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease
}
.mui-bar mui-bar-tab{
	border: 5px solid #000;
}
</style>




