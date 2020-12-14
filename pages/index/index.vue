<template>
	<view class="page">
		<view class="cu-bar search bg-white">
			<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big11010.jpg"></view>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input :adjust-position="false" type="text" placeholder="搜索图片、文章、视频"></input>
			</view>
			<view class="action">
				<text>广州</text>
				<text class="cuIcon-triangledownfill"></text>
			</view>
		</view>
	<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'":indicator-dots="true"  :circular="true"
	 :autoplay="true" interval="2000" duration="500">
		<swiper-item v-for="(item,index) in swiperList"  :key="index">
			<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
			<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
		</swiper-item>
	</swiper>
	<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
		<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
			<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]" :data-id="item.url" @tap="redirect">
				<view class="cu-tag badge" v-if="item.badge!=0">
					<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
				</view>
			</view>
			<text>{{item.name}}</text>
		</view>
	</view>
	<view class="cu-bar bg-white solid-bottom margin-top">
		<view class="action">
			<text class="cuIcon-title text-orange "></text> 专家列表
		</view>
	</view>
	<indexList :sourceItemList='docList'></indexList>
	</view>
</template>

<script>
import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
export default {
	components: {uniSearchBar},
	data() {
		return {
			gridCol: 5,
			gridBorder: false,
			TabCur: 0,
			scrollLeft: 0,
			docList:[
				{
					'docName':'陈显达',
					'docDesc':'从事医疗行业三十年',
					'docId':0,
					'url':'DocInfo/DocInfo',
					'docHead':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590859661156&di=fea9f1294adfbd96254afcf632bf53bd&imgtype=0&src=http%3A%2F%2Fquyiyuanoss.oss-cn-qingdao.aliyuncs.com%2FOfficial%2FUpload%2Fdeptimages%2F1002%2FdeptDoctor201501290235390.JPG'
				},
				{
					'docName':'李希平',
					'docDesc':'从事医疗行业三十年',
					'docId':1,
					'url':'DocInfo/DocInfo',
					'docHead':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590859755255&di=01ea2dac1eff2a26680bd239b0ec8d63&imgtype=0&src=http%3A%2F%2Fquyiyuanoss.oss-cn-qingdao.aliyuncs.com%2FOfficial%2FUpload%2Fdeptimages%2F7790001%2FdeptDoctor201506180415090.JPG'
				},
				{
					'docName':'陈恒里',
					'docDesc':'从事医疗行业三十年',
					'docId':2,
					'url':'DocInfo/DocInfo',
					'docHead':'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1868144315,926951296&fm=26&gp=0.jpg'
				},
				{
					'docName':'陈鸽',
					'docDesc':'从事医疗行业三十年',
					'docId':3,
					'url':'DocInfo/DocInfo',
					'docHead':'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
				},
				{
					'docName':'王心风',
					'docDesc':'从事医疗行业三十年',
					'docId':4,
					'url':'DocInfo/DocInfo',
					'docHead':'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg'
				}
			],
			cuIconList: [{
				cuIcon: 'cardboardfill',
				color: 'red',
				badge: 120,
				name: '医学影像',
				url:'medicalImage/medicalPatient/medicalPatient'
			}, {
				cuIcon: 'recordfill',
				color: 'orange',
				badge: 1,
				name: '健康档案'
			}, {
				cuIcon: 'picfill',
				color: 'yellow',
				badge: 0,
				name: '检验报告',
				url:'report/reportPatient/reportPatient'
			}, {
				cuIcon: 'noticefill',
				color: 'olive',
				badge: 22,
				name: '电子病历'
			}, {
				cuIcon: 'upstagefill',
				color: 'cyan',
				badge: 0,
				name: '床位预约',
				url:'bedApply/bedApply'
			}, {
				cuIcon: 'clothesfill',
				color: 'blue',
				badge: 0,
				name: '处方申请'
			}, {
				cuIcon: 'discoverfill',
				color: 'purple',
				badge: 0,
				name: '在线购药',
				url:'onlineBuying/onlineBuying'
			}, {
				cuIcon: 'questionfill',
				color: 'mauve',
				badge: 0,
				name: '专家挂号',
				url:'expertinterrogation/expertinterrogation'
			}, {
				cuIcon: 'commandfill',
				color: 'purple',
				badge: 0,
				name: '病种查询'
			}, {
				cuIcon: 'brandfill',
				color: 'mauve',
				badge: 0,
				name: '会诊申请'
			}],
			
			swiperList: [{
				id: 0,
				type: 'image',
				url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
			}, {
				id: 1,
				type: 'image',
				url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
			}, {
				id: 2,
				type: 'image',
				url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
			}, {
				id: 3,
				type: 'image',
				url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
			}, {
				id: 4,
				type: 'image',
				url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
			}, {
				id: 5,
				type: 'image',
				url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
			}, {
				id: 6,
				type: 'image',
				url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
			}],
			dotStyle: false,
		};
	},
	onLoad() {
		var user={};
		user.Age="1";
		uni.request({
			url:'http://localhost:9999/Hello',
			data:JSON.stringify(user),
			method:'POST',
			success(e) {
				debugger;
			}
		})
	},
	methods: {
		redirect(e)
		{
			uni.navigateTo({
				url:e.currentTarget.dataset.id
			})
		}
	}
};
</script>

<style>
</style>
