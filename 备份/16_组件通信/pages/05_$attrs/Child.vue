<template>
  <div class="child">
    <h3>子组件</h3>
    <!-- <h4>a:{{ a }}</h4> -->
    <!-- attrs会存储没有声明props的参数 -->
    <h4>其他（attrs里的）：{{ $attrs }}</h4>
    <!-- 给孙组件传递props（父组件给子组件的，但子组件并没有接受，直接通过attrs传递给孙组件 -->
    <GrandChild v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts" name="Child">
import GrandChild from "./GrandChild.vue";
// defineProps(["a"]);//一个都不接受
</script>

<style scoped>
.child {
  margin-top: 20px;
  background-color: skyblue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
</style>
