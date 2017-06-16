import group from "./Group/group.vue";
import mapa from "./Mapa/mapa.vue";

export default {
  data() {
    return {
      login: this.$store.state.user.login,
      invites: this.$store.state.invites
    };
  },
  components: {
    mapa,
    group
  },
  methods: {
    yes(id) {
      this.$socket.emit("yesInvite", id);
    },
    no(id) {
      this.$socket.emit("noInvite", id);
    }
  }
};
