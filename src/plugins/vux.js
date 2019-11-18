import Vue from 'vue'
import {
	XButton,
	Group,
	CellBox,
	XImg,
	Qrcode,
	Cell,
	WechatPlugin,
	AjaxPlugin
} from 'vux'

Vue.component('x-button', XButton)
Vue.component('group', Group)
Vue.component('cell-box', CellBox)
Vue.component('x-img', XImg)
Vue.component('qrcode', Qrcode)
Vue.component('cell', Cell)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
