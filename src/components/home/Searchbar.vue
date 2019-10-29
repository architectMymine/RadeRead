<template>
	<div class="search-bar">
		<div class="search-bar-wrapper" @click="onSearchBarClick">
			<van-icon 
				class='search'
				name='search'
				size='16px'
				color='#858c96'
				></van-icon>
			<input type="text" 
				   class="search-bar-input"
				   :focus="focus"
				   :disabled="disabled"
				   :maxlength="limit"
				   :placeholder="hotSearch.length === 0 ? '搜索' : hotSearch "
				   v-model="SearchWorld"
				   @input="onChange"
				   comfirm-type='search'
				   @confirm="onConfirm"
				   placeholder-style="color:#ADB4BE;font-size:15px;"
				   />
			<van-icon
				class='clear'
				name='clear'
				size='16px'
				color='#858c96'
				@click="onClearClick"
				v-if="SearchWorld.length > 0">
			</van-icon>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			focus: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			limit: {
				type: Number,
				default: 50
			},
			hotSearch: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				SearchWorld: ''
			}
		},
		methods: {
			onSearchBarClick() {
				this.$emit('onClick')
			},
			onClearClick() {
				this.SearchWorld = ''
				this.$emit('onClear')
			},
			onChange(e) {
				const { value } = e.mp.detail
				this.$emit('onChange', value)
			},
			onConfirm(e) {
				const { value } = e.mp.detail
				this.$emit('onConfirm', value)
			},
			setValue(v) {
				this.SearchWorld = v
			},
			getValue() {
				return this.SearchWorld
			}
		
		},
	}
</script>

<style scoped="scoped" lang="scss">
	.search-bar{
		padding: 15px 15.5px;
		.search-bar-wrapper{
			display: flex;
			height: 40px;
			box-sizing: border-box;
			align-items: center;
			background: #f5f7f9;
			border-radius: 20px;
			padding: 12px 17px;
			.search-bar-input{
				flex: 1;
        font-size: 15px;
				margin: 0 8px;
        color: #666;
			}
			.search,clear{
				height: 100%;
				display:flex;
				align-items: center
			}
			
		}
	}
	
</style>
