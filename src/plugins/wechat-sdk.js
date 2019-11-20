import Vue from 'vue'
const wx = require('weixin-js-sdk')

const jsApiList = [
  'scanQRCode'
]

export function wxAuthority(options) {
    wx.config({
      debug: true,
      appId: options.appid, // 必填，公众号的唯一标识
      timestamp: options.timestamp, // 必填，生成签名的时间戳
      nonceStr: options.noncestr, // 必填，生成签名的随机串
      signature: options.signature, // 必填，签名
      jsApiList // 必填，需要使用的JS接口列表
    })
  
    wx.ready(() => {
      wx.checkJsApi({
        jsApiList,
        success(res) {
          console.log(res)
        }
      })
    })
    wx.error(err => {
      console.log(err.message)
      // Vue.$vux.toast.show({
      //   text: `微信公众号授权失败${err}`,
      //   type: 'text'
      // })
    })
  }

  export function scanQRCode() {
    wx.scanQRCode({
      needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
      success(res) {
          console.log(res)
      }
    });
  }

