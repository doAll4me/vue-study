<template>
  <div class="person">
    <h1>11</h1>
    <!-- ref给dom打标记可以避免不同vue文件里同名的干扰(如果用id就会互相干扰) -->
    <h2 ref="title2">person里的22</h2>
    <h3>33</h3>
    <button @click="showLog">点击输出h2</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref } from "vue";

let title2 = ref();
let a = ref(0);
let b = ref(1);
let c = ref(2);

function showLog() {
  console.log(title2.value);
}

defineExpose({ a }); //defineExpose直接使用 不用import
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
