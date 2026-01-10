import { createApp } from "vue";
import App from "./App.vue";
//1引入pinia
import { createPinia } from "pinia";

const app = createApp(App); //创建一个应用
// 2创建pinia
const pinia = createPinia();
// 3安装pinia
app.use(pinia);
app.mount("#app"); //挂载整个应用到app容器中
