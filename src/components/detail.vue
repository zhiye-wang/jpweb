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

		<div class="promise clear">
			<p>
				<span class="dot">·</span>
				<span >24小时发货</span>
			</p>
			<p>
				<span class="dot">·</span>
				<span >7天包邮</span>
			</p>
			<p>
				<span class="dot">·</span>
				<span >售后补贴</span>
			</p>
			<p class="last">
				<span class="lastdot" @click="handleclick">···</span>
			</p>
		</div>

		<div class="choose">
			<span>请选择：颜色、尺码</span>
			<span>></span>
		</div>

		<div class="mystore">
			<span>我的商店</span>
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

			
			<div v-if="showing" class="mainhandle">
				<div class="handle">
					<div class="first">
						<img :src="imgsrc" alt="">
						<span>￥{{data.cprice}}</span>
						<span class="notshow" @click="notshowing">×</span>
					</div>
					<div>
						<span class="buy">购买数量</span>
						<span class="do add" @click="adding">+</span>
						<span class="num">{{num}}</span>
						<span class="do del" @click="deling">-</span>
					</div>
					<div class="handlebutton" @click="confirm">确认</div>
				</div>
			</div>


			<div class="footfour">
				<p @click="handleclick">加入购物车</p>
			</div>
		</footer>
	</div>
</template>

<script>
	import axios from "axios"
	import {getCookie} from "../module/cookie.js"
	/*import Swiper from "swiper"
	import "swiper/dist/css/swiper.css"*/
	export default {
		name:'detail',
		data(){
			return {
				data:{},
				id:"90166308",
				name:null,
				imgsrc:null,
				showing:false,
				num:0,
				username:null
			}
		},
		mounted(){
			this.id=this.$route.params.id

			console.log("cookie",getCookie());

			/*axios.get("/ddd/shoppingcart").then(res=>{
				console.log("res")
				console.log(res)
			}).catch(err=>{
				console.log("err");
				console.log(err)
			})*/

			axios.get("/api/getMemberAboutInfo?goods_id="+this.id).then(res=>{
				console.log(res.data.skudata)
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
		},
		methods:{
			handleclick(){
				this.showing = true
			},
			notshowing(){
				this.showing = false
			},
			confirm(){
				console.log("button")

				/*axios.get('/ddd/shoppingcart').then(res=>{
					console.log("res")
					console.log(res)
				}).catch(err=>{
					console.log(err);
				})*/

				


				axios.post('/ddd/shoppingcart',{
					username:"hanhan",
					img:this.imgsrc,
					price:this.data.cprice,
					name:this.name,
					number:this.num
				}).then(res=>{
					console.log(res,"save")
				}).catch(err=>{
					console.log(err);
				})
			},
			adding(){
				this.num++;
			},
			deling(){
				if(this.num<=0){
					this.num = 0;
				} else {
					this.num--;
				}
				
			}
		}
	}
</script>
<style scoped lang="scss">
.main{
	background:#e2e4e7;
	font-size:16px;

}
	img{width:100%;}
	.intro{
		width:3.65rem; 
		height:1.00rem;
		padding-left:0.10rem;
		line-height:0.40rem;
		background:white;
		margin-bottom:0.08rem;
		.price{
			color:red;
			font-size:0.15rem;
			.nowprice{
				font-size:0.24rem;
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
				margin-right:0.25rem;
				color:grey;
				font-size:14px;
			}
		}
		.langname{
			line-height:0.20rem;
		}
	}
	footer{
		width:100%;
		height:0.50rem;
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
				line-height:0.25rem;
			}
			i{
				line-height:0.25rem;
			}
		}
		.footfirst{
			width:0.70rem;
			font-size:13px;
		}
		.footsecond{
			width:0.70rem;
		}
		.footthird{
			width:1.00rem;
			p{
				line-height:0.50rem;
			}
		}
		.footfour{
			width:1.30rem;
			background:red;
			color:white;
			p{
				line-height:0.50rem;
			}
		}
	}
	.promise{
		height:0.45rem;
		line-height:0.40rem;
		background:white;
		margin-bottom:8px;
		p{
			float:left;
			margin-left:0.10rem;
			font-size:14px;
			.dot{
				color:red;
				font-size:0.26rem;
				display:inline-block;
				transform:translateY(5px);
			}
			.lastdot{
				color:grey;
				font-size:26px;
				display:inline-block;
				transform:translateY(5px);
			}
		}
		.last{
			float:right;
			margin-right:10px;
		}
	}
	.choose{
		height:0.45rem;
		background:white;
		display:flex;
		margin-bottom:8px;
		text-align:center;
		line-height:0.40rem;
		font-size:15px;
		span{
			display:inline-block;
			width:50%;
		}
		span:first-of-type{
			text-align:left;
			margin-left:10px;
		}
		span:last-of-type{
			text-align:right;
			margin-right:10px;
		}
	}

	.mystore{
		height:0.45rem;
		background:white;
		margin-bottom:0.40rem;
		text-align:center;
		line-height:0.40rem;
		font-size:0.15rem;
	}
	.mainhandle{
		width:100%;
		height:6.70rem;
		background:rgba(3,3,3,0.4);
		position:absolute;
		bottom:0px;
		.handle{
			position:fixed;
			bottom:0px;
			height:3.00rem;
			background:white;
			width:100%;
			img{
				width:1.00rem;
				height:1.00rem;
				transform:translateY(-0.40rem);
			}
			.first{
				span{
					display:inline-block;
					position:absolute;
					top:5px;
					color:red;
					font-size:20px;
				}
				.notshow{
					display:inline-block;
					position:absolute;
					top:2px;
					right:10px;
					color:grey;
					font-size:35px;
				}
			}
		}
		.handlebutton{
			background:red;
			color:white;
			font-size:20px;
			line-height:0.50rem;
			text-align:center;
			position:fixed;
			bottom:0;
			width:100%;
			height:0.50rem;
		}
	}
	.buy{
		float:left;
		margin-left:10px;
		font-size:20px;
		margin-right:1.50rem;
	}
	.do{
		float:left;
		width:0.30rem;
		display:inline-block;
		line-height:0.30rem;
		font-size:0.20rem;
		border:1px solid lightgrey;
		text-align:center;
		cursor:pointer;
	}
	.num{
		float:left;
		width:0.50rem;
		display:inline-block;
		line-height:0.30rem;
		font-size:0.20rem;
		border:1px solid lightgrey;
		text-align:center;
		cursor:pointer;
	}
	
</style>