<template>
  <article class="container">
    <section class="row">
      <!-- 导航区域 -->
      <nav class="nav nav-pills flex-column flex-sm-row">
        <router-link
          class="flex-sm-fill text-sm-center nav-link"
          active-class="active"
          keep-alive
          tag="span"
          to="/home"
        >首页</router-link>
        <router-link
          class="flex-sm-fill text-sm-center nav-link"
          active-class="active"
          keep-alive
          tag="span"
          to="/category"
        >分类</router-link>
        <router-link
          class="flex-sm-fill text-sm-center nav-link"
          active-class="active"
          keep-alive
          tag="span"
          to="/recommend"
        >推荐</router-link>
        <router-link
          class="flex-sm-fill text-sm-center nav-link"
          active-class="active"
          keep-alive
          tag="span"
          to="/shopcar"
        >购物车</router-link>
        <router-link
          class="flex-sm-fill text-sm-center nav-link"
          active-class="active"
          keep-alive
          tag="span"
          to="/mine"
        >个人中心</router-link>
      </nav>
    </section>·
    <!-- 路由展示区 -->
    <section class="row">
      <router-view></router-view>
    </section>
  </article>
</template>

<script>
export default {
  name: "Navs"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="stylus">
article {
  width: 100%;
}

nav {
  margin-left: 40px;
}
</style>
