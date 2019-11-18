import Vue from 'vue'
import { WechatPlugin } from 'vux'
Vue.use(WechatPlugin)

export function wxAuthority (options) {
    return new Promise((resolve, reject) => {
        Vue.wechat.config({
            debug: process.env.NODE_ENV === 'production' ? false : true,
            appId: options.appId, // 必填，公众号的唯一标识
            timestamp: options.timestamp, // 必填，生成签名的时间戳
            nonceStr: options.nonceStr, // 必填，生成签名的随机串
            signature: options.signature,// 必填，签名
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'getLocation', 'chooseWXPay'] // 必填，需要使用的JS接口列表
        })
        Vue.wechat.ready(() => {
            resolve()
        })
        Vue.wechat.error(err => {
            reject(err)
        })
    })
}

