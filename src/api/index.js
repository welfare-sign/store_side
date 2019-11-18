/**
 * @description 商户端相关接口
 * @author 顾超<beyondc@foxmail.com>
 * @swagger http://47.100.29.191:18080/swagger/index.html
 */

import http from '@/plugins/axios'

export function wx_config(params) {
    /**
     * @description 获取微信接口配置
     * @retrun (promise)
     * 
     * @params (object):
     *  @url (string): 当前页URL，不包含#及其后面部分
     */
    return http({
        url: 'v1/wx/config',
        method: 'get',
        params
    })
}

export function lgoin (data) {
    /**
     * @description 商户登录
     * @return (promise)
     * 
     * @data (object):
     *  @code (string): 验证码
     *  @contact_phone (string): 手机号
     */
    return http({
        url: 'v1/merchants/login',
        method: 'post',
        data
    })
}

export function verify_code(params) {
    /**
     * @description 发送验证码
     * @return (promise)
     * 
     * @params (object):
     *  @mobile (string): 手机号
     */
    return http({
        url: 'v1/verify_code',
        method: 'get',
        params
    })
}

export function get_merchant_info(params) {
    /**
     * @description 获取商户详情信息
     * @return (promise)
     * 
     * @parmas (object): 
     *  @merchant_id (string): 商户ID,商户访问时可不传
     */
    return ({
        url: 'v1/merchants/detail',
        method: 'get',
        params
    })
}

export function writeoff_info (params) {
    /**
     * @description 商户获取核销信息
     * @return (promise)
     * 
     * @params (object):
     *  @customer_id (number): 客户ID
     */
    return http({
        url: 'v1/merchants/writeoff',
        method: 'get',
        params
    })
}

export function writeoff() {
    /**
     * @description 商户核销
     * @return (promise)
     */
    return http({
        url: 'v1/merchants/writeoff',
        method: 'post'
    })
}