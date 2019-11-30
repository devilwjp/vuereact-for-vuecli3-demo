<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/reactInVue1">vue组件引用react组件</router-link> |
      <router-link to="/reactInVue2">vue组件引用react组件(advanced)</router-link> |
      <router-link to="/reactAntdInVue">使用react antd进行复杂嵌套</router-link> |
      <router-link to="/lazyReactInVue">路由懒加载react组件</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
    name:'aaa'
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
