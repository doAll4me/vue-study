<template>
  <div class="person"></div>
</template>

<script lang="ts" setup name="Person">
import { type PersonInter } from "../types"; //引入类型约束时要加type

let Person: PersonInter = { id: "qwefv", name: "ee", age: 18 }; //用PersonInter约束Person的数据结构

// 泛型let PersonList:Array<T>，这个T就是一个类型占位符，用的时候可以替换为约束这个数据的inter
// 还可以写成 let PersonList: PersonInter[]
let PersonList: Array<PersonInter> = [
  { id: "qwefv", name: "ee", age: 18 },
  { id: "wegv", name: "dd", age: 28 },
  { id: "qqegefv", name: "cc", age: 13 },
  { id: "qqegfv", name: "aa", age: 12 },
];
</script>

<style scoped>
.person {
  background-color: pink;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}

li {
  font-size: 20px;
}
</style>
