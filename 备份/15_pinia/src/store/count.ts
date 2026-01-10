// 跟count有关的状态
import { defineStore } from "pinia";

// 以下是选项式写法

export const useCountStore = defineStore("count", {
  // 方法，用于响应组件的动作
  actions: {
    increment(value: number) {
      // console.log("increment调用");
      this.sum += value;
    },
  },
  // 存储数据的地方
  // state要写成函数（react中是对象
  state() {
    return {
      sum: 0,
      school: "owihf",
      address: "广东",
    };
  },
  // 对数据做处理
  getters: {
    bigSum: (state) => state.sum * 10,

    upperSchool(): string {
      return this.school.toUpperCase();
    },
  },
});
