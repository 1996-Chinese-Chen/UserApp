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
						'urlPath':'../report'
					},
					{
						'text':'陈显达',
						'iconClass':'cuIcon-edit text-red',
						'textClass':'grey',
						'urlPath':'../report'
					},
					{
						'text':'李喜平',
						'iconClass':'cuIcon-btn text-olive',
						'textClass':'grey',
						'urlPath':'../report'
					},
					{
						'text':'朱长梅',
						'iconClass':'cuIcon-discoverfill text-orange',
						'textClass':'grey',
						'tabPath':'',
						'urlPath':'../report'
					},
					{
						'text':'陈鸽',
						'iconClass':'cuIcon-emojiflashfill text-yellow',
						'textClass':'grey',
					    'urlPath':'../report'
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
