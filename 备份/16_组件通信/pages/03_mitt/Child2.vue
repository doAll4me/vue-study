<template>
  <div class="child2">
    <h3>子组件2</h3>
    <h4>电脑：{{ computer }}</h4>
    <h4 v-show="toy">组件1 给的玩具：{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import { ref, onMounted } from "vue";
import emitter from "@/utils/emitter";
// 数据
let computer = ref("联想");
let toy = ref("");
// 只要有emitter就可以在任意组件中传递数据集
emitter.on("send-toy", (value: any) => {
  // console.log("send-toy", value);
  toy.value = value;
});

// 在组件卸载时解绑事件
onMounted(() => {
  emitter.off("send-toy");
});
</script>

<style scoped>
.child2 {
  margin-top: 50px;
  background-color: orange;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
