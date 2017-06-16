export default {
  data() {
    return {
      vmap: false,
      map: this.$store.state.map
    };
  },
  methods: {
    goToRandomRoom() {
      this.$socket.emit("goToRandomRoom");
    },
    goToRoom(id) {
      this.$socket.emit("goToRoom", id);
    }
  }
};
