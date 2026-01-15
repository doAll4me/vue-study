<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}，放大10倍后为：{{ bigSum }}</h2>
    <h2>学校：{{ school }}，欢迎来到：{{ address }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref, toRefs } from "vue";
import { useCountStore } from "@/store/count";
import { storeToRefs } from "pinia";

const countStore = useCountStore();
// console.log(countStore.sum);不用加value，自动解包了
const { sum, school, address, bigSum } = storeToRefs(countStore); //storeToRefs只会讲store里的数据转为响应式数据（其他没用的不会处理

// 数据
let n = ref(1); // 用户选择的数字

// 方法
function add() {
  // // 第一种修改store方法
  // countStore.sum += n.value;

  // // 第二种修改store方法(适合用于数据多的情况)
  // countStore.$patch({
  //   sum: 888,
  // });

  // 第三种修改方法
  countStore.increment(n.value);
}
function minus() {
  countStore.sum -= n.value;
}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>
