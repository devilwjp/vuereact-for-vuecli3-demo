<template>
    <div>
        <h1>Hello World!</h1>
        <HackthonDemo2></HackthonDemo2>
        <HackthonDemo3></HackthonDemo3>
        <ReactComponent1></ReactComponent1>
    </div>
</template>

<script>
    import HackthonDemo2 from './hackthonDemo2'
    import HackthonDemo3 from './hackthonDemo3'
    import { applyReactInVue } from 'vuereact-combined'
    import ReactDemo1 from '../../react_app/reactComponent1.jsx'
    const ReactComponent1 = applyReactInVue(ReactDemo1)
    export default {
        name: "hackthonDemo1",
        components: {
            HackthonDemo2,
            HackthonDemo3,
            ReactComponent1
        }
    }
</script>

<style scoped>

</style>
