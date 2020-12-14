<template>
	<view class="cu-list menu-avatar">
		<view class="cu-item" v-for="(item,index) in sourceItemList" :key="index" @tap="rediret" :data-id="item.docId" :data-url="item.url">
			<image class="cu-avatar radius lg"  :src="item.docHead"></image>
			<view class="content">
				<view class="text-grey">{{item.docName}}</view>
				<view class="text-gray text-sm flex">
					<view class="text-cut">
						<text class=" margin-right-xs"></text>
						{{item.docDesc}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		
		data() {
			return {
				
			};
		},
		name:'indexList',
		props:{
			sourceItemList:{
				type:Array,
				default:function() {
				  return {
					  docName,
					  docDesc,
					  docId,
					  docHead,
					  url
				  };
			},
		},
	},
	methods:{
		rediret(e)
		{
			if(e.currentTarget.dataset.id!=null&&e.currentTarget.dataset.url!=null)
			{
				var url=e.currentTarget.dataset.url+"?id="+e.currentTarget.dataset.id;
				uni.navigateTo({
					url:url,
					fail(e) {
					}
				})
			}
		}
	}
}
</script>

<style>

</style>
