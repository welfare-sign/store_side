<template>
    <div class="write-off">
        <section>
            <p class="h" v-if="writeoffDone">核销成功</p>
            <p class="h1" v-else>用户 {{customerInfo.nickname}} 剩余</p>
            <countup :start-val="0" :end-val="num" class="countup" />
        </section>
        <footer>
            <p class="h1" v-if="writeoffDone">用户 {{customerInfo.nickname}} 剩余：{{record.total_receive - record.received}}</p>
            <p class="h1" v-else>本次核销</p>
            <x-input type="number" v-model="writeoffNumber" placeholder="请输入核销数量" v-if="!writeoffDone"></x-input>
            <x-button type="primary" :disabled="!writeoffNumber" @click.native="handleConfirm" v-if="!writeoffDone">确认</x-button>
            <x-button type="primary" class="back-btn" @click.native="handleBack" v-if="writeoffDone">返回</x-button>
        </footer>
    </div>
</template>
<script>
// 接口
import { writeoff_info, writeoff } from '@/api/index'
export default {
    name: 'WriteOff',
    data() {
        return {
            writeoffDone: false,
            customerId: '',
            customerInfo: {},
            storeInfo: {},
            record: {},
            writeoffNumber: '',
            thisWriteoffNum: 0
        }
    },
    computed: {
        num() {
            const record = this.record
            const reminder = record.total_receive - record.received
            return this.writeoffDone ? this.WriteoffNum : reminder
        }
    },
    created() {
        const query = this.$route.query
        this.customerId = query && query.customer_id
        this.initWriteOff()
    },
    methods: {
        initWriteOff() {
            writeoff_info({ customer_id: this.customerId }).then(({ data }) => {
                document.title = data.merchant.store_name
                this.customerInfo = data.customer
                this.storeInfo = data.merchant
                this.record = data.issue_record
            })
        },
        handleConfirm() {
            const data ={
                customer_id: this.customerId,
                num: this.writeoffNumber
            }
            writeoff(data).then(({data}) => {
                this.writeoffNumber = ''
                this.customerInfo = data.customer
                this.storeInfo = data.merchant
                this.record = data.issue_record
                this.thisWriteoffNum = data.num
                this.writeoffDone = true
            })
        },
        handleBack() {
            this.$router.replace({name: 'home'})
        }
    }
}
</script>
<style lang="less" scoped>
@import '../styles/variables';
.write-off {
    height: 100vh;
    background: #f9f9f9;
}
section {
    text-align: center;
    padding: @normal-gap * 2;
    box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1);
    background: #fff;
}
.h1 {
    font-size: @main-title-font-size;
}
.countup {
    color: @primary-color;
    font-size: 44px;
}
footer {
    text-align: center;
    padding: 20px 77.5px;
    /deep/ .weui-cell {
        &::before {
            content: none;
        }
        margin: 12px 0;
        background: #e6e6e6;
        border-radius: 100px;
        .weui-cell__bd {
            & > input {
                text-align: center;
            }
        }
    }
}
.back-btn {
    margin-top: @normal-gap;
}
</style>