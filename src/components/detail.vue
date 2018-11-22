<template>
	<div class="main">
		<img :src="imgsrc" alt="">
		<div class="intro">
			<p class="price">￥
				<span class="nowprice">{{data.cprice}}</span>
				<span class="oprice">{{data.oprice}}</span>
				<span class="free">包邮</span>
				<span class="number">{{data.join_number}}</span>
			</p>
			<p class="langname">{{name}}</p>
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
			<div class="footfour">
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
				id:"90166308",
				name:null,
				imgsrc:null,
				count:0
			}
		},
		mounted(){
			this.id=this.$route.params.id
			axios.get("/api/getMemberAboutInfo?goods_id=90166308").then(res=>{
				this.data = res.data.skudata.info;
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