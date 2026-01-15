<template>
  <!-- html结构 -->
  <!--  : 是“JS 表达式绑定”  
   ref 不是普通 HTML 属性，而是 Vue 的“指令级语法”，所以不用加：-->
  <!-- 普通属性要 : 才能执行 JS，ref 本身就不是字符串属性 -->
  <h2 a="1+1" :b="1 + 1" ref="qwd"></h2>
  <Person a="aa" :list="personList" />
</template>

<script lang="ts" setup name="App">
// JS或TS
// vue3推荐用ts
import Person from "./components/Person.vue";
import { reactive } from "vue";
import { type Persons } from "@/types";

let personList = reactive<Persons>([
  { id: "qwefv", name: "ee", age: 18 },
  { id: "wegv", name: "dd", age: 28 },
  { id: "qqegefv", name: "cc", age: 13 },
  //   { id: "qqegfv", name: "aa", age: 12, x: 13 },
  { id: "qqegfv", name: "aa", age: 12 },
]);
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
