<template>
  <div class="child">
    <h2>child组件{{ x }}</h2>
    <h3>当前求和为：{{ sum }}</h3>
    <h4 v-beauty="sum">用全局指令换样式了</h4>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let sum = ref(0);
</script>

<style scoped>
.child {
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>
