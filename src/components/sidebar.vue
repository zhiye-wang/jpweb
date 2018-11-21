<template>
	<div>
		<input type="text">
		侧边栏（女装、男装、等）
		<section>
			<router-view></router-view>
		</section>
	</div>
</template>
<script>
	export default {
		name:'sidebar'
	}
</script>