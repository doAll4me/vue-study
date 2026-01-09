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

          //第一种写法:将路由收到的所有params参数作为props传给路由组件
          props: true, //路由的props配置

          // 第二种写法--函数写法:可以自己决定将什么作为props参数
          // props(route) {
          //   return route.query;
          // },

          // 第三种写法--对象写法:可以自己决定将什么作为props参数，但是是写死的
          // props: {
          //   a: 100,
          //   b: 200,
          //   c: 300,
          // },
        },
      ],
    },
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});

export default router;
