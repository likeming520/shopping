<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick"/>
    <scroll class="content" :probe-type="3" @click="contentScroll1">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo"/>
      <detail-param-info :param-info="paramInfo"/>
      <detail-comment-info :comment-info="commentInfo"/>
      <goods-list :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "../home/childComps/DetailShopInfo";
  import DetailGoodsInfo from "../home/childComps/DetailGoodsInfo";
  import DetailParamInfo from "../home/childComps/DetailParamInfo";
  import DetailCommentInfo from "../home/childComps/DetailCommentInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import Scroll from "../../components/common/scroll/Scroll";
  import GoodsList from "../../components/common/goods/GoodsList";
  import BackTop from "../../components/content/backTop/BackTop";

  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "../../network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      Scroll,
      BackTop,
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [0, 1000, 2000, 3000],
        isShowBackTop: false,
      }
    },

    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid

      //2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        //1.获取顶部图片的轮播数据
        const data = res.result;
        this.topImages = data.itemInfo.topImages;

        //2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

        //3.获取店铺信息
        this.shop = new Shop(data.shopInfo);

        //4.获取商品信息
        this.detailInfo = data.detailInfo;

        //5.保存参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

        //6.取出评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      });

      //3.请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
    },
    methods: {
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll1(position) {
        //1.判断BackTop是否显示
        this.isShowBackTop = -position.y > 500;
      },
      addToCart() {
        // 1.创建对象
        const obj = {}
        // 2.对象信息
        obj.iid = this.iid;
        obj.imgURL = this.topImages[0]
        obj.title = this.goods.title
        obj.desc = this.goods.desc;
        obj.newPrice = this.goods.nowPrice;
        // 3.添加到Store中
        this.$store.commit('addCart', obj)
      },
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #ffffff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: white;
  }

  .content {
    height: calc(100% - 44px);
  }
</style>
