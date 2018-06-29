<template>
<div class="pagenation" :id="id">
  <div class="page" v-show="ispageShow">
    <div class="pagebox clearfloat">
      <button  class="prePage"  @click="currentIndex--" >上一页</button>
      <ul class="pagelis">
        <li v-show="currentIndex>5" :class="{active:currentIndex==1}" @click="jumpPage(1)">1</li>
        <li class="ellipsis" v-show="showLeftMore" @click="currentIndex-=2">...</li>
        <li v-for="num in shownPages" :key="`num_${num}`" @click="jumpPage(num)" :class="{active:currentIndex==num}">{{num}} </li>
         <li class="ellipsis" v-show="showRightMore" @click="currentIndex+=2">...</li>
         <li :class="{active:currentIndex==pages}" v-show="currentIndex<pages-4"  @click="jumpPage(pages)">{{pages}}</li>
      </ul>
       <button  class="nextPage"  @click="currentIndex++">下一页</button>
       <div class="jumping">
         跳转到:<input class="jumpNum" v-model="jumpNum" type="text" @keyup.enter="judgeJumpPage" @blur="judgeJumpPage">页
       </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "pagenation",
  props: {
    total: {
      //文章总数
      type: Number,
      default: 10,
      required: true
    },
    pageSize: {
      //单页数
      type: Number,
      default: 10,
      required: true
    },
    pageIndex: {
      // 在组件内部不可写
      // 当前页
      type: Number,
      default: 1,
      required: true
    }
  },
  data() {
    return {
      id: `pagenation&{Math.random()*10000}`,
      currentIndex: this.pageIndex, // 当前页码
      jumpNum: null // 跳转页
    };
  },
  watch: {
    currentIndex(val) {
      this.judgeBtnDisable(val); // 判断翻页按钮的禁用
      this.emitPageIndex(val);
    }
  },
  computed: {
    // 总页数
    pages() {
      return Math.ceil(Number(this.total) / Number(this.pageSize));
    },
    ispageShow() {
      return this.pages && this.pages != 1;
    },
    showLeftMore() {
      if (this.pages <= 7) {
        //总共显示7个数字为页码
        return false;
      }
      return this.currentIndex > 5;
    },
    showRightMore() {
      if (this.pages <= 7) {
        return false;
      }
      return this.currentIndex < this.pages - 4;
    },
    // 显示的数字列表
    shownPages() {
      let firstNum = 1;
      let lastNum = this.pages;
      let pageArray = new Array();
      // 除了中间和结尾,中间始终显示五位数
      if (this.pages > 7) {
        if (this.currentIndex > 5 && this.currentIndex < this.pages - 4) {
          // 当处于中间的时候,规定显示分页数字
          firstNum = Number(this.currentIndex) - 2;
          lastNum = Number(this.currentIndex) + 2;
        } else {
          if (this.currentIndex <= 5) {
            firstNum = 1;
            lastNum = 6;
          } else {
            firstNum = this.pages - 5;
            lastNum = this.pages;
          }
        }
      }
      // 循环填充中间数
      while (firstNum <= lastNum) {
        pageArray.push(firstNum);
        firstNum++;
      }
      return pageArray;
    }
  },
  mounted() {
    this.$nextTick(function() {
      let prePage = document.getElementsByClassName("prePage")[0];
      prePage.disabled = true;
    });
  },
  methods: {
    jumpPage(val) {
      this.currentIndex = val;
    },
    judgeBtnDisable(val) {
      let prePage = document.getElementsByClassName("prePage")[0];
      let nextPage = document.getElementsByClassName("nextPage")[0];
      if (val == 1) {
        prePage.disabled = true;
        nextPage.disabled = false;
      } else if (val == this.pages) {
        prePage.disabled = false;
        nextPage.disabled = true;
      } else {
        nextPage.disabled = false;
        prePage.disabled = false;
      }
    },
    judgeJumpPage() {
      if (isNaN(Number(this.jumpNum))) {
        // 用isNaN 方法来判断是否为数字
        this.jumpNum = 1;
      } else if (Number(this.jumpNum) > this.pages) {
        this.jumpNum = this.pages;
      } else if (Number(this.jumpNum) < 1) {
        this.jumpNum = 1;
      }
      this.jumpPage(this.jumpNum);
    },
    emitPageIndex(val) {
      // 把当前值传给父元素
      this.$emit("pageIndexChange", val);
    }
  }
};
</script>
<style lang="scss" scoped>
// 定义颜色
$bgcolor: #fff;
$ftcolor: #606060;
$accolor: #0088ca;
$bdcolor: #ccc;
$btnDisableColor: #999999;
$height: 28px;
$ftsize: 14px;

@mixin reset {
  outline: none;
  background-color: $bgcolor;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  font-size: $ftsize;
  font-weight: bold;
  color: $ftcolor;
  height: $height;
  background-color: transparent;
}
// 尺寸
.pagebox {
  background-color: transparent;
  color: $ftcolor;
  text-align: center;
  font-family: "Microsoft Yahei", "Arial";
  font-size: $ftsize;
  font-weight: bold;
  button {
    @include reset;
    min-width: 35.5px;
    line-height: $height;
    border: none;
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
    color: $btnDisableColor;
  }
  ul {
    display: inline-block;
    vertical-align: top;
    li {
      display: inline-block;
      vertical-align: top;
      min-width: 35.5px;
      height: $height;
      line-height: $height;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
    }
    li:hover {
      color: $accolor;
    }
    .ellipsis {
    }
    .active {
      color: $accolor;
    }
  }
  // 跳转页
  .jumping {
    display: inline-block;
    vertical-align: top;
    height: $height;
    line-height: $height;
    .jumpNum {
      border-radius: 4px;
      border: 1px solid $bdcolor;
      margin: 0px 5px;
      width: 40px;
      @include reset;
    }
  }
}
</style>


