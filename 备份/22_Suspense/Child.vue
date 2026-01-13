<template>
  <div class="child">
    <h2>child组件</h2>
    <h3>当前求和为：{{ sum }}</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
let sum = ref(0);
// Vue 编译器允许在 <script setup> 中直接使用 await
// Vue 编译器在编译阶段 会帮忙偷偷包一层 async setup()
let talk = await axios.get("https://v1.hitokoto.cn/");
console.log(talk.data.hitokoto);
</script>

<style scoped>
.child {
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>
