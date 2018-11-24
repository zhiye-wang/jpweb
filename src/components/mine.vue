<template>
	<div class="mine">
		<div class="userCenter">
			<div class="userTop">
				<router-link to="javascript:;" tag="i"><</router-link>
				<span>个人中心</span>
			</div>
			<div class="userBtm">
				<!-- <router-link to="/register" tag="a" >注册</router-link> -->
				<a href="/register">注册</a>
				<span>|</span>
				<router-link to="/login" tag="a" >登录</router-link>
			</div>
			
		</div>

		<div class="mineList">
				<router-link to="https://m.juanpi.com/user/?select=4_1" tag="span">我的订单</router-link>
				<router-link to="https://m.juanpi.com/user/?select=4_1" tag="span">全部订单</router-link>
		</div>

		<div class="userItem">
			<div class="ic">
				<i class="iconfont icon-folder"></i>
				<i class="iconfont icon-account"></i>
				<i class="iconfont icon-machinery"></i>
				<i class="iconfont icon-dollar"></i>
			</div>

			<div class="tit">
				<span>待付款</span>
				<span>待成团</span>
				<span>待收货</span>
				<span>退款</span>
			</div>

		</div>

		<div class="userItems">
			<router-link to="#" tag="div">我的优惠券</router-link>
			<router-link to="#" tag="div">我的收藏</router-link>
			<router-link to="#" tag="div">我的拼团</router-link>
			<router-link to="#" tag="div">我的免单券</router-link>
			<router-link to="#" tag="div">借钱</router-link>
		</div>

		<div class="return_pc">
			<router-link to="/home" tag="span" >返回首页</router-link>
			<router-link to="javascript:;" tag="span" >客户端</router-link>
			<router-link to="javascript:;" tag="span" >电脑版</router-link>
		</div>
		
		<div class="footer">

			<div class="fotter_info">
				<router-link  to="/home" class="iconfont icon-rfq" tag="p"></router-link>
				<span>首页</span>
			</div>
			<div class="fotter_info">
				<router-link  to="/sidebar" class="iconfont icon-viewgallery" tag="p"></router-link>
				<span>分类</span>
			</div>
			<div class="fotter_info">
				<router-link  to="/shoppingcart" class="iconfont icon-cart" tag="p"></router-link>
				<span>购物车</span>
			</div>
			<div class="fotter_info">
				<router-link  to="i" class="iconfont icon-accountfilling" tag="p"></router-link>
				<span>我的卷皮</span>
			</div>
		</div>
	</div>
</template>
a
<script>
	export default {
		name:'mine'
	}
</script>

<style scoped lang="scss">

	.mine{
		width:100%;
		height:769px;
		border:1px solid red;
		.userCenter{
			width:100%;
			height:160px;
			background:#fd4c40;
			list-style: noned;
			 overflow:hidden;
			
			.userTop{
				padding-top:10px;
				color:white;

				font-size:22px;
				span{
					padding-left:116px;					
				}				
			}
			.userBtm{
				color:white;
				text-decoration:none;				
				font-size:20px;
								
				padding-top:50px;	
				text-align: center;
				a{
					padding:20px;
					color:white;
					 text-decoration:none
				}
				
			}
			
		}
		.mineList{
				width:90%;
				border-bottom:2px #ccc solid;
				height:58px;
				margin:0 auto;
				color:#a2a2a2;
				display:flex;
				justify-content:space-between;
				align-items:center;

		}
		.userItem{
			height:100px;
			border-bottom:12px #f4f4f8 solid;
			width:90%;
			margin:0 auto;
			text-align:center;
			color:#9a9a9a;
			.ic{
				display:flex;
				justify-content:space-between;
				align-items:center;
				padding-top:20px;
				
				i{
					font-size:30px;
				}

			}
			.tit{
				display:flex;
				justify-content:space-between;
				align-items:center;	

				span{
				line-height:70px;
				
				
			}
			
			}
		}

		.userItems{
			width:90%;
			line-height:59px;
			margin:0 auto;
			border-bottom:14px solid #f4f4f8;
			div{
				height:59px;
				border-bottom:1px solid #f4f4f8;
				text-indent: 2ex;	
			}
		}

		.return_pc{
			display:flex;
			justify-content:space-around;
			align-items:center;
			height:42px;
			span{
				font-size:12px;
				color:#666;
				line-height: 42px;
			}

		}
		.footer{
			position: fixed;
			bottom:0;
			left:0;
			width:100%;
		
			height:60px;
			margin: 0 auto;
			border-top:1px solid #ebebeb;
			display:flex;
			justify-content:space-around;
			align-items:center;
			background:white;
			.fotter_info{
				p{
					text-align: center;
					color:#bbb;
					font-size:24px;
				}
				span{
					font-size:12px;
				}


			}

		}

	}
	ul li{

	}
</style>

