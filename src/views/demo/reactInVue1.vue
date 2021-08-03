<template>
    <div class="vue-com">
        我是Vue组件
      <div class="react-com">
        <ReactCom ref="reactCom" :prop1="prop1Value" prop2="222">我是普通插槽</ReactCom>
      </div>

    </div>
</template>

<script>
    import { applyReactInVue } from 'vuereact-combined'
    const ReactCom = applyReactInVue(require('../../react_app/cc'))
    export default {
        name: "reactInVue1",
        data () {
            return {
                prop1Value: 111
            }
        },
        mounted () {
            console.log(this.$refs.reactCom.reactRef)
        },
        components: {
            ReactCom
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
