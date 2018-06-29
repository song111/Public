<template>
    <div class="home" id="home">
      <ul class="tab_list">
         <li v-for="(item,index) in palteClass" :key="`plate_${index}`" class="list " @click="currentIndex=index" :class="{active:currentIndex==index}" >
            <router-link :to="{name:item.path}"> {{item.name}}</router-link>
         </li>
      </ul>
         <router-view></router-view>
    </div>
</template>
<script>
export default {
  data() {
    return {
      palteClass: [
        {
          name: "分页组件",
          path: "pagenation"
        },
         {
          name: "树组件",
          path: "vtree"
        }
      ],
      currentIndex: 0
    };
  },
  mathods: {}
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  ul,
  li {
    display: inline-block;
  }
  .tab_list {
    height: 40px;
    min-width: 800px;
    background-color: #c9c9c9;
    border-radius: 5px;
    margin: 20px 0 40px 0;
    padding: 10px;
  }
  .list {
    height: 40px;
    line-height: 40px;
    color: #393939;
    font-size: 20px;
    font-weight: bold;
    padding: 0 10px;
  }
  .active {
    border-bottom: 2px solid #393939;
  }
}
</style>
