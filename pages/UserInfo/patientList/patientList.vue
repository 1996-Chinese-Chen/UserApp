<template>
	<view class="page">
	<uni-search-bar placeholder="搜索就诊人姓名" cancelButton="auto" radius="100"></uni-search-bar>

		<view class="cu-list menu sm-border  margin-top">
			<view class="cu-item arrow no-card" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in patientList" :key="index"
				 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-id='item.id' :data-url='item.urlPath' :data-target="'move-box-' + index" @tap="redirect" >
				<view class="content">
					<text class="cuIcon-circlefill text-pink"></text>
					<text class="text-grey">{{item.name}}  {{item.sex}}  {{item.age}}</text>
				</view>
				<view class="move">
					<view class="bg-red">删除</view>
				</view>
			</view>
		</view>
		<view class="padding">
			<button class="cu-btn block bg-blue margin-tb-sm lg"  type="" @tap="redirectToAdd">新增</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					modalName: null,
					listTouchStart: 0,
					listTouchDirection: null,
					patientList:[
						{
							'id':'0',
							'name':'陈显达',
							'sex':'男',
							'age':'24岁',
						    'urlPath':'../AddPatient/AddPatient'
						},
						{
							'id':'1',
							'name':'朱密',
							'sex':'女',
							'age':'24岁',
							'urlPath':'../AddPatient/AddPatient'
						},
						{
							'id':'2',
							'name':'李喜平',
							'sex':'女',
							'age':'51岁',
							'urlPath':'../AddPatient/AddPatient'
						},
						{
							'id':'3',
							'name':'陈恒立',
							'sex':'男',
							'age':'51岁',
							'urlPath':'../AddPatient/AddPatient'
						},
						{
							'id':'4',
							'name':'陈显达',
							'sex':'男',
							'age':'24岁',
						    'urlPath':'../AddPatient/AddPatient'
						},
						{
							'id':'5',
							'name':'朱密',
							'sex':'女',
							'age':'24岁',
							'urlPath':'../AddPatient/AddPatient'
						},
						{
							'id':'6',
							'name':'李喜平',
							'sex':'女',
							'age':'51岁',
							'urlPath':'../AddPatient/AddPatient'
						},
						{
							'id':'7',
							'name':'陈恒立',
							'sex':'男',
							'age':'51岁',
							'urlPath':'../AddPatient/AddPatient'
						},
					],
			}
		},
		methods: {
			redirect(e)
			{
				if(e.currentTarget.dataset.id!=null&&e.currentTarget.dataset.url!=null)
				{
					uni.navigateTo({
						url:e.currentTarget.dataset.url+"?"+e.currentTarget.dataset.id
					})
				}
			},
			redirectToAdd()
			{
				uni.navigateTo({
					url:'../AddPatient/AddPatient'
				})
			},
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},
			
			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},
			
			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			}
		}
	}
</script>

<style>

</style>
