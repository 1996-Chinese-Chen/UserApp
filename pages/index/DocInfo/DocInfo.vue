<template>
	<view>
<HmHeadPortraitCard :options="options"></HmHeadPortraitCard>
	   <scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in itemlist" :key="index" @tap="tabSelect" :data-id="index">
				{{item.text}}
			</view>
		</scroll-view>
		<view  v-if="showInfo&&!showDate">
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>擅长
			</view>
		</view>
		<view class="padding bg-white">
			<view class="text-content  radius">我于杀戮之中绽放 ,亦如黎明中的花朵</view>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>简历
			</view>
		</view>
		<view class="padding bg-white">
			<view class="text-content  radius">我于杀戮之中绽放 ,亦如黎明中的花朵</view>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue"></text>证书
			</view>
		</view>
			<view class="cu-card dynamic" :class="true?'no-card':''">
				<view class="grid flex-sub padding-lr col-2 grid-square" >
					<view class="bg-img only-img"  style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg);"
					 v-for="(item,index) in 4" :key="index">
					</view>
				</view>
			</view>
	</view>
	<view v-else-if="!showInfo&&showDate">
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<input  :value="inputDate" disabled="true"/>
				<input  :value="inputTime" disabled="true"/>
				<view class="text-content">5元</view>
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				
			</view>
		</view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				showInfo:true,
				showDate:false,
				inputDate:'2020-06-01',
				inputTime:'05:00',
				itemlist:[
					{
						'text':'个人信息'
					},
					{
						'text':'接诊日期'
					}
				],
				options:{
					actionBg:'/static/hm-head-portrait-card/images/HeadBack.png',
					avator:'/static/hm-head-portrait-card/images/Head.jpg',
					name: '@李莉儿',
					info: '旅行社代理人',
					num:150,
					num3:250,
					fans:'问诊量',
					attention:'接诊量'
				}
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				if(this.TabCur==0)
				{
					this.showDate=false,
					this.showInfo=true
				}
				else if(this.TabCur==1)
				{
					this.showDate=true,
					this.showInfo=false
				}
			},
			DateChange(e) {
				this.date = e.detail.value
			},
		}
	}
</script>

<style>

</style>
