<template>
  <div class="app">
    <h2>求和为：{{ sum }}</h2>
    <h2>名字：{{ person.name }}</h2>
    <h2>年龄为：{{ person.age }}</h2>
    <h2>汽车为：{{ car }}</h2>
    <button @click="changeSum">点击sum+</button>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <button @click="changeBrand">修改品牌</button>
    <button @click="changeColor">修改颜色</button>
    <button @click="changeEngine">修改发动机</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { ref, shallowRef, reactive, shallowReactive } from "vue";
// shallowRef只能修改第一层数据 sum,person(表层)
// 对象的顶层属性是响应式的，但嵌套对象的属性不是。
// 通过使用 shallowRef() 和 shallowReactive() 来绕开深度响应。
// 浅层式 API 创建的状态只在其顶层是响应式的，对所有深层的对象不会做任何处理，
// 避免了对每一个内部属性做响应式所带来的性能成本，
// 这使得属性的访问变得更快，可提升性能。
let sum = shallowRef(0);
let person = shallowRef({
  name: "zs",
  age: 18,
});
// let car = reactive({
//   brand: "xx",
//   options: {
//     color: "red",
//     engine: "v8",
//   },
// });

// 浅层
let car = shallowReactive({
  brand: "xx",
  options: {
    color: "red",
    engine: "v8",
  },
});
function changeSum() {
  return (sum.value += 1);
}
function changeName() {
  person.value.name = "ls";
}
function changeAge() {
  person.value.age += 1;
}
function changePerson() {
  person.value = {
    name: "tony",
    age: 20,
  };
}

// *********

function changeBrand() {
  car.brand = "yyy";
}
function changeColor() {
  car.options.color = "blue";
}
function changeEngine() {
  car.options.engine = "v10";
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
