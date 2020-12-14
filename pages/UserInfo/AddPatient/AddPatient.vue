<template>
	<view class="page">
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">姓名</view>
				<input placeholder="请输入姓名" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">身份证号码</view>
				<input placeholder="请输入身份证号码" name="input"></input>
				<button class='cu-btn bg-green shadow'>获取医保</button>
			</view>
			<view class="cu-form-group">
				<view class="title">医保卡号</view>
				<input  name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">出生日期</view>
				<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">性别</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{picker[index]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">手机号码</view>
				<input placeholder="输入框带标签" name="input"></input>
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>
						+86
					</view>
					<view class="cu-tag line-blue">
						中国大陆
					</view>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">验证码</view>
				<input placeholder="输入框带个按钮" name="input"></input>
				<button class='cu-btn bg-green shadow'>验证码</button>
			</view>
			<view class="cu-form-group">
				<view class="title">与本人关系</view>
			<picker @change="ItemChange" :value="itemIndex" :range="item">
				<view class="picker">
					{{item[itemIndex]}}
				</view>
			</picker>
			</view>
			<view class="padding">
				<button class="cu-btn block bg-blue margin-tb-sm lg"  type="">保存</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				itemIndex:0,
				picker: ['男','女'],
				date: '2018-12-25',
				item:['本人','父母','配偶','子女','其他']
			};
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
			ItemChange(e)
			{
				this.itemIndex = e.detail.value
			},
			DateChange(e) {
				this.date = e.detail.value
			}
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
