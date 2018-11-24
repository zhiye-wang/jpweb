<template>
	
	<div class="shopping">
		
		<div class="shopping_title">
			购物车
			<span>编辑</span>
		</div>
		<ul  class="shopping_info"  ><!--  v-for="data in datalist " -->

			<li v-for="data,index in datalist"  :key="data.id">
				<div class="shopping_shop">  
					{{data}}	
				</div>

				<div class="goods_info">
					<input type="checkbox" v-model="checkgroup" :value="data">

							
						<div class="goods_img">
							<img :src="data.img" alt="">
						</div>
						
						<div class="goods_title">
							<p>{{data.name}}</p>
							<div class="goods_num_pri">
								<span>￥{{data.price}}</span> 
								<div>
									<button type="" @click="add(index)">+</button>
										{{data.number}}
									<button type="" @click="reduce(index)">-</button>
								</div>
								
							</div>
						</div>	
				</div>
			</li>
		</ul>

		<div class="shopping_footer">
			<label><input type="checkbox" :checked='checkgroup.length==datalist.length' @change="singleSelect">全选</label>
			
			 <p>总金额：{{computedSum}}</p>	

			 <router-link to="a" tag="div">去结算()</router-link>
		</div>
	</div>
</template>

<script>
	import axios from "axios"; 
	export default {
		name:'shoppingcart',

		data(){

			return {
				/*value:1,*/
				checkgroup:[],
				
				sum:0,
				datalist:[
					{
                  name:"商品1",
                  price:10,
                  number:1,
                  id:"1"
                },
                {
                  name:"商品1",
                  price:10,
                  number:1,
                  id:"2"
                },
                {
                  name:"商品1",
                  price:10,
                  number:1,
                  id:"3"
                },
                {
                  name:"商品1",
                  price:10,
                  number:1,
                  id:"4"
                }


				],
				

			}
		},
		
		methods:{
					
				add(index){
					console.log('+++')
					this.datalist[index].number++
					
				
				},
				reduce(index){
					console.log('---')	
					this.datalist[index].number--	
					if(this.datalist[index].number<=1){
						this.datalist[index].number=1
					}
				},


				singleSelect(){
					this.checkgroup.length==this.datalist.length?this.checkgroup=[]:this.checkgroup=this.datalist
				},
			},
			computed:{
				computedSum(){
					var sum =0;

					for(var i in this.checkgroup){
						sum+=this.checkgroup[i].number*this.checkgroup[i].price
					}
					return sum
				}
			},
			/*mounted(){
						axios.post("ddd/getshoppingcart",{username:"Cinda"}).then(res=>{
				        	console.log(res.data)
				        	
				        	this.datalist = res.data
				        	
				        	
					    }).catch(err=>{
				   	 		console.log(err,"222222")
				   	 	})
			},*/
		
	}

</script>





<style scoped lang="scss">

	.shopping{
		.shopping_title{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:56px;
			border-bottom:#ebebeb 1px solid;
			font-size:22px;
			text-align: center;
			line-height:56px;
			z-index:10;
			background:white;
			span{
				position:absolute;
				right:0;
				font-size:20px;
			}		
		}

		.shopping_info{
			margin-bottom:40px;
			width:100%;
			.shopping_shop{
				border-bottom:1px solid #ebebeb;
				border-top:1px solid #ebebeb;
				height:56px;
				line-height: 56px;
				font-size:16px;
				
				input{
					padding-left:12px
				}
				span{
					padding-left:10px;									
				}			
			}
			.goods_info{
				height:152px;
				border-bottom:13px #f4f4f8 solid;
				
				display:flex;
				flex-direction:row;
				justify-content:space-between;
				align-items:center;
				input{
					padding-left:12px
				}
				.goods_img{
					width:112px;
					height:112px;
					img{
						width:100%;
						height:100%;
					}
					
					
				}
				.goods_title{
					width:40%;
					height:112px;
					display:flex;
					flex-direction:column;
					justify-content:space-around;
					border:1px solid red;
					.goods_num_pri{

						display:flex;
						flex-direction:row;
						justify-content:space-between;
					}
				}
			}

		}

		.shopping_footer{

			width:100%;
			position:fixed;
			left:0;
			bottom:0;
			height:60px;
			border-top:1px solid #ebebeb;
			font-size:18px;
			line-height: 60px;
			text-indent: 1ex;
			display:flex;
			z-index: 10;
			background:white;
			
			justify-content:space-between;
			align-items:center;
			div{
				display: inline; 
				width:30%;
				height:60px;
				background: #ff464e;
				text-align: center;
				color:white;
				font-weight:700;
			}
		}
	}

	
</style>