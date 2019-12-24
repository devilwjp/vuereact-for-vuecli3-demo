<template>
    <CardInVue class="react-com" title="react antd Card">
        <template v-slot:extra>
            <a href="#">more</a>
        </template>
    </CardInVue>
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
