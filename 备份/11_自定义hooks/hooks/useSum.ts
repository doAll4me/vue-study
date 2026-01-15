import { onMounted, ref } from "vue";

export default function () {
  let sum = ref(0); //数据

  //  方法
  function add() {
    sum.value += 1;
  }

  //   钩子
  onMounted(() => {
    add();
  });

  // 一定要向外部提供东西
  return { sum, add };
}
