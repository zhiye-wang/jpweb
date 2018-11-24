<template>
	<div class="mainmain">
		<div class="tttt" v-hello>
			<div class="top" @click="mousedown">
				<div class="head clear">
					<div>精选好货，底价狂欢</div>
					<div class="time" v-for="time in timelist" >
						<p>{{time}}:00</p>
						<p>以开抢</p>
					</div>
					<div class="last">持续上新，不要走开</div>
				</div>
			</div>
			<div class="mask">
				<!-- <p>{{timelist[0]}}:00</p>
				<p>以开抢</p> -->
			</div>
			<div class="tangle"></div>		
		</div>
		<p class="distance">--离本场结束只剩{{havedate}}</p>
		<ul v-infinite-scroll="loadMore"
  			infinite-scroll-disabled="loading"
  			infinite-scroll-distance="10">
			<router-link v-for="data in datalist" tag="li" :to="'/detail/'+data.goods_id"class="clear" :key="data.id">
				<img :src="data.pic_url" alt="">
				<div class="right">
					<p class="intro">{{data.title_long}}</p>
					<div class="detail clear">
						<div class="detailLeft">
							<p class="price">限量价：<a>￥<span>{{data.cprice}}</span></a></p>
							<div class="had">{{data.progress_info.txt}}</div>
							<div class="hadmask" v-hadmask="data.progress_info.percent"></div>
						</div>
						<div class="detailRight">马上抢</div>
					</div>
				</div>
			</router-link>
			<p>{{complete}}</p>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'

	Vue.directive("hello",{
		inserted(el){
			el.onmousedown = function(evt){
				var downX = evt.clientX;

				var left = Math.floor((downX-144)/70)*70;
				//console.log("left",left)
				/*console.log("down",downX)
				window.onmousemove = function(evt){
					console.log("move",evt.clientX)
				}
				window.onmouseup = function(evt){
					console.log("up")
				}*/
				if(downX<160){
					left = 0
				}
				var pa = document.querySelector('.tttt');
				pa.style.marginLeft =-left+'px';
				pa.style.transition = "all 0.5s"
			}

		}
	})

	Vue.directive("hadmask",{
		inserted(el,binding){
			//console.log(binding.value)
			el.style.width = binding.value*140+'px'
			el.style.background="red"
		}
	})

	export default {
		name:'timeLimit',
		data(){
			return {
				timelist:[10,14,20,10,14,20],
				havedate:0,
				datalist:[],
				percent:0,
				count:0,
				loading:false,
				total:0,
				complete:"正在加载中...",
				now:0
			}
		},
		methods:{
			mousedown(){
				console.log("click");
				this.now++;
				if(this.now>=3){
					this.now = 0
					return ;
				}
				axios.get("/act/timebuy-xrgoodslist").then(res=>{
					console.log("now",this.now);  
					this.datalist = res.data.data.time_tabs[this.now].goodslist
					this.total = res.data.data.time_tabs.length
					//console.log(this.datalist)
				}).catch(err=>{
					console.log(err);
				})
			},
			loadMore(){
				console.log("daodile");
				this.count++;
				if(this.count>2){
					this.complete = "切换到下一场";
					this.loading = true
					return ;
				}
				axios.get("/act/timebuy-xrgoodslist").then(res=>{
					this.datalist =[...this.datalist,...res.data.data.time_tabs[this.count].goodslist] 
				}).catch(err=>{
					console.log(err);
				})
			}
		},
		mounted(){
			axios.get("/act/timebuy-xrgoodslist").then(res=>{
				
				this.datalist = res.data.data.time_tabs[this.now].goodslist
				this.total = res.data.data.time_tabs.length
				//console.log(this.datalist)
			}).catch(err=>{
				console.log(err);
			})
		}
	}
</script>

<style scoped lang="scss">	

.mainmain{
	font-size:16px;
}

.top{
	width:3.75rem;
	 /* overflow:hidden; */
	 position:fixed;
	 z-index:10; 
	 background:black; 
	} 
	 .head{
	 	 padding-left:10px; 
	 	width:195%;
	 	height:0.40px;
	 	background:black;
	 	color:lightgrey;
	 	line-height:0.40rem;
	 	text-align:center;
	 	position:relative;
	 	top:0;
	 	/* .time{
	 		position:absolute;
	 	} */
	 	div{
	 		float:left;
	 		height:0.40rem;
	 		background:black;
	 		p{
	 			height:0.20rem;
	 			line-height:0.20rem;
	 			width:0.70rem;
	 		}
	 	}
	 	.last{
	 			width:1.50rem;
	 			line-height:0.40rem;
	 			color:white;
	 		}
	 }
	 .clear:after{
	 	clear:both;
	 	display:block;
	 	content:"";
	 }
	 .mask{
	 	width:0.70rem;
	 	height:0.40rem;
	 	background:rgba(255,0,0,0.5);
	 	position:fixed;
	 	left:42%;
	 	top:0;
	 	z-index:10;
	 	line-height:0.20rem;
	 	color:white;
	 	text-align:center;
	 }
	 .tangle{
	 	/* width:1px; */
	 	/* height:1px; */
	 	border-top:0.10rem red solid;
	 	border-left:0.10rem white solid;
	 	border-right:0.10rem white solid;
	 	border-bottom:0.10rem white solid;
	 	border-top-color:rgba(255,0,0,0.5);
	 	border-left-color:rgba(255,255,255,0);
	 	border-right-color:rgba(255,255,255,0);
	 	border-bottom-color:rgba(255,255,255,0);
	 	position:fixed;
	 	left:48%;
	 	top:0.40rem;
	 	z-index:10;
	 }
	 .tttt{
	 	position:absolute;
	 	left:0;
	 	top:0;
	 	background:black;
	 	.time{
	 		background:black;
	 	}
	 }
	 .distance{
	 	width:100%;
	 	height:0.40rem;
	 	line-height:0.40rem;
	 	color:white;
	 	font-size:0.13rem;
	 	text-align:center;
	 	color:black;
	 	position:absolute;
	 	top:0.40rem;
	 }
	 ul{
	 	list-style:none;
	 	width:100%;
	 	padding-top:0.10rem;
	 	background:lightgrey;
	 	position:absolute;
	 	top:0.80rem;
	 	li{
	 		width:100%;
	 		height:1.20rem;
	 		background:white;
	 		margin-bottom:0.1rem;
	 		img{width:1.00rem;height:1.00rem;margin-top:0.10rem;float:left;display:block;}
	 		.right{
	 			float:right;
	 			width:2.50rem;
	 			.intro{
	 				height:0.50rem;
	 				line-height:0.18rem;
	 				margin-top:0.10rem;
	 				font-size:0.14rem;
	 			}
	 			.detail{
	 				height:0.50rem;
	 				margin-top:0.10rem;
	 				.detailLeft{
	 					float:left;
	 					width:1.60rem;
	 					position:relative;
	 					.price{
	 						a{
	 							text-decoration: none;
	 							color:red;
								span{
		 							color:red;
		 							font-size:0.20rem;
		 						}
	 						}
	 					}
	 					.had{
	 						width:1.40rem;
	 						height:0.13rem;
	 						background:pink;
	 						margin-top:0.05rem;
	 						border-radius:0.05rem;
	 						text-align:center;
	 						font-size:0.08rem;
	 						color:white;
	 						line-height:0.13rem;
	 					}
	 					.hadmask{
	 						position:absolute;
	 						height:0.13rem;
	 						bottom:0rem;
	 						border-radius:0.05rem;
	 					}
	 				}
	 				.detailRight{
	 					height:0.30rem;
	 					float:right;
	 					width:0.70rem;
	 					background:red;
	 					margin-right:0.20rem;
	 					color:white;
	 					font-size:0.15rem;
	 					text-align:center;
	 					line-height:0.30rem;
	 				}
	 			}
	 		}
	 	}
	 }
</style>