<template>
    <div class="vue-com">
        我是Vue组件
        <div class="react-com">
            <h3>react antd DatePicker</h3><br>
            <DatePickerInVue></DatePickerInVue>
        </div>
        <CardInVue class="react-com" title="react antd Card">
            <!--react antd的extra属性是传递html片段的，在vue中就使用具名插槽-->
            <template v-slot:extra>
                <a href="#">MOREMORE</a>
            </template>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <!--开始骚操作，验证强壮性-->
            <reactInVue1></reactInVue1>
        </CardInVue>
    </div>
</template>

<script>
    import { DatePicker, Card } from "antd"
    import "antd/dist/antd.css"
    import { applyReactInVue } from 'vuereact-combined'
    import reactInVue1 from './reactInVue1'
    const DatePickerInVue = applyReactInVue(DatePicker)
    const CardInVue = applyReactInVue(Card)
    export default {
        data () {
            return {
                prop1Value: 111
            }
        },
        components: {
            DatePickerInVue,
            CardInVue,
            reactInVue1
        }
    }
</script>

<style scoped>
    .vue-com{
        background: #c0d6cc;
        padding: 20px;
        margin: 20px;
    }
    .react-com{
        background: #b1c1ff;
        padding: 20px;
        margin: 20px;
    }
</style>
