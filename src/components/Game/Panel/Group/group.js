export default {
  data() {
    return {
      list: false,
      group: this.$store.state.group,
      inviteID: -1
    };
  },
  methods: {
    newGroup() {
      this.$socket.emit("newGroup");
    },
    inviteUser() {
      if (this.inviteID !== -1) {
        console.log("asdasd");
        this.$socket.emit("inviteToGroup", {id: this.inviteID, message: "Приглашаю тебя в группу"});
        this.inviteID = -1;
      }
    }
  }
};
