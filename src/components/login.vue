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

         <div class="login_jp">
         <!-- 	<el-input v-model="input" placeholder="用户名"></el-input> --> 
	       <!--  <el-input v-model="input" placeholder="密码"></el-input>	     -->     
	       	<br>	

	     	<input name="textfield" type="text" v-model="username" value="用户名" onfocus="if (value =='用户名'){value =''}"onblur="if (value ==''){value='用户名'}"/>
	     	<br>
	     	<br>

	     	<input name="textfield" type="text" v-model="password" value="密码" onfocus="if (value =='密码'){value =''}"onblur="if (value ==''){value='密码'}"/>
	     	<br>

	        <mt-button type="danger" @click="login()">登录</mt-button>

         </div>

         <div class="login_forget">
         

         	 <router-link to="a" tag="span">忘记密码？</router-link>
         </div>
         

	</div>
</template>

<script>
import axios from "axios";
/*引用移动ui*/


export default {
  name: 'nowplaying',
  data () {
    return {
      datalist:[],
      value:1,
      username:"",
      password:0

    }
  },
  methods:{
    login(){
        axios.post("ddd/login",{username:this.username,password:this.password}).then(res=>{
        	console.log("11111",res)


        	document.cookie="username=this.username"
        	document.cookie="password=this.password"        	
	    }).catch(err=>{
   	 		console.log(err,"222222")
   	 	})
	}  
  },

  mounted(){

	}
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

		.login_jp{
			button{
				width:80%;
				height:50px;
				background:#ff464e;
				position:relative; 
				left:10%; 

			}
			input{
				width:80%;
				height:30px;
				margin: 0 auto ;
				display: block
			}
		}

		.login_forget{
			display:flex;
			justify-content:space-between;
			padding-top:20px;
			span{
				color:#999;
			}
		}

	}
	 .active{
		  border-bottom: 5px solid red;
		  color:red;
		 }



</style>