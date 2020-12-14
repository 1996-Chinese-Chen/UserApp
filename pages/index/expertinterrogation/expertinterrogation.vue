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
						"name":"检验科",
						"id":0
					},
					{
						"name":"病理科",
						"id":1
					},
					{
						"name":"放射科",
						"id":2
					},
					{
						"name":"儿科",
						"id":3
					},
					{
						"name":"妇科",
						"id":4
					}
				],
				itemlist:
				[
					{
						'itemname':'陈显达',
						'itemdesc':'专业的医生',
						'itemimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590859661156&di=fea9f1294adfbd96254afcf632bf53bd&imgtype=0&src=http%3A%2F%2Fquyiyuanoss.oss-cn-qingdao.aliyuncs.com%2FOfficial%2FUpload%2Fdeptimages%2F1002%2FdeptDoctor201501290235390.JPG',
					    'itemId':0,
						'url':'../DocInfo/DocInfo'
					},
					{
						'itemname':'朱长梅',
						'itemdesc':'也专业',
						'itemimg':'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3273730748,2541614118&fm=26&gp=0.jpg',
					    'itemId':1,
						'url':'../DocInfo/DocInfo'
					},
					{
						'itemname':'王八蛋',
						'itemdesc':'心理学专家',
						'itemimg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590859755255&di=01ea2dac1eff2a26680bd239b0ec8d63&imgtype=0&src=http%3A%2F%2Fquyiyuanoss.oss-cn-qingdao.aliyuncs.com%2FOfficial%2FUpload%2Fdeptimages%2F7790001%2FdeptDoctor201506180415090.JPG',
					    'itemId':2,
						'url':'../DocInfo/DocInfo'
					},
					{
						'itemname':'王心风',
						'itemdesc':'不知道怎么说',
						'itemimg':'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1868144315,926951296&fm=26&gp=0.jpg',
					    'itemId':3,
						'url':'../DocInfo/DocInfo'
					},
					{
						'itemname':'陈恒里',
						'itemdesc':'我父亲',
						'itemimg':'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2056060406,4066814898&fm=11&gp=0.jpg',
					    'itemId':4,
						'url':'../DocInfo/DocInfo'
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
