<template>
	<div>
		<header id="header">
			<div>
				<input type="text" name="">
				<router-link to='/change' tag='i' class="iconfont icon-fenlei"></router-link>	
			</div>
			
		</header>
		<main>
			<div class="swiper-container">
				<div class="swiper-wrapper">
				    <div class="swiper-slide" v-for="data in datalist">
				    	<img :src="data.pic" alt="">
				    </div>
				    
				</div>
				<!-- 如果需要分页器 -->
				<div class="swiper-pagination"></div>

				
			</div>	
				
			<div class="main-nav">
				
					<img src="https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png" alt="">
					
					<img src="https://goods8.juancdn.com/jas/180530/f/e/5b0e68b4b6f8ea11b8424b37_270x241.png?imageMogr2/quality/85!/format/png" alt="">
					<img src= "https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png" alt="">
					<img src= "https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png" alt="">
				
			</div>
			<div class="guanggao">
				<img class="guanggao-miaosha" src="https://s2.juancdn.com/jas/181121/b/9/5bf4b00433b0891676116024_540x656.gif" alt="">
				<img class="guanggao-qingcang" src="https://goods8.juancdn.com/jas/181120/f/e/5bf3db2d33b0895d5f226432_540x328.png?imageMogr2/quality/85!/format/png" alt="">
				<img class="guanggao-baoyou" src="https://goods6.juancdn.com/jas/181120/b/f/5bf3d88433b089675714dd50_540x328.png?imageMogr2/quality/85!/format/png" alt="">
			</div>
			<div class="tongzhuang">
				<img src="https://s2.juancdn.com/jas/181121/a/e/5bf5289db6f8ea22e207139a_1080x340.gif" alt="">
			</div>
			<div class="wenzi" >
				<img src="https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png?iopcmd=convert&Q=85&dst=png" alt="">
			</div>
			<div class="null">
				
			</div>
			<div class="shangpin">
				<div>
					<span @click="handleClick()">精选专场</span>
					<span @click="handleClick1()">精选单品</span>
					<ul>
						<li v-for="data1 in datalist1">
							<img :src="data1.pic_url" alt="">
							<p v-if="data1.coupon_tips">{{data1.coupon_tips}}</p>
							<p v-else>{{data1.priceList[0].text}}</p>
							<!-- <p v-else>{{data1.priceList[0].text}}</p> -->
							<p class="shangpin-title" >{{data1.title}}</p>
						</li>
					</ul>
				</div>
				
			</div>
		</main>
		<footer id="footer">
			<ul>
				<li>
					<i class="iconfont icon-index"></i>	
					<p>首页</p>
				</li>
				<li> 
					<i class="iconfont icon-leimupinleifenleileibie"></i>	
					<p>分类</p>
				</li>
				<li> 
   					<i class="iconfont icon-gouwuche1"></i>	
					<p>购物车</p>
				</li>
				<li> 
					<i class="iconfont icon-wodedangxuan"></i>	
					<p>我的</p> 
				</li>
			</ul>	
		</footer>	
	</div>
	
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'
//require('vue-swipe/dist/vue-swipe.css');
import "swiper/dist/css/swiper.css";
//import { Swipe, SwipeItem} from 'vue-swipe'
	export default {
		name:'home',
		data(){
			return{
			datalist1:[],
			datalist:[]
			}
		},
		methods:{
			handleClick(){
				axios.get('/api/getIndexNavSkip?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=newest_zhe').then(res=>{
				
				this.datalist1=res.data.GoodsRes.goods
				console.log(this.datalist1)
			}).catch((error)=>{

			})
			},
			handleClick1(){
				axios.get('/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp').then(res=>{
				
				this.datalist1=res.data.data.goods
			}).catch((error)=>{

			})
			}
		},
		mounted(){ 
			axios.get('/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4&app_name=zhe&app_version=&platform=&catname=newest_zhe').then(res=>{
				
				this.datalist=res.data.adsInfo.slide_ads.config.slide
				this.$nextTick(()=>{
					var mySwiper = new Swiper ('.swiper-container', {
					   
					    loop: true, // 循环模式选项
						autoplay: {
		                  delay: 2500,
		                  disableOnInteraction: false,
		              	},
					    // 如果需要分页器
					    pagination: {
					      el: '.swiper-pagination',
					    },
					    
					 
					   
				 	})  
				})	 	      
			}).catch(error=>{
				
			})
			axios.get('/api/getIndexNavSkip?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=newest_zhe').then(res=>{
				
				this.datalist1=res.data.GoodsRes.goods
			}).catch((error)=>{

			})

			
			
			
			
		}
	}

</script>
<style scoped lang="scss">
	div,header,main,footer,input,i{
		margin: 0;
		padding: 0;
	}
	ul,li{
		list-style: none;
	}
	body {
   
    
   
	}

	header{
	
		width: 90%;
		
		display: flex;
		justify-content: space-around;
		padding:10px;
		input{
			width:300px;
			height:20px;
		}

	}
	main{
		.swiper-container{
			width: 100%;
			img{
				width:100%;
				height:100%;
			}
		}
		.main-nav{
			display: flex;
			justify-content:space-around;
			
				img{
					width:90px;
					height:80px;
				}
				
			
		}
		.guanggao{
			margin:10px 0;
			overflow: hidden;
			.guanggao-miaosha{
				display: block;
				width:180px;
				height:220px;
				float: left;
			}
			.guanggao-qingcang{
				display: block;
				width:170px;
				height:110px;
				float: right;
			}
			.guanggao-baoyou{
				display: block;
				width:170px;
				height:110px;
				float: right;
			}
		}
		.tongzhuang{
			height:130px;
			width:100%;
			img{
				width:100%;
				height:100%;
			}
		}
		.wenzi{
			height:50px;
			width:100%;
			img{
				width:100%;
				height:100%;
			}
		}
		.null{
			height:10px;
			width:100%;
			background:#999;
		}
		.shangpin{
			li{
				height:200px;
				width:165px;
				float:left;
				margin:10px;
				img{
					width:100%;
				}
				p{
					font-size: 14px;
					color:red;
					text-align: left;
				}
				.shangpin-title{
					font-size: 12px;
					color:black;
				}
			}
		}
	}
  
	


	#footer{
		height:50px;
		width:100%;
		position: fixed;
		bottom:0;
		z-index:10;
		background: white;
		ul{
			display: flex;
			justify-content: space-around;

		}
	}

</style>