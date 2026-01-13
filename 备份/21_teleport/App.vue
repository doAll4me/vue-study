<template>
  <div class="outer">
    <h2>我是多媒体组件</h2>
    <img src="https://www.atguigu.com/images/index_new/logo.png" alt="" />

    <br />
    <Modal />
  </div>
</template>

<script setup lang="ts" name="App">
import Modal from "./Modal.vue";
</script>

<style>
.outer {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
  width: 400px;
  height: 400px;
  /* filter会让子组件的fixed无效 */
  filter: saturate(200%);
}
img {
  width: 180px;
}
</style>
