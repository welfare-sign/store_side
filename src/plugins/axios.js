import Vue from 'vue'
import router from '@/router'

// 依赖
import { AjaxPlugin, Toast } from 'vux'
Vue.use(AjaxPlugin)
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
		if (!loginReg.test(url)) {
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
				Toast.show({
					text: data.message
				})
			}
		}
	},
	error => {
		return Promise.reject(error)
	}
)

export default http
