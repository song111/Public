<template>
    <div class="home" id="home">
        <li v-for="(item,index) in palteClass" :key="`plate_${index}`">
            <router-link :to="{name:item.path}"> {{item.name}}</router-link>
        </li>
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
        }
      ]
    };
  },
  mathods: {}
};
</script>

<style lang="scss" scoped>
</style>
