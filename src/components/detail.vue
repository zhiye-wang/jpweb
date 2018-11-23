<template>
	<div class="main">
		<img :src="data.goods_pic_url" alt="">
		<div class="intro">
			<p class="price">￥
				<span class="nowprice">{{data.cprice}}</span>
				<span class="oprice">{{data.oprice}}</span>
				<span class="free">包邮</span>
				<span class="number">{{data.join_number}}</span>
			</p>
			<p class="langname">{{name}}</p>
			<ul>
				<li class="discount"> 
					<span v-if="discount[0]" class="discount-title">{{discount[0].title}}</span>
					<span v-if="discount[0]" class="discount-content">{{discount[0].content}}</span>
				</li>
				<li class="promise"> 
					<span>24小时发货</span>
					<span>7天包换</span>
					<span>售后补贴</span>
				</li>
			</ul>
			<ul>
				<li>
					<span>已选择</span> 
				</li>
			</ul>
			<ul>
				<li>
					<span>图文详情</span> 
				</li>
			</ul>
			<div>
				<img v-for="av in sku" :src="av.av_origin_zpic" alt="">
				
			</div>
			
			<div class="shoppingcart" v-if="isShow">
				<div class="shoppingImg">
					<img :src="data.goods_pic_url" alt="">
				</div>
				<span>单价</span>
				<span class="nowprice">{{data.cprice}}</span>
				<span>购买数量</span>
				<button  @click="count++">+</button>
				<span>{{count}}</span>

				<button @click="count===1?1:count--">-</button>
				<p class="makeSure">确定</p>
				<button class="close" @click="isShow=false">x</button>
			</div>
		</div>
		<footer>
			<div class="footfirst">
				<i class="iconfont icon-store"></i>
				<p>首页</p>
			</div>
			<div class="footsecond">
				<i class="iconfont icon-cart"></i>
				<p>购物车</p>
			</div>
			<div class="footthird">
				<p>立即购买</p>
			</div>
			<div class="footfour" @click="isShow=true">
				<p>加入购物车</p>
			</div>
		</footer>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		name:'detail',
		data(){
			return {
				data:{},
				discount:[],
				name:null,
				imgsrc:null,
				count:1,
				sku:[],
				isShow:false
			}
		},
		mounted(){
			console.log(this.$route.params.id.replace(":",""))
			axios.get(`/api/getMemberAboutInfo?goods_id=${this.$route.params.id.replace(":","")}`).then(res=>{
				console.log(res.data)
				this.data = res.data.skudata.info;
				this.discount = res.data.discount.coupon;
				console.log(res.data.skudata.sku)
				this.sku=res.data.skudata.sku;
			}).catch(err=>{
				console.log(err)
			})
			axios.get("/act/timebuy-xrgoodslist").then(res=>{
				var arr = res.data.data.time_tabs;
				for(var i=0;i<arr.length;i++){
					var newarr = arr[i].goodslist;
					for(var j=0;j<newarr.length;j++){
						if(newarr[j].goods_id===this.id){
							this.name = newarr[j].title_long;
							this.imgsrc=newarr[j].pic_url
						}
					}	
				}
			}).catch(err=>{
				console.log(err)
			})
		}
	}
</script>
<style scoped lang="scss">

*{
	margin:0;
	padding:0;
}
ul,li{
	list-style:none;
}
.main{
	background:lightgrey;
}
	img{width:100%;}
	.intro{
		width:365px; 
		height:100px;
		padding-left:10px;
		line-height:40px;
		background:white;
		margin-bottom:10px;
		.price{
			color:red;
			font-size:15px;
			.nowprice{
				font-size:24px;
			}
			.oprice{
				color:grey;
				text-decoration: line-through;
			}
			.free{
				color:white;
				background:red;
				font-size:14px;
			}
			.number{
				float:right;
				margin-right:25px;
				color:grey;
				font-size:14px;
			}
		}
		.langname{
			line-height:20px;
		}
		ul{
			margin-top:20px;
			.discount{
				
				font-size:14px;
				height:30px;
				line-height:30px;
				margin:0 5px;
				border-bottom:1px solid #666;
				.discount-title{
					background: red;
					color: white;
				}
			}
			.promise{
				
				font-size:12px;
				height:30px;
				line-height:30px;
				margin:0 5px;
				
			}
		}
		.shoppingcart{
			width:100%;
			height:300px;
			position:fixed;
			background:white;
			left:0;
			bottom:0;
			z-index:10;
			.shoppingImg{
				width:100px;
				height:100px;
				img{
					width:100%;
					height:100%;
				}
			}
			.makeSure{
				position:absolute;
				bottom:0;
				height:50px;
				background:red;
				width:100%;
				text-align:center;
			}
			.close{
				position:absolute;
				top:0;
				right:0;
			}
		}
		
	}
	footer{
		width:100%;
		height:50px;
		background:white;
		position:fixed;
		left:0;
		bottom:0;
		
		.footfirst,.footsecond,.footthird,.footfour{
			float:left;
			text-align:center;
			color:grey;
			border-right:1px solid lightgrey;
			p{
				line-height:25px;
			}
			i{
				line-height:25px;
			}
		}
		.footfirst{
			width:70px;
			font-size:13px;
		}
		.footsecond{
			width:70px;
		}
		.footthird{
			width:100px;
			p{
				line-height:50px;
			}
		}
		.footfour{
			width:130px;
			background:red;
			color:white;

			p{
				line-height:50px;
			}
		}
	}
</style>