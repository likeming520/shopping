<template>
  <div class="hold">
    <!-- 跳转到指定模块 -->
    <div class="btn-box">
      <button
        v-for="(i,index) in 5"
        @click="goAssignBlock('block'+ index,50)"
        :key="index"
      >GO-{{index}}</button>
    </div>
    <div class="block" ref="block0">0</div>
    <div class="block" ref="block1">1</div>
    <div class="block" ref="block2">2</div>
    <div class="block" ref="block3">3</div>
    <div class="block" ref="block4">4</div>
  </div>
</template>

<script>
  export default {
    name: "DingWei",
    methods: {
      //el 标签  speed 滚动速率 此处是50px 值越大滚动的越快
      goAssignBlock(el, speed) {
        let _this = this;
        let windowH = window.innerHeight; //浏览器窗口高度
        let h = this.$refs[el].offsetHeight; //模块内容高度
        let t = this.$refs[el].offsetTop; //模块相对于内容顶部的距离
        let top = t - (windowH - h) / 2; //需要滚动到的位置，若改为 t 则滚动到模块顶部位置，此处是滚动到模块相对于窗口垂直居中的位置
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop; //滚动条距离顶部高度
        let currentTop = scrollTop; //默认滚动位置为当前滚动条位置，若改为0，则每次都会从顶部滚动到指定位置
        let requestId;
        //采用requestAnimationFrame，平滑动画
        function step() {
          //判断让滚动条向上滚还是向下滚
          if (scrollTop < top) {
            if (currentTop <= top) {
              //   window.scrollTo(x,y) y为上下滚动位置
              window.scrollTo(0, currentTop);
              requestId = window.requestAnimationFrame(step);
            } else {
              window.cancelAnimationFrame(requestId);
            }
            //向下滚动
            currentTop += speed;
          } else {
            if (top <= currentTop) {
              //注：此处 - speed 是解决居中时存在的问题，可自行设置或去掉
              window.scrollTo(0, currentTop - speed);
              requestId = window.requestAnimationFrame(step);
            } else {
              window.cancelAnimationFrame(requestId);
            }
            //向上滚动
            currentTop -= speed;
          }
        }
        window.requestAnimationFrame(step);
      }
    }
  };
</script>

<style scoped>
  .hold {
    width: 300px;
    margin: 0 auto;
  }
  .btn-box {
    background: #ccc;
    position: fixed;
    left: 60%;
  }
  .btn-box button {
    display: block;
    width: 100px;
    height: 50px;
    background: hsl(221, 91%, 77%);
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .btn-box button:hover {
    background: hsl(221, 98%, 68%);
  }
  .block {
    border: 1px solid white;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: white;
    box-sizing: border-box;
    background: hsl(221, 98%, 68%);
  }
</style>
