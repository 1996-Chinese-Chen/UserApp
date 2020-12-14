<template>
<view class="VerticalBox">
		<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 375upx)">
			<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in sourceList" :key="index" @tap="TabSelect"
			 :data-id="index" v-if="!sumItem(item.id)">
				{{item.name}}
			</view>
		</scroll-view>
		<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 375upx)"
		 :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
			<view class="padding-top padding-lr" v-for="(item,index) in sourceList" :key="item.id" :id="'main-'+index">
				<view class="cu-bar solid-bottom bg-white" v-if="!sumItem(item.id)">
					<view class="action">
						<text class="cuIcon-title text-green"></text> {{item.name}}</view>
				</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item" v-for="(itemchdren,indexChidren) in itemList" :key="index" @tap="rediret" :data-url="itemchdren.url" :data-id="itemchdren.itemId" v-if="item.id==itemchdren.itemId">
						<image class="cu-avatar radius lg"  :src="itemchdren.itemimg"></image>
						<view class="content">
							<view class="text-grey">{{itemchdren.itemname}}</view>
							<view class="text-gray text-sm flex">
								<text class="text-cut">
									<text class=" text-red  margin-right-xs"></text>
									{{itemchdren.itemdesc}}
								</text> </view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabCur:this.tabCur,
				mainCur:this.mainCur,
				verticalNavTop:this.verticalNavTop,
				load:this.load,
				isShowOpenButton:this.isShowOpenButton
			};
		},
		name:'tabList',
		props:{
			scrollLeft:  {
			  type: Number,
			  default: 0
			},
			sourceList:{
				type:Array,
				default: function() {
				  return {
					  name,
					  id
				  };
				}
			},
			itemList:{
				type:Array,
				default: function() {
				  return {
					  itemname,
					  itemdesc,
					  itemimg,
					  itemId,
					  url
				  };
				}
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
			},
			sumItem(e)
			{
				if(this.itemList.length>0)
				{
					var t=this.itemList.find(s=>s.itemId==e)==null;
					return t;
				}
				return false;
			},
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.sourceList.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.sourceList[i].id);
						view.fields({
							size: true
						}, data => {
							this.sourceList[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.sourceList[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.sourceList.length; i++) {
					if (scrollTop > this.sourceList[i].top && scrollTop < this.sourceList[i].bottom) {
						this.verticalNavTop = (this.sourceList[i].id - 1) * 50
						this.tabCur = this.sourceList[i].id
						return false
					}
				}
			}
		}
	}
</script>

<style>
.page {
		height: 100Vh;
		width: 100vw;
	}
	
	.page.show {
		overflow: hidden;
	}
	
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
	
	.VerticalNav.nav {
		width: 200upx;
		white-space: initial;
	}
	
	.VerticalNav.nav .cu-item {
		width: 100%;
		text-align: center;
		background-color: #fff;
		margin: 0;
		border: none;
		height: 50px;
		position: relative;
	}
	
	.VerticalNav.nav .cu-item.cur {
		background-color: #f1f1f1;
	}
	
	.VerticalNav.nav .cu-item.cur::after {
		content: "";
		width: 8upx;
		height: 30upx;
		border-radius: 10upx 0 0 10upx;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0upx;
		bottom: 0;
		margin: auto;
	}
	
	.VerticalBox {
		display: flex;
	}
	
	.VerticalMain {
		background-color: #f1f1f1;
		flex: 1;
	}
</style>
