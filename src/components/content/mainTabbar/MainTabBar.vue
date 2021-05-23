<template>
    <tab-bar>
        <tab-bar-item path="/home">
            <template v-slot:item-icon><img src="~assets/img/tabbar/House.png" alt=""></template>
            <template v-slot:item-icon-active><img src="~assets/img/tabbar/House-active.png" alt=""></template>
            <template v-slot:item-text><div>首页</div></template>
        </tab-bar-item>
        <tab-bar-item path="/category">
            <template v-slot:item-icon><img src="~assets/img/tabbar/nav-list.png" alt=""></template>
            <template v-slot:item-icon-active><img src="~assets/img/tabbar/nav-list-active.png" alt=""></template>
            <template v-slot:item-text><div>分类</div></template>
        </tab-bar-item>
        <tab-bar-item path="/cart">
            <template v-slot:item-icon><img src="~assets/img/tabbar/cart.png" alt=""></template>
            <template v-slot:item-icon-active><img src="~assets/img/tabbar/cart-active.png" alt=""></template>
            <template v-slot:item-text><div>购物车</div></template>
        </tab-bar-item>
        <tab-bar-item path="/profile">
            <template v-slot:item-icon><img src="~assets/img/tabbar/bussiness-man.png" alt=""></template>
            <template v-slot:item-icon-active><img src="~assets/img/tabbar/bussiness-man-active.png" alt=""></template>
            <template v-slot:item-text><div>我的</div></template>
        </tab-bar-item>
    </tab-bar>
</template>

<script>

    import TabBar from 'components/common/tabbar/TabBar.vue'
    import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>
</style>
