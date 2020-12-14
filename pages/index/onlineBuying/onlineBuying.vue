<template>
<view class="page">
	<swiper class="screen-swiper round-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
	 duration="500">
		<swiper-item v-for="(item,index) in 4" :key="index">
			<image :src="'https://ossweb-img.qq.com/images/lol/web201310/skin/big3900'+index+ '.jpg'" mode="aspectFill"></image>
		</swiper-item>
	</swiper>
<tablist :tabCur="tabCur" :mainCur="mainCur" :verticalNavTop="verticalNavTop" :load="load" :scrollLeft="scrollLeft" :sourceList="submitList" :itemList="itemlist"></tablist>
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
				submitList:[
					{
						"name":"孙镇",
						"id":0
					},
					{
						"name":"永丰",
						"id":1
					},
					{
						"name":"马虎",
						"id":2
					},
					{
						"name":"兴镇",
						"id":3
					},
					{
						"name":"党睦",
						"id":4
					},
					{
						"name":"陈庄",
						"id":5
					},
					{
						"name":"椿林",
						"id":6
					},
					{
						"name":"罕井",
						"id":7
					}
				],
				itemlist:
				[
					{
						'itemname':'东陈济仁堂药店',
						'itemdesc':'孙镇东陈街道正街',
						'itemimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2170177790,3567240183&fm=26&gp=0.jpg',
					    'itemId':0
					},
					{
						'itemname':'永丰同济堂药店',
						'itemdesc':'永丰街道15号',
						'itemimg':'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3624367159,477488457&fm=26&gp=0.jpg',
					    'itemId':1
					},
					{
						'itemname':'马虎东仁堂',
						'itemdesc':'马虎街道20号',
						'itemimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590858732354&di=66d9f8051b17415af9c8ffcf2d8a9335&imgtype=0&src=http%3A%2F%2Fimg9.jiwu.com%2Fjiwu_news_pics%2F20160421%2F53f4711fdf0801408528671.jpg',
					    'itemId':2
					},
					{
						'itemname':'太和堂兴镇大药房',
						'itemdesc':'永乐家纺（镇政府东）',
						'itemimg':'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3095800317,4052413627&fm=26&gp=0.jpg',
					    'itemId':3
					},
					{
						'itemname':'乡亲大药房(党睦店)',
						'itemdesc':'党睦镇孝通街道',
						'itemimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590859068716&di=92cef4b516d4b225a79b50d059f89a94&imgtype=0&src=http%3A%2F%2Fimage.f600.cn%2FAdImages%2F201505071454064691.png',
					    'itemId':4
					}
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
