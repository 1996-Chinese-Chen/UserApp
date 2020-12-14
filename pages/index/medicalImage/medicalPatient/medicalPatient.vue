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
						'text':'陈恒立',
						'iconClass':'cuIcon-circlefill text-pink',
						'textClass':'text-grey',
						'urlPath':'../medicalImage'
					},
					{
						'text':'陈显达',
						'iconClass':'cuIcon-edit text-red',
						'textClass':'grey',
						'urlPath':'../medicalImage'
					},
					{
						'text':'李喜平',
						'iconClass':'cuIcon-btn text-olive',
						'textClass':'grey',
						'urlPath':'../medicalImage'
					},
					{
						'text':'朱长梅',
						'iconClass':'cuIcon-discoverfill text-orange',
						'textClass':'grey',
						'tabPath':'',
						'urlPath':'../medicalImage'
					},
					{
						'text':'陈鸽',
						'iconClass':'cuIcon-emojiflashfill text-yellow',
						'textClass':'grey',
					    'urlPath':'../medicalImage'
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
