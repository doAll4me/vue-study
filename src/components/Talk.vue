<template>
  <div class="talk">
    <button @click="talkStore.getTalk">获取每日一言</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">
        {{ talk.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Talk">
import { useTalkStore } from "@/store/talk";
import { storeToRefs } from "pinia";
// 数据
const talkStore = useTalkStore();
const { talkList } = storeToRefs(talkStore);
// console.log(talkStore.talkList);

// 监视数据是否发生变化
talkStore.$subscribe((mutate, state) => {
  console.log("数据发生变化");
  localStorage.setItem("talkList", JSON.stringify(state.talkList));
});
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
