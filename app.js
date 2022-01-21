const app = Vue.createApp({
  data() {
    return {
      goal: "",
      goals: [],
      person: {
        name: "Manuel",
        age: 24,
      },
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
    removeGoal(i) {
      this.goals.splice(i, 1);
    },
  },
});

app.mount("#user-goals");
