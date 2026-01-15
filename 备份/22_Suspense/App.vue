<template>
  <div class="app">
    <h2>App组件</h2>
    <!-- 调用的组件是异步组件时，要用suspense包裹一下 -->
    <Suspense>
      <!-- 异步任务执行完了，组件好了的时候会显示这个 -->
      <template v-slot:default>
        <Child />
      </template>
      <!-- 异步任务还没执行完时会显示这个 -->
      <template v-slot:fallback> 加载中 </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts" name="App">
import Child from "./Child.vue";
import { Suspense } from "vue";
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
