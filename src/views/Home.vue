<template>
    <div class="home">
        <w-card class="merchant-info">
            <w-merchant-item
                :name="info.store_name"
                :address="info.address"
                :desc="info.desc"
                :logo="info.store_avatar"
            />
        </w-card>
        <w-card class="datas">
            <group>
                <cell title="已领取" :value="info.received"></cell>
                <cell title="已核销" :value="info.received"></cell>
                <cell title="未领取" :value="info.unaccalimed"></cell>
            </group>
        </w-card>
        <x-button class="home-btn" type="primary" @click.native="handleScanCode">扫码核销</x-button>
    </div>
</template>
<script>
/**
 * @description 商家首页（入口页面）
 * @author 顾超<beyondc@foxmail.com>
 */
// 组件
import WCard from '@/components/WCard'
import WMerchantItem from '@/components/WMerchantItem'

// 接口
import { wx_config, get_merchant_info } from '@/api/index'
import { wxAuthority, scanQRCode } from '@/plugins/wechat-sdk'

// 依赖
import Qs from 'qs'
import baseUrl from '@/utils/doman'
export default {
    name: 'Home',
    components: {
        WCard,
        WMerchantItem
    },
    data() {
        return {
            info: {}
        }
    },
    created() {
        this.initHome()
    },
    methods: {
        initHome() {
            this.getInfo()
        },
        getInfo() {
            get_merchant_info().then(({ data }) => {
                document.title = data.store_name
                data.unaccalimed = data.total_receive - data.received
                data.desc = `签到${data.checkin_days}天，即享${data.checkin_num}瓶啤酒`
                const file = {
                    filename: data.store_avatar,
                    type: 'avatar'
                }
                const regx = /type=avatar$/i
                data.store_avatar = regx.test(data.store_avatar)
                    ? data.store_avatar
                    : `${baseUrl}v1/files/download?${Qs.stringify(file)}`
                this.info = data
                this.getAth()
            })
        },
        getAth() {
            const url = window.location.href
            wx_config({ url }).then(({ data }) => {
                wxAuthority(data)
            })
        },
        handleScanCode() {
            scanQRCode()
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../styles/variables');
.home {
    padding: @normal-gap;
}
.merchant-info {
    padding: 12px;
}
.datas {
    background: #fff;
    margin-top: @normal-gap;
}
.home-btn {
    margin-top: 28px;
    width: 220px;
}
</style>