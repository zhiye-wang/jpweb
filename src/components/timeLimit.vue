<template>
	<div>
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

.top{
	width:375px;
	 /* overflow:hidden; */
	 position:fixed;
	 z-index:10;  
	} 
	 .head{
	 	padding-left:10px;
	 	width:195%;
	 	height:40px;
	 	background:black;
	 	color:lightgrey;
	 	line-height:40px;
	 	text-align:center;
	 	position:relative;
	 	top:0;
	 	/* .time{
	 		position:absolute;
	 	} */
	 	div{
	 		float:left;
	 		height:40px;
	 		p{
	 			height:20px;
	 			line-height:20px;
	 			width:70px;
	 		}
	 	}
	 	.last{
	 			width:150px;
	 			line-height:40px;
	 			color:white;
	 		}
	 }
	 .clear:after{
	 	clear:both;
	 	display:block;
	 	content:"";
	 }
	 .mask{
	 	width:70px;
	 	height:40px;
	 	background:rgba(255,0,0,0.5);
	 	position:fixed;
	 	left:42%;
	 	top:0;
	 	z-index:10;
	 	line-height:20px;
	 	color:white;
	 	text-align:center;
	 }
	 .tangle{
	 	/* width:1px; */
	 	/* height:1px; */
	 	border-top:10px red solid;
	 	border-left:10px white solid;
	 	border-right:10px white solid;
	 	border-bottom:10px white solid;
	 	border-top-color:rgba(255,0,0,0.5);
	 	border-left-color:rgba(255,255,255,0);
	 	border-right-color:rgba(255,255,255,0);
	 	border-bottom-color:rgba(255,255,255,0);
	 	position:fixed;
	 	left:48%;
	 	top:40px;
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
	 	height:40px;
	 	line-height:40px;
	 	color:white;
	 	font-size:13px;
	 	text-align:center;
	 	color:black;
	 	position:absolute;
	 	top:40px;
	 }
	 ul{
	 	list-style:none;
	 	width:100%;
	 	padding-top:10px;
	 	background:lightgrey;
	 	position:absolute;
	 	top:80px;
	 	li{
	 		width:100%;
	 		height:120px;
	 		background:white;
	 		margin-bottom:1px;
	 		img{width:100px;height:100px;margin-top:10px;float:left;display:block;}
	 		.right{
	 			float:right;
	 			width:250px;
	 			.intro{
	 				height:50px;
	 				line-height:18px;
	 				margin-top:10px;
	 				font-size:14px;
	 			}
	 			.detail{
	 				height:50px;
	 				margin-top:10px;
	 				.detailLeft{
	 					float:left;
	 					width:160px;
	 					position:relative;
	 					.price{
	 						a{
	 							text-decoration: none;
	 							color:red;
								span{
		 							color:red;
		 							font-size:20px;
		 						}
	 						}
	 					}
	 					.had{
	 						width:140px;
	 						height:13px;
	 						background:pink;
	 						margin-top:5px;
	 						border-radius:5px;
	 						text-align:center;
	 						font-size:8px;
	 						color:white;
	 						line-height:13px;
	 					}
	 					.hadmask{
	 						position:absolute;
	 						height:13px;
	 						bottom:0px;
	 						border-radius:5px;
	 					}
	 				}
	 				.detailRight{
	 					height:30px;
	 					float:right;
	 					width:70px;
	 					background:red;
	 					margin-right:20px;
	 					color:white;
	 					font-size:15px;
	 					text-align:center;
	 					line-height:30px;
	 				}
	 			}
	 		}
	 	}
	 }
</style>