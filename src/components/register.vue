<template>
	<div>
		
			用户名:<input type="text" name="username" v-model="username">
			密码 ： <input type="password" name="password" v-model="password">
			<button @click="handleClick">regiter</button>

	</div>
</template>

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
					axios.post('ddd/register',{date:111}).then((res)=>{
						console.log('成功')
					})
			}
		}
	}
</script>

<style scoped lang="scss">
	
</style>