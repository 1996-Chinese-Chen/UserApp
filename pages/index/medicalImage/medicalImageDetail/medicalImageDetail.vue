<template>
	<view class=" page bg-white">
		<view class="cu-card case" :class="isCard?'no-card':''">
			<view class="cu-item shadow">
				<view class="image">
					<cover-image class="image" :src="url"></cover-image>
					<view class="cu-tag bg-blue">史诗</view>
				</view>
			</view>
		</view>
	<view class="flex solid-bottom  justify-center">
		<view class="cu-btn  bg-grey padding-sm margin-xs radius" @tap="saveImag">保存本地</view>
		<view class=" cu-btn bg-grey padding-sm margin-xs radius">智能解读</view>
	</view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				isCard:false,
				url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3581149984,2834536503&fm=11&gp=0.jpg'
			}
		},
		onLoad:function(options){
		  },
		  onHide:function(){
		  },
		  onShow:function(){
		  },
		methods: {
			saveImag(){
				uni.downloadFile({
						url: this.url,
						success: (res) =>{
							if (res.statusCode === 200){
								debugger
								uni.saveImageToPhotosAlbum({
									filePath: res.tempFilePath,
									success: function() {
										uni.showToast({
											title: "保存成功",
											icon: "none"
										});
									},
									fail: function() {
										uni.showToast({
											title: "保存失败，请稍后重试",
											icon: "none"
										});
									}
								});
							}
						}
					})
			}
		}
	}
</script>

<style>

</style>
