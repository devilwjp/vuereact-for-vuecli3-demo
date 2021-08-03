<template>
    <div class="vue-com">
        我是Vue组件
      <div class="react-com">
        <ReactCom :prop1="prop1Value" prop2="222" @event1="callEvent1">
          我是普通插槽
          <template v-slot:slotA>
            我是插槽A
          </template>
          <template v-slot:slotB>
            我是插槽B
          </template>
          <template v-slot:slotC="context">
            我是作用域插槽：{{context.value}}
          </template>
        </ReactCom>
      </div>
    </div>
</template>

<script>
    import { applyReactInVue } from 'vuereact-combined'
    const ReactCom = applyReactInVue(require('../../react_app/cc'))
    export default {
        name: 'demo2',
        data () {
            return {
                prop1Value: 111
            }
        },
        methods: {
            callEvent1 (...args) {
                console.log(args)
            }
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
