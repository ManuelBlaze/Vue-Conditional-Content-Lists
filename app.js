const app = Vue.createApp({
  data() {
    return {
      goal: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      const parsedGoal = this.goal.trim();

      if (!parsedGoal) {
        alert("You need to write a Goal!");
        return;
      }

      this.goals.push(parsedGoal);
      this.goal = "";
    },
  },
});

app.mount("#user-goals");
