export default {
  sockets: {
    initAuth() {
      this.$router.push("/game");
    }
  },
  methods: {
    formSub(event) {
      this.$socket.emit("reg", event.target.login.value);
    }
  }
};
