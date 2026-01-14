<template>
  <!-- html结构 -->
  <h2 ref="title2">app里的22</h2>
  <button @click="showLog">点击输出h2</button>
  <button @click="showRen">点击输出Person内的属性</button>
  <!-- ref加在组件标签里得不到组件内的属性 -->
  <!-- 除非组件的属性用defineExpose导出了 -->
  <Person ref="ren" />
</template>

<script lang="ts" setup name="App">
// JS或TS
// vue3推荐用ts
import Person from "./components/Person.vue";
import { ref } from "vue";
const title2 = ref();
const ren = ref();

function showLog() {
  console.log(title2.value);
}

function showRen() {
  console.log(ren.value);
}
</script>

<style>
/* 样式 */
.app {
  background-color: gray;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
