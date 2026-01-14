<template>
  <div class="person">
    <h1>情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, watch } from "vue";

// 数据
let person = reactive({
  name: "张三",
  age: 18,
  car: {
    c1: "奔驰",
    c2: "宝马",
  },
});
// 方法
function changeName() {
  person.name += "~";
}
function changeAge() {
  person.age += 1;
}
function changeC1() {
  person.car.c1 = "奥迪";
}
function changeC2() {
  person.car.c2 = "大众";
}
function changeCar() {
  person.car = { c1: "雅迪", c2: "爱玛" };
}

// 监视，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
watch(
  () => person.name,
  (newValue, oldValue) => {
    console.log("person.name变化了", newValue, oldValue);
  }
);

// 监视，情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数
// watch 监听什么，取决于你第一个参数“给的是值，还是给的是 getter 函数”

// 如果是getter函数，但没开启深度监视，就只能监视对象全体修改，不能监视里面的属性修改
// 给 getter 函数 → 监听 getter 的“返回值变化”
// watch(
//   () => person.car,
//   (newValue, oldValue) => {
//     console.log("person.car变化了", newValue, oldValue);
//   }
// );

// 给对象本身 → 监听对象内部属性变化
// watch(
//   person.car,
//   (newValue, oldValue) => {
//     console.log("person.car变化了", newValue, oldValue);
//   },
//   { deep: true }
// );

// 只有当getter函数+手动开启深度监视，才可以对象整体和对象内属性都监视上
watch(
  () => person.car,
  (newValue, oldValue) => {
    console.log("person.car变化了", newValue, oldValue);
  },
  { deep: true }
);
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
