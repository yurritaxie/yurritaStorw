import { createStore } from "vuex";
import { NavListPost } from "../http/api/login";
//引入路由可以进行动态添加路由
import router from "@/router";
//createStore用来创建仓库的
export default createStore({
  state: {
    navList: [],
    showList: true,
    //控制会员头部查询的收起和展开
    showAllTop: false,
    //判断页面是否刷新
    isRefresh: false,
    //动态路由数据
    activeRouterInfo:
      JSON.parse(sessionStorage.getItem("activeRouterInfo")) || [],
  },
  getters: {},
  mutations: {
    changeNavList(context, value) {
      context.navList = value;
    },
    showList(context, value) {
      context.showList = value;
    },
    showAllTop(context, value) {
      context.showAllTop = value;
      // console.log('我是vuex里的showAllTop',context.showAllTop)
    },
    //动态路由数据存储
    aycChangeNavList(context, value) {
      context.activeRouterInfo = value;
      sessionStorage.setItem(
        "activeRouterInfo",
        JSON.stringify(context.activeRouterInfo)
      );
      // console.log(context.activeRouterInfo);
    },
  },
  actions: {
    ayngetNavList({ commit, dispatch }, userInfo) {
      NavListPost("/navlist", userInfo).then((res) => {
        //打印数据是否获取成功
        console.log("res", res);
        //将数据存在本地
        sessionStorage.setItem("navList", JSON.stringify(res.data.navList));
        commit("changeNavList", res.data.navList);
        //路由动态数据
        commit("aycChangeNavList", res.data.list);
        dispatch("aynAddRoute");
      });
    },
    aynAddRoute({ state, commit }) {
      state.isRefresh = true;
      return new Promise((resolve) => {
        //使用wabpack中的require方法获取所有的路由信息，可以传递三个参数，第一个是路由信息的地址，递归的布尔值，利用正则进行筛选
        let allWabpackInfo = require.context(
          "@/router/routeModule",
          true,
          /\.js/
        );
        // console.log(allWabpackInfo.keys())
        //对用wabpack获取的路由信息进行处理
        let finalRoute = [];
        allWabpackInfo.keys().forEach((item) => {
          let route = require("@/router/routeModule" + item.split(".")[1]);
          finalRoute.push(...route.default);
        });
        //将从后端获取的路由信息和当前的路由信息进行比对
        let getRouteList = finalRoute.filter((item) => {
          return state.activeRouterInfo.includes(item.path);
        });
        // console.log(getRouteList)
        getRouteList.forEach((item) => {
          router.addRoute("layout", item);
        });
        resolve();
      });
    },
  },
  modules: {},
});
