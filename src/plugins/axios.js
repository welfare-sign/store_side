import Vue from 'vue'
import router from '@/router'

// 依赖
import { AjaxPlugin, ToastPlugin } from 'vux'
Vue.use(AjaxPlugin)
Vue.use(ToastPlugin)
import Cookies from 'js-cookie'
import baseUrl from '@/utils/doman'
const http = Vue.http.create({
	baseURL: baseUrl || '',
	timeout: 60 * 1000 // Timeout
	// withCredentials: true, // Check cross-site Access-Control
})
http.interceptors.request.use(
	config => {
		const url = config.url
		const loginReg = /login$/
		const wxConfReg = /wx\/config$/
		if (!loginReg.test(url) && !wxConfReg.test(url)) {
			const Authorization = Cookies.get('Authorization')
			if (!Authorization) {
				router.push({ name: 'login' })
			} else {
				config.headers.Authorization = Authorization
			}
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

http.interceptors.response.use(
	response => {
		const data = response.data
		if (data.status) {
			return {
				data: data.data,
				res: data
			}
		} else {
			if (data.code === 'NO_PERMISSION') {
				router.replace({ name: 'login' })
			} else {
				Vue.$vux.toast.show({
					text: data.message,
					type: 'text'
				})
				return Promise.reject(data)
			}
		}
	},
	error => {
		return Promise.reject(error)
	}
)

export default http
