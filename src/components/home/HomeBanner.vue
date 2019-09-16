<template>
	<div class="home-banner" >
		<div class="bg-img" 
			:style="{backgroundImage:bgImage }"
		>
			<div class="title">{{title}}</div>
			<div class="subTitle" @click="onClick" >{{subTitle}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: String,
			subTitle: String,
			img: String
		},
		methods: {
			onClick() {
				this.$emit('onClick')
			}
		},
		computed: {
			bgImage() {
				return 'url(' + this.img + ')'
			}
		}
	}
</script>

<style scoped lang="scss">
	.home-banner {
		margin-top: 20px;
		padding: 0 20px;
		box-sizing: border-box;
		.bg-img {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 125px;
			border-radius: 10px;
			background-size: 100% 100%;
			background-repeat: no-repeat;
			.title {
				font-size: 18px;
				font-weight: 500;
				color: #fff;
			}
			.subTitle {
				padding: 5px 15px;
				background: #4585ff;
				border:  1px solid #ccc;
				margin-top: 10px;
				border-radius: 50px;
				font-size: 14px;
				color: #fff;
			}
		}
	}
</style>
