<template>
    <div class="list-items">
        <ul>
            <li
                v-for = "item in lists"
                :key = "item.id"
            >
                <div class="img-box">
                    <img :src = " item.pic " alt="">
                </div>
                <div class="content-box">
                    <h4> {{ item.d_title }} </h4>
                    <div class="shop-info-box">
                        <div class="price-box">
                            <span> 天猫价：￥{{ item.yuanjia }}  </span>
                            <span> 售后加：￥{{ item.jiage }}  </span>
                        </div>
                        <div class="number-box">
                            <span> 已售 {{ item.xiaoliang }} 件 </span>
                            <span> {{ item.quan_jine }} 元券 </span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import api from '../../api';
export default {
  name: "List",
  data() {
      return {
          lists:null
      }
  },
  created() {  //methods和data已经初始化,常用于操作数据，发起ajax请求
      this.$https({
          url:api.category,
          params:{
            r: 'class/cyajaxsub',
            page: 1,
            cid: this.$route.query.cid,
            px: 't'
          }
      })
      .then(res => {
      console.log("张浩雨: created -> res", res.data.data.content)
          this.lists = res.data.data.content
      })
      .catch(err => console.log(err))
  },    
};
</script>

<style lang="stylus" >
  .list-items 
    height 100%
    ul 
        padding 10px 
        width 100% 
        height 100%
        li 
            width 100% 
            display flex 
            margin-bottom 10px 
            .img-box 
                width 126px 
                height 126px 
                margin-right 12px 
                img 
                    width 100% 
                    height 100% 
</style>