<template>
  <div class="person">
    <!-- <h1>{{ (a, list[0]) }}</h1> -->
    <ul>
      <li v-for="person in list" :key="person.id">
        {{ person.name }}--{{ person.age }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
import { type Persons } from "@/types";
// import { defineProps } from "vue";在setup中不用手动导入，可以直接使用
// defineProps(["a", "list"]);//接收list

// 接收list+限制结构
// defineProps<{ list: Persons }>();

// 接收list+限制结构+设置默认值（如果没接收到）
withDefaults(defineProps<{ list: Persons }>(), {
  list: () => [{ id: "qwefv", name: "ee", age: 18 }]//默认值必须是一个函数返回值的数组
});
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
