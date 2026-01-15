<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg" />
  </div>
</template>

<script setup lang="ts" name="App">
import { ref } from "vue";
import useMsgRef from "./useMsgRef";

// let msg = ref("你好");//自带ref会立马修改

let { msg } = useMsgRef("哈哈", 2000);
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
