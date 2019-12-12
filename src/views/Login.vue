<template>
    <div class="login">
        <h1 class="title">福力签商户后台</h1>
        <group class="form-group">
            <x-input placeholder="请输入手机号" type="text" :max="11" v-model="contact_phone">
                <w-countdown
                    slot="right"
                    v-model="countStart"
                    :color="countColor"
                    @click-event="handleStart"
                />
            </x-input>
            <x-input placeholder="请输入验证码" :max="6" v-model="code"></x-input>
        </group>
        <x-button type="primary" @click.native="handleLogin" :disabled="loginDisabled">登录</x-button>
        <div class="remind">
            <p>还未入驻的商户</p>
            <p>可拨打021-51022099了解详情</p>
        </div>
    </div>
</template>
<script>
// 依赖
import Cookies from 'js-cookie'

// 组件
import WCountdown from '@/components/WCountdown'

// 接口
import { verify_code, lgoin } from '@/api/index'

// 常量
// const mobileRegx = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
const mobileRegx = /^1[3456789]\d{9}$/
export default {
    name: 'Login',
    components: {
        WCountdown
    },
    data() {
        return {
            countStart: false,
            contact_phone: '',
            code: ''
        }
    },
    computed: {
        countColor() {
            if (mobileRegx.test(this.contact_phone)) {
                return '#FF5F00'
            } else {
                return '#666'
            }
        },
        loginDisabled() {
            return !(mobileRegx.test(this.contact_phone) && this.code)
        }
    },
    methods: {
        handleStart() {
            const _this = this
            if (mobileRegx.test(this.contact_phone)) {
                verify_code({ mobile: this.contact_phone }).then(({ res }) => {
                    // debugger
                    _this.$vux.toast.show({
                        type: 'text',
                        text: '验证码发送成功'
                    })
                    _this.countStart = true
                })
            }
        },
        handleLogin() {
            const _this = this
            if (this.contact_phone && this.code) {
                lgoin({
                    contact_phone: this.contact_phone,
                    code: this.code
                }).then(({ data }) => {
                    Cookies.set('Authorization', data)
                    _this.$router.push({ name: 'home' })
                })
            } else {
                _this.$vux.toast.show({
                    type: 'text',
                    text: '请检查你的输入'
                })
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import '../styles/variables';
.login {
    padding: @normal-gap @assist-gap*2;
    /deep/ .weui-cells:after {
        content: none;
    }
    /deep/ .weui-cell:before {
        content: none;
    }
}
.title {
    font-size: 24px !important;
    margin-bottom: @assist-gap*2;
}
.form-group {
    margin-bottom: @normal-gap * 2;
    margin-left: -@normal-gap;
    margin-right: -@normal-gap;
}
.remind {
    padding-top: 30px;
    p {
        text-align: center;
        font-size: @normal-font-size;
        color: @assist-font-color;
    }
}
</style>