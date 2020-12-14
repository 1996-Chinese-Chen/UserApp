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
				url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590825965725&di=6a173a95dcd583891f40f175fa3635f5&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1485962514%2C2520530387%26fm%3D214%26gp%3D0.jpg'
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
