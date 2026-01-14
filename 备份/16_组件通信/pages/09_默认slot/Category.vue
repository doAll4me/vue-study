<template>
  <div class="game">
    <h2>{{ title }}</h2>
    <!-- 默认插槽 -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="Game">
import { reactive } from "vue";
defineProps(["title"]);
</script>

<style scoped>
.game {
  width: 200px;
  height: 300px;
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>
