<template>
	<div>
		<img src="//s2.juancdn.com/bao/181106/0/c/5be15aa1b6f8ea4d832742f3_200x200.png?iopcmd=convert&amp;dst=webp" class="cate-img lazy loaded">
		<img src="//s2.juancdn.com/bao/181106/5/3/5be15d89b6f8ea616168e374_200x200.png?iopcmd=convert&amp;dst=webp" class="cate-img lazy loaded">
		<img src="//s2.juancdn.com/bao/170824/5/2/599ea1398150a11ea3793d3b_200x200.png?iopcmd=convert&amp;dst=webp" class="cate-img lazy loaded">
		<img src="//s2.juancdn.com/bao/170824/1/0/599ea1b1a9fcf8812316c5e0_200x200.png?iopcmd=convert&amp;dst=webp" class="cate-img lazy loaded">
		<img src="//s2.juancdn.com/bao/170824/3/b/599ea2db8150a12a9254bab8_200x200.png?iopcmd=convert&amp;dst=webp" class="cate-img lazy loaded">
		<img src="//s2.juancdn.com/bao/181106/b/1/5be161e2b6f8ea44d7363aec_200x200.png?iopcmd=convert&amp;dst=webp" class="cate-img lazy loaded">
		<img src="//s2.juancdn.com/bao/181106/b/1/5be161e2b6f8ea44d7363aec_200x200.png?iopcmd=convert&amp;dst=webp" class="cate-img lazy loaded">
		<img src="//s2.juancdn.com/bao/181106/b/1/5be161e2b6f8ea44d7363aec_200x200.png?iopcmd=convert&amp;dst=webp" class="cate-img lazy loaded">
		<img src="//s2.juancdn.com/bao/181106/b/1/5be161e2b6f8ea44d7363aec_200x200.png?iopcmd=convert&amp;dst=webp" class="cate-img lazy loaded">
		<img src="//s2.juancdn.com/bao/181106/b/1/5be161e2b6f8ea44d7363aec_200x200.png?iopcmd=convert&amp;dst=webp" class="cate-img lazy loaded">
		<img src="//s2.juancdn.com/bao/181106/b/1/5be161e2b6f8ea44d7363aec_200x200.png?iopcmd=convert&amp;dst=webp" class="cate-img lazy loaded">
		<img src="//s2.juancdn.com/bao/181106/b/1/5be161e2b6f8ea44d7363aec_200x200.png?iopcmd=convert&amp;dst=webp" class="cate-img lazy loaded">
		<img src="//s2.juancdn.com/bao/181106/b/1/5be161e2b6f8ea44d7363aec_200x200.png?iopcmd=convert&amp;dst=webp" class="cate-img lazy loaded">
	</div>
</template>

<script>
	import axios from "axios"
	export default {
	name:'maleclothes',
	data(){
		return{
			datalist:[]
		}
	},
	methods:{

	},
	mounted(){
	axios.get("/index/getMenu?select=2_1&zhouyi_ids=c4_l4").then(res=>{
		console.log(res.data);
	}).catch(error=>{
		console.log(error);
	})
	}
	}
</script>
<style scoped  lang="scss">
div{
	width:100%;

	img{
		margin-left:5px;
		margin-top:5px;
		width:30%;
	}
}
	
</style>