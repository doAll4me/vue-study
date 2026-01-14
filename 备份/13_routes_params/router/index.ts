// 路由器
import { createRouter, createWebHistory } from "vue-router"; //1.创建路由器
//2.引入组件
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import About from "@/views/About.vue";
import Detail from "@/views/Detail.vue";

const router = createRouter({
  history: createWebHistory(), //3.路由器工作模式（vue3必不可少
  routes: [
    //4.管理一个个路由规则
    {
      name: "zhuye",
      path: "/home",
      component: Home,
    },
    {
      name: "xinwen",
      path: "/news",
      component: News,
      children: [
        {
          name: "xiangqing", //params一定要name
          path: "detail/:id/:title/:content", //params参数需要提前在路由设置中占位
          component: Detail,
        },
      ],
    },
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
  ],
});

export default router;
