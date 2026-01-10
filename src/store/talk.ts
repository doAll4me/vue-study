// 跟count有关的状态
import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import axios from "axios";

// 以下是选项式写法
// export const useTalkStore = defineStore("talk", {
//   actions: {
//     async getTalk() {
//       try {
//         let response = await axios.get("https://v1.hitokoto.cn/");
//         let title = response.data.hitokoto;
//         let obj = { id: nanoid(), title };
//         this.talkList.unshift(obj);
//       } catch (error) {
//         console.error("获取每日一言失败:", error);
//       }
//     },
//   },
//   // state要写成函数（react中是对象
//   state() {
//     return {
//       talkList: JSON.parse(localStorage.getItem("talkList") as string) || [],
//     };
//   },
// });

// 以下是组件式写法
import { reactive } from "vue";
export const useTalkStore = defineStore("talk", () => {
  const talkList = reactive(
    JSON.parse(localStorage.getItem("talkList") as string) || []
  );

  async function getTalk() {
    try {
      let response = await axios.get("https://v1.hitokoto.cn/");
      let title = response.data.hitokoto;
      let obj = { id: nanoid(), title };
      talkList.unshift(obj);
    } catch (error) {
      console.error("获取每日一言失败:", error);
    }
  }

  return { talkList, getTalk };
});
