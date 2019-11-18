<template>
    <div class="home">
        <w-card class="merchant-info">
            <w-merchant-item
                :name="info.name"
                :address="info.address"
                :desc="info.desc"
                :logo="info.logo"
            />
        </w-card>
        <w-card class="datas">
            <group>
                <cell title="已领取" :value="datas.received"></cell>
                <cell title="已核销" :value="datas.applied"></cell>
                <cell title="未领取" :value="datas.unaccalimed"></cell>
            </group>
        </w-card>
        <x-button class="home-btn" type="primary">扫码核销</x-button>
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
export default {
    name: 'Home',
    components: {
        WCard,
        WMerchantItem
    },
    data() {
        return {
            info: {
                id: '1',
                name: '西域狼烧烤（云南路店）',
                address: '云南南路100号',
                desc: '签到5天，即享30瓶啤酒',
                logo: require('@/assets/imgs/1.png')
            },
            datas: {
                received: 330,
                applied: 45,
                unaccalimed: 285
            }
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