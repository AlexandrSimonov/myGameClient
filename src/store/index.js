import Vue from "vue";
import Vuex from "vuex";
import VueSocketio from "vue-socket.io";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {login: "", id: -1},
    group: {
      leader: {
        login: "",
        id: -1
      },
      users: [],
      invites: [],
      id: -1
    },
    map: {
      knownRooms: [],
      myRoom: -1,
      room: -1
    },
    invites: {
      messages: []
    }
  },
  mutations: {
    SOCKET_CONNECT: (state, status) => {
      console.log("Server connect");
    },
    SOCKET_INITAUTH: (state, data) => {
      state.user = {login: data.login, id: data.id};
      state.map.knownRooms = data.knownRooms;
      state.map.myRoom = data.myRoom;
      state.map.room = data.room;
    },
    userInstall: (state, user) => {
      // state.user = user;
    },
    SOCKET_GROUPCREATED: (state, data) => {
      state.group.id = data.id;
      state.group.leader = data.leader;
      state.group.users = data.users;
      state.group.invites = data.invites;
      console.log(data);
      // state.group.leader = data.leader;
      // state.group.users = data.users;
    },
    SOCKET_CHANGEROOM: (state, data) => {
      state.map.room = data;
    },
    SOCKET_KNOWNROOMS: (state, data) => {
      state.map.knownRooms = data;
    },
    SOCKET_INVITES: (state, data) => {
      state.invites.messages = data;
    },
    SOCKET_GROUPCHANGEUSERS: (state, data) => {
      state.group.invites = data.invites;
      state.group.users = data.users;
    }
  },
  strict: true
});

Vue.use(VueSocketio, "http://localhost:3040", store);

export default store;
