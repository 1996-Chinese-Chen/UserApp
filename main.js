import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'
import list from '@/components/list.vue'
import tablist from '@/components/tabList.vue'
import indexList from '@/components/indexList.vue'
import HmHeadPortraitCard from '@/components/hm-head-portrait-card/index.vue';
Vue.component('HmHeadPortraitCard',HmHeadPortraitCard)
Vue.component('indexList',indexList)
Vue.component('cu-custom',cuCustom)
Vue.component('list',list)
Vue.component('tablist',tablist)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
