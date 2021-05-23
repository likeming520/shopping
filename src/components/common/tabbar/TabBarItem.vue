<template>
    <div class="tab-bar-item" @click="itemClick">
<!--        所有的item都展示同一个图片 同一个文字-->
<!--        <img src="../../assets/img/tabbar/House.png" alt="">-->
<!--        <div>首页</div>-->
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TarBarItem",
        props: {
            path: String,
            activeColor: {
                type: String,
                default: '#d81e06'
            }
        },
        data() {
           return {
               // isActive: true

           }
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle() {
              return this.isActive ? {color: this.activeColor} : {}
            }
        },
        methods: {
            itemClick() {
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }

</style>
