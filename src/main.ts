import { createApp } from "vue";
import App from "./App.vue";
import Hello from "./Hello.vue";

// 创建应用
const app = createApp(App);

// 定义全局组件
app.component("Hello", Hello);
//全局属性
app.config.globalProperties.x = 99;
//写了下面的，在其他组件里使用x才不会报错（虽然代码报错但页面可以正常显示
declare module "vue" {
  interface ComponentCustomProperties {
    x: number;
  }
}

//注册全局指令
app.directive("beauty", (element, { value }) => {
  element.innerText += value;
  element.style.color = "green";
  element.style.backgroundColor = "yellow";
});
// 挂载应用
app.mount("#app");
