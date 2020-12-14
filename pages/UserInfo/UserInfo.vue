<template>
	<view class="page">
		<HmHeadPortraitCard :options="options"></HmHeadPortraitCard>
		<list :nameList='name' :menuBorder='true' :menuArrow="true"></list>
	</view>
</template>

<script>
	import HmHeadPortraitCard from '@/components/hm-head-portrait-card/index.vue';
	import list from '@/components/list.vue'
	export default {
		components: { HmHeadPortraitCard,list},
		data() {
			return {
		        name:[
			{
				'text':'就诊人',
				'iconClass':'cuIcon-circlefill text-pink',
				'textClass':'text-grey',
				'urlPath':'patientList/patientList'
			},
			{
				'text':'就诊记录',
				'iconClass':'cuIcon-edit text-red',
				'textClass':'grey',
				'urlPath':'Visitingrecord/Visitingrecord'
			},
			{
				'text':'处方记录',
				'iconClass':'cuIcon-btn text-olive',
				'textClass':'grey'
			},
			{
				'text':'购药记录',
				'iconClass':'cuIcon-discoverfill text-orange',
				'textClass':'grey',
			},
			{
				'text':'收货地址',
				'iconClass':'cuIcon-emojiflashfill text-yellow',
				'textClass':'grey'
			}
		],   
		options: {
                         actionBg:'/static/hm-head-portrait-card/images/HeadBack.png',
                         avator:'/static/hm-head-portrait-card/images/Head.jpg',
                         name: '@李莉儿',
                         info: '旅行社代理人'
        },
			}
		},
		methods: {
		}
	}
</script>

<style>

</style>
