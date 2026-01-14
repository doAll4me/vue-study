<template>
  <div class="app">
    <h2>求和sum为：{{ sum }}</h2>
    <h2>求和sum2为：{{ sum2 }}</h2>
    <h2>汽车为：{{ car }}</h2>

    <button @click="changeSum">点击sum+</button>
    <button @click="changeSum2">点击sum2+</button>
    <button @click="changeBrand">修改品牌</button>
    <button @click="changeColor">修改颜色</button>
    <button @click="changeEngine">修改发动机</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { ref, readonly, shallowReadonly } from "vue";

let sum = ref(0);
let sum2 = readonly(sum); //将sum赋值给sum2，且sum2是不可改的，只读数据
// 但sum2会随sum的改变而改变

let car1 = ref({
  brand: "xx",
  options: {
    color: "red",
    engine: "v8",
  },
});
let car = shallowReadonly(car1);

function changeSum() {
  return (sum.value += 1);
}
function changeSum2() {
  // return (sum2.value += 1);
}

function changeBrand() {
  // car.brand = "yyy";//shallowReadonly只限制浅层数据的修改
}
function changeColor() {
  car1.value.options.color = "blue";
}
function changeEngine() {
  car1.value.options.engine = "v10";
}
</script>

<style>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
button {
  margin: 0 5px;
}
</style>
