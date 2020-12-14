<template>
  <div class="hm-head-portrait-card">
    <div class="box">
      <div class="bd">
        <image class="actionBg" :src="options.actionBg" />
        <image class="avator" :src="options.avator" />
        <div class="wrap">
          <text class="name">{{ options.name }}</text>
          <text class="info">{{ options.info }}</text>
        </div>
      </div>
      <div class="ft">
        <text class="num">{{ options.num }}</text>
        <text class="num3">{{ options.num3 }}</text>
      </div>
      <text class="fans">{{ options.fans }}</text>
      <text class="attention">{{ options.attention }}</text>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HmHeadPortraitCard',
  props: {
    dataId: {
      type: String,
      default: 'hm-head-portrait-card'
    },
    options: {
      type: Object,
      default: function() {
        return {
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
@import './index.response.css';
</style>
