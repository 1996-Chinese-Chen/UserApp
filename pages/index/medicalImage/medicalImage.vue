<template>
	<view class="page">
		<list :nameList='name' :menuBorder='true' :menuArrow="true"></list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:[
					{
						'text':'检验科',
						'iconClass':'cuIcon-circlefill text-pink',
						'textClass':'text-grey',
						'urlPath':'medicalImageDetail/medicalImageDetail?imagetype=0'
					},
					{
						'text':'病理科',
						'iconClass':'cuIcon-edit text-red',
						'textClass':'grey',
						'urlPath':'medicalImageDetail/medicalImageDetail?imagetype=1'
					},
					{
						'text':'放射科',
						'iconClass':'cuIcon-btn text-olive',
						'textClass':'grey',
						'urlPath':'medicalImageDetail/medicalImageDetail?imagetype=2'
					},
					{
						'text':'妇科',
						'iconClass':'cuIcon-discoverfill text-orange',
						'textClass':'grey',
						'tabPath':'',
						'urlPath':'medicalImageDetail/medicalImageDetail?imagetype=3'
					},
					{
						'text':'儿科',
						'iconClass':'cuIcon-emojiflashfill text-yellow',
						'textClass':'grey',
						'urlPath':'medicalImageDetail/medicalImageDetail?imagetype=4'
					}
				],   
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
