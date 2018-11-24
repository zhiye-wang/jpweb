<template>
<div>
	
	<div class="search">
		<i class="iconfont icon-3column"></i>
		<input placeholder="搜索商品">
	</div>


	<ul class="guci">
      <router-link to="/sidebar/maleclothes" tag="li" activeClass="active">男装</router-link>
      <router-link to="/sidebar/femaleclothes" tag="li" activeClass="active">女装</router-link>
      <router-link to="/sidebar/bag" tag="li" activeClass="active">包</router-link>
      <li>母婴</li>
      <li>鞋子</li>
      <li>箱包</li>
      <li>居家百货</li>
      <li>家电数码</li>
      <li>内衣配饰</li>
      <li>美妆</li>
      <li>运动户外</li>
      <li>美食</li>      
      <li>包</li>


      
    </ul>

	<section>
		<router-view></router-view>
	</section>

	<ul class="pulada">
  		<router-link tag="li" to="/film" activeClass="active">
  			<i class="iconfont icon-similarproduct"></i>
  			<span>首页</span>
  		</router-link>
  		<router-link tag="li" to="/cinema" activeClass="active">
   			<i class="iconfont icon-viewgallery"></i>	
  			<span>分类</span>
  		</router-link>
  		<router-link tag="li" to="/nine" activeClass="active">
   			<i class="iconfont icon-RFQ"></i>
  			<span>购物车</span>
  		</router-link>
  		<router-link tag="li" to="/my" activeClass="active">  			
  			<i class="iconfont icon-bussinessman"></i>
  			<span>我的卷皮</span>
  		</router-link>
  	</ul>
	</div>
</template>
<script>

	export default {
		name:'sidebar',
		data(){
			return{
				
			}
		},

	}
</script>
<style scoped lang="scss">
*{
	margin:0;
	padding:0;
}

.search{
	position:fixed;
	top:10px;
	left:5%;
	width:90%;
	height:30px;
	line-height:30px;
	border:1px solid #ccc;
	i{
		padding-left: 5px;
		display: inline-block;

	}
	input{
		outline:none;
		border:none;
		height:90%;
		width:90%;
}
}

 .guci{

 	position:fixed;
 	left:0;
 	top:60px;

 	color:#333;

list-style: none;
  li{
  	font-size: 14px;
  	padding-left:10px;
    height: 40px;
    line-height:40px;
    width:80px;
    background:#f9f9f9;
    text-align: left;
    border-bottom:1px solid #ccc;
  }
 }
 .active{
  border-left: 2px solid red;
  color:red;
  background:#fff;
 }
 section{
 	background:white;
 	width:75%;
 	height:100%;
 	position: fixed;
 	right:0;
 	margin-top:60px;
 }
 .pulada{
	position:fixed;
	bottom:0px;
	width:100%;
	display: flex;


	
	li{
		list-style: none;
		text-align: center;
		flex: 1;
		width: 25%;
		height: 49px;
		// border: 1px solid #000;
		i{
			font-size: 24px;
			display: block;
		}
		span{
			font-size: 9px;
		}
	}
	.active{
	
	color: red;
	
	
	
}
}
</style>