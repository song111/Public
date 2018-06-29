<template>
   <div class="pagenationbox">
      <h2 class="title">{{message}}</h2>
      <div class="chunk">
        <pagenation :total="150" :pageSize="10" :pageIndex="index" @pageIndexChange="tellIndex"></pagenation>
      </div>
      <div class="pagenum">您当前是第 <span> {{index}}</span> 页</div>
   </div>
</template>
<script>
import pagenation from "../../components/pagenation/pagenation.vue";
export default {
  data() {
    return {
      message: "分页",
      index: 5
    };
  },
  components: {
    pagenation
  },
  methods: {
    tellIndex(val) {
      this.index = val;
      console.log("you click page number is " + val);
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  text-align: center;
}
.chunk {
  margin-top: 20px;
  margin-bottom: 20px;
}
.pagenum {
  text-align: center;
  font-size: 18px;
  span {
    color: #fa3929;
    font-weight: bold;
  }
}
</style>

