<template>
  <div class="person">
    <h2>当前求和为{{ sum }}</h2>
    <button @click="add">点我+1</button>
    <hr />
    <img v-for="(dog, index) in dogList" :src="dog" alt="" />
    <button @click="getDog">点击添加一个小狗</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import useDogs from "@/hooks/useDogs";
import useSum from "@/hooks/useSum";

const { sum, add } = useSum();
const { dogList, getDog } = useDogs();
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

img {
  width: 200px;
  margin-right: 10px;
}
</style>
