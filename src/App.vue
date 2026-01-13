<template>
  <div class="app">
    <h2>App组件{{ x }}</h2>
    \
    <!-- 全局组件 -->
    <Hello />
    <Child />
  </div>
</template>

<script setup lang="ts" name="App">
import Child from "./Child.vue";
</script>

<style>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
  width: 400px;
  height: 400px;
}
img {
  width: 180px;
}
</style>
