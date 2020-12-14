<template>
<view class="page">
	<swiper class="screen-swiper round-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
	 duration="500">
		<swiper-item v-for="(item,index) in 4" :key="index">
			<image :src="'https://ossweb-img.qq.com/images/lol/web201310/skin/big3900'+index+ '.jpg'" mode="aspectFill"></image>
		</swiper-item>
	</swiper>
<tablist :tabCur="tabCur" :itemList="itemlist" :mainCur="mainCur" :verticalNavTop="verticalNavTop" :load="load" :scrollLeft="scrollLeft" :sourceList="submitList"></tablist>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true,
				scrollLeft: 0,
				itemlist:[
					{
						'itemname':'一号床',
						'itemimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2170177790,3567240183&fm=26&gp=0.jpg',
					    'itemId':0
					},
					{
						'itemname':'二号床',
						'itemimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2170177790,3567240183&fm=26&gp=0.jpg',
						'itemId':0
					},
					{
						'itemname':'三号床',
						'itemimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2170177790,3567240183&fm=26&gp=0.jpg',
						'itemId':0
					},
					{
						'itemname':'一号床',
						'itemimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2170177790,3567240183&fm=26&gp=0.jpg',
					    'itemId':1
					},
					{
						'itemname':'二号床',
						'itemimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2170177790,3567240183&fm=26&gp=0.jpg',
						'itemId':1
					},
					{
						'itemname':'三号床',
						'itemimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2170177790,3567240183&fm=26&gp=0.jpg',
						'itemId':1
					},
					{
						'itemname':'一号床',
						'itemimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2170177790,3567240183&fm=26&gp=0.jpg',
					    'itemId':2
					},
					{
						'itemname':'二号床',
						'itemimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2170177790,3567240183&fm=26&gp=0.jpg',
						'itemId':2
					},
					{
						'itemname':'三号床',
						'itemimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2170177790,3567240183&fm=26&gp=0.jpg',
						'itemId':2
					},
					{
						'itemname':'一号床',
						'itemimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2170177790,3567240183&fm=26&gp=0.jpg',
					    'itemId':3
					},
					{
						'itemname':'二号床',
						'itemimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2170177790,3567240183&fm=26&gp=0.jpg',
						'itemId':3
					},
					{
						'itemname':'三号床',
						'itemimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2170177790,3567240183&fm=26&gp=0.jpg',
						'itemId':3
					},
				],
				submitList:[
					{
						"name":"一病区",
						"id":0
					},
					{
						"name":"二病区",
						"id":1
					},
					{
						"name":"三病区",
						"id":2
					},
					{
						"name":"四病区",
						"id":3
					},
					{
						"name":"五病区",
						"id":4
					},
					{
						"name":"妇科",
						"id":5
					},
					{
						"name":"儿科",
						"id":6
					},
					{
						"name":"呼吸科",
						"id":7
					},
					{
						"name":"检验科1",
						"id":8
					},
					{
						"name":"消化内科",
						"id":9
					},
					{
						"name":"消化外科",
						"id":10
					},
					{
						"name":"病理科",
						"id":11
					},
					{
						"name":"外科",
						"id":12
					},
					{
						"name":"妇科",
						"id":13
					},
					{
						"name":"儿科",
						"id":14
					},
					{
						"name":"呼吸科",
						"id":15
					},
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	
	.switch-sex::after {
		content: "\e716";
	}
	
	.switch-sex::before {
		content: "\e7a9";
	}
	
	.switch-music::after {
		content: "\e66a";
	}
	
	.switch-music::before {
		content: "\e6db";
	}
	.fixed {
		position: fixed;
		z-index: 99;
	}
</style>
