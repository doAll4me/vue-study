<template>
  <div class="app">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <hr />
    <h2>车：{{ car2 }}</h2>

    <button @click="changePrice">修改价格</button>
  </div>
</template>

<script setup lang="ts" name="App">
import { reactive, toRaw, markRaw } from "vue";

let person = reactive({
  name: "tony",
  age: 18,
});

// 将响应式数据转化为原始数据(不响应了)
let rawPerson = toRaw(person);

console.log(person);
console.log(rawPerson);

// markRaw;标记一个对象，使其永远不会变成响应式的。
// 例如使用mockjs时，为了防止误把mockjs变为响应式对象，可以使用 markRaw 去标记mockjs
let car = markRaw({ brand: "xx", price: 100 });
let car2 = reactive(car); //被MarkRaw标记后的数据永远不可以被转化为响应式
console.log(car, car2);

function changeName() {
  person.name = "xx";
}
function changeAge() {
  person.age += 1;
}
function changePrice() {
  car2.price += 100;
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
