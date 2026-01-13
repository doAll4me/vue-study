<template>
  <button @click="isShow = true">展示弹窗</button>
  <!-- teleport传送 -->
  <teleport to="body">
    <div class="modal" v-show="isShow">
      <h2>我是弹窗的标题</h2>
      <p>我是弹窗的内容</p>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </teleport>
</template>

<script setup lang="ts" name="Modal">
import { ref } from "vue";
let isShow = ref(false);
</script>

<style scoped>
.modal {
  width: 200px;
  height: 150px;
  background-color: skyblue;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 5px;
  text-align: center;
  /* 参考窗口视口定位 */
  position: fixed;
  /* 左边移动50% */
  left: 50%;
  top: 20px;
  margin-left: -100px;
}
</style>
