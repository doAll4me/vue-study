<template>
  <div class="father">
    <h3>父组件</h3>
    <button @click="test(6, 7, $event)">点我</button>
    <h4 v-show="toy">子组件的玩具：{{ toy }}</h4>
    <Child @send-toy="getToy" />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from "./Child.vue";
import { ref } from "vue";

let toy = ref("");

//方法
function test(a: number, b: number, e: Event) {
  console.log("test", a, b, e);
}
function getToy(value: string) {
  toy.value = value;
}
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
.father button {
  margin-right: 5px;
}
</style>
