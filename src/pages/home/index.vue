<template>
  <article>
      <div>
          <p>Home页面</p>
        <router-link class="flex-sm-fill text-sm-center nav-link" active-class="active" keep-alive tag="span" to="/home/zhy" > 张浩雨么么哒 </router-link>
        <router-link class="flex-sm-fill text-sm-center nav-link" active-class="active" keep-alive tag="span" to="/home/lsy" > 李山雨么么哒 </router-link>
        <router-link class="flex-sm-fill text-sm-center nav-link" active-class="active" keep-alive tag="span" to="{name:'lsy'}" > 李山雨么么哒 </router-link>
        <router-link to="{name:'lsy'}">lsy</router-link>
      </div>
      <!-- <Zhy></Zhy> -->
      <aside class="aside">
            <router-view></router-view>
      </aside>
  </article>
</template>

<script>
import Zhy from './children/zhy';
import Lsy from './children/lsy';
export default {
    name:'Home',
    components:{
        Zhy,
        Lsy
    }
};
</script>

<style lang="stylus" scoped>
    .aside 
        float right;
        margin-right 200px;
        margin-top  -50px;
</style>
