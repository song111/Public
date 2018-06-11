<template>
<div class="pagenationbox">
    <h2>{{message}}</h2>
    <div class="chunk">
     <pagenation></pagenation>
</div>
<div class="chunk">
     <pagesplit :total="150" :pageSize="10" :pageIndex="5" @pageIndexChange="tellIndex"></pagesplit>
</div>
</div>
</template>
<script>
import pagenation from "../components/pagenation/pagenation.vue";
import pagesplit from "../components/pagenation/pagesplit.vue";
export default {
  data() {
    return {
      message: "分页"
    };
  },
  components: {
    pagenation,
    pagesplit
  },
  methods: {
    tellIndex(val) {
      console.log("you click page number is " + val);
    }
  }
};
</script>
<style lang="scss" scoped>
.chunk {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

