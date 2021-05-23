<template>
  <div class="nav-bar">
    <nav-bar class="nav-bar">
      <template v-slot:center><div>购物车({{length}})</div></template>
    </nav-bar>
<!--    <cart-list class="cart-list" :cart-list="cartList"></cart-list>-->
<!--    <bottom-bar></bottom-bar>-->
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  // import CartList from "./childComps/CartList";
  // import BottomBar from "./childComps/BottomBar";
  // import CartListItem from "./childComps/CartListItem";
  // import CheckButton from "./childComps/CheckButton";
  import {mapGetters} from 'vuex';

  export default {
    name: "Cart",
    components: {
      NavBar,
      // CartList,
      // BottomBar,
      // CartListItem,
      // CheckButton
    },
    computed: {
      ...mapGetters(['cartLength', 'cartList']),
    },
    data() {
      return {
        length: 0,
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: white;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  }
</style>
