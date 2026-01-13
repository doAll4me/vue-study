// 封装自定义ref的hooks函数
import { customRef } from "vue";

// 使用vue提供的自定义ref定义响应式数据
export default function useMsgRef(initValue: string, delay: number) {
  let timer: number;
  // 一般会把自定义ref封装成一个hooks
  // track--跟踪 trigger--触发
  let msg = customRef((track, trigger) => {
    return {
      // msg被读取时，get被调用
      get() {
        track(); //告诉vue数据msg很重要，要对msg进行持续关注，一旦msg变化就去更新（响应式
        return initValue;
      },
      // msg被修改时，set被调用
      set(value) {
        // console.log("set调用");
        clearTimeout(timer);
        timer = setTimeout(() => {
          initValue = value;
          trigger(); //通知vue数据msg修改了
        }, delay);
      },
    };
  });
  return { msg };
}
