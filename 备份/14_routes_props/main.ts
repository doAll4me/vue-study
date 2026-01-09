// 引入createApp用于创建应用
import { createApp } from "vue";
// 引入App根组件
import App from "./App.vue";
//引入路由器
import router from "./router";

const app = createApp(App); //创建一个应用

app.use(router); //使用路由器

app.mount("#app");//挂载整个应用到app容器中
