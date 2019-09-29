<template>
  <article>
    <div>
      <el-button class="button" @click.native= "back">返回</el-button>

      <el-tabs :tab-position="tabPosition">
        <el-tab-pane :label=" category.name" v-for="category in categorys" :key="category.cid">
          <section v-for="floor in category.floors" :key="floor.name">
            <h3>{{ floor.name}}</h3>
            <section class="elementbox">
              <router-link
                :to="{
                name:'list',
                params:{
                  id:ele.api_cid
                },
                query:{
                  cid:ele.api_cid
                }
              }"
                v-for="ele in floor.list"
                :key="ele.api_cid"
                class="element"
              >
                <div class="imgbox">
                  <img :src="ele.img" alt />
                </div>
                <p>{{ ele.name }}</p>
              </router-link>
            </section>
          </section>
        </el-tab-pane>
      </el-tabs>
    </div>
  </article>
</template>

<script>
import api from "../../api";
export default {
  name: "Category",
  data() {
    return {
      tabPosition: "left",
      categorys: null
    };
  },
  methods: {
    back(){
      this.$router.go(-1)
    }
  },
  created() {
    //methods和data已经初始化,常用于操作数据，发起ajax请求
    this.$https({
      url: api.category,
      params: {
        r: "class/category",
        type: 1
      }
    }).then(res => {
      console.log(res.data.data.data);
      this.categorys = res.data.data.data;
    });
  }
};
</script>

<style lang="stylus" scoped>
.button {
  position: fixed;
  top: 40px;
  right: 40px;
}

h3 {
  text-align: left;
}

.imgbox {
  padding: 10px;

  img {
    width: 80px;
    height: 80px;
  }
}

.elementbox {
  display: flex;
  flex-wrap: wrap;
}
</style>