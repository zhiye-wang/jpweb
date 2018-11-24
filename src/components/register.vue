<template>
  <aside>
  	<div class="head">
  		<i class="iconfont icon-3column"></i>
  		<span>注册</span>
  	</div>

  	<div class="sign">
  		请保持你的手机通畅，用于接收验证短信
  	</div>
  	<input type="text" name="username" v-model="username" placeholder="请输入手机号码">

   	<input type="password" name="password" v-model="password" placeholder="请输入验证码">	

  	<button type="submit" @click="handleClick">下一步</button>
  	
  </aside>
</template>

<!-- ---------------------------------------------------------------- -->

<script>
import axios from 'axios'
	export default {
		name:"register",
		data(){
			return {
				username:"Cinda",
				password:11111111
			}
		},
		methods:{
			handleClick(){
					axios.post('ddd/register',{username:this.username,password:this.password}).then((res)=>{
						console.log('成功')
					})
					location.href="/login"
			}
		}
	}
</script>

<!-- ---------------------------------------------------------------- -->

<style scoped lang="scss">
aside{
	overflow: hidden;	

.head{

	padding-left: 10px;
	width: 100%;
	height: 50px;
	font-size: 18px;
	line-height: 50px;
	border-bottom:1px solid #eee;
	i{
		display: inline-block;
	}
	span{
		position: relative;
		display: inline-block;
		left:50%;
		margin-left: -48px;
	}
}
.sign{
	color:#999;
	width:100%;
	height:60px;
	line-height: 60px;
	text-align: center;
	font-size:10px;
}
input{
	margin-left:10px;
	border:none;
	height:55px;
	line-height: 55px;
	width:60%;
	outline: none;
}


button{
	background-color:#dbdbdb;
	margin-top:20px;
	margin-left:5%;
	width:90%;
	height:50px;
	color:white;
	border:none;
	outline:none;
}
}
</style>
