<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Navs/>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Navs from './components/Navs.vue'

export default {
  name: 'app',
  components: {
    Navs
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
