<template>
  <ul class="news-list">
    <!-- query是响应式数据 所以页面会随着他的更新而更新 -->
    <!-- <li>编号：{{ route.query.id }}</li>
    <li>标题：{{ route.query.title }}</li>
    <li>内容：{{ route.query.content }}</li> -->
    <li>编号：{{ query.id }}</li>
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
import { toRefs } from "vue";
import { useRoute } from "vue-router";
let route = useRoute();
// console.log(route.query);
let { query } = toRefs(route); //对一个响应式对象的属性进行解构赋值时，要使用 toRefs 或 toRef 来保持响应性。
</script>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list > li {
  line-height: 30px;
}
</style>
