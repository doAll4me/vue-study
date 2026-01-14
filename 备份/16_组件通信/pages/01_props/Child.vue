<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>父组件给的车：{{ car }}</h4>
    <button @click="sendToy(toy)">把玩具传给父组件</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from "vue";
//数据
let toy = ref("娃娃");

// 声明props 接收父组件传递来的数据
defineProps(["car", "sendToy"]);
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
