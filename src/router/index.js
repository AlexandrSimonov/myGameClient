import Vue from "vue";
import Router from "vue-router";
import Reg from "../components/Reg/reg.vue";
import Game from "../components/Game/game.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Reg",
      component: Reg
    },
    {
      path: "/game",
      name: "Game",
      component: Game
    }
  ]
});
