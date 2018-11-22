<template>
	<div class="login_page" >
		<div class="login_header">
			<router-link to="a" tag="span" ><</router-link>
			<span>登录</span>
			<router-link to="a" tag="span" >注册</router-link>
		</div>
		<ul>
		      <router-link to="/login/login" tag="li" activeClass="active">卷皮账号登录</router-link>
		      <router-link to="/login/mobileLogin" tag="li" activeClass="active">手机快捷登录</router-link>
        </ul>
         <router-view></router-view>  <!-- 站位 -->
         
	</div>
</template>

<script>
	export default {
		name:'login'
	}

</script>
<style scoped lang="scss">
	.login_page{
		width: 100%;
		.login_header{
			
			height:52px;
			background:linear-gradient(to right ,#ff5a61, #fe6226);
			display:flex;
			justify-content:space-around;
			align-items:center;
			color:white;
			font-size:16px;
			span:nth-of-type(2){
				font-size:22px;
			}
		}
		ul{
		  display: flex;

		  li{
		    flex:1;
		    height: 40px;
		    line-height: 40px;
		    list-style: none;
		    text-align: center;
		  }
		 }

	}
	 .active{
		  border-bottom: 5px solid red;
		  color:red;
		 }
</style>