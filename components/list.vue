<template>
	<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
		<view class="cu-item" :class="menuArrow?'arrow':''" v-for="(item,index) in nameList" :key="index" >
			<view class="card-menu" @tap="redictTo" :data-id="item.tabPath" :data-url="item.urlPath">
				<text :class='item.iconClass'></text>
				<text :class='item.textClass'>{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'list',
		props: {
		  dataId: {
		    type: String,
		    default: 'list'
		  },
		  menuBorder:{
			type: Boolean,
			default:true 
		  },
		  menuArrow:{
		  			type: Boolean,
		  			default:true 
		  },
		  menuCard:{
		  			type: Boolean,
		  			default:false 
		  },
		  nameList: {
		    type: Array,
		    default: function() {
		      return {
		       	text,
		       	iconClass,
		       	textClass,
				navigat,
				urlPath,
		      };
		    }
		  }
		},
		data() {
			return {
			};
		},
		methods:
		{
			redictTo(e)
			{
				if(e.currentTarget.dataset.id!=null)
				{
				    uni.switchTab({
					         url:e.currentTarget.dataset.id,
					         success(e)
					         {
						         console.log("success")
					        }
					         ,fail(e) {
						         console.log(e)
					         }
				         });
				}
				else if(e.currentTarget.dataset.url!=null)
				{
					uni.navigateTo({
					         url:e.currentTarget.dataset.url,
					         success(e)
					         {
						         console.log("success")
					        }
					         ,fail(e) {
						         console.log(e)
					         }
					     });
				}
			}
		}
	}
</script>
