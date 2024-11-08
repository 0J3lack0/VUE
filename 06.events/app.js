const { createApp } = Vue;

createApp({
  data() {
    return {
      age: 25,
      budget: 26000,
      ageNew: 19,
      x: 0,
      y: 0,
    };
  },
  methods: {
    budgetIncrease: function () {
      this.budget = this.budget + this.budget * (25 / 100);
    },
    budgetDecrease: function () {
      this.budget = this.budget - this.budget * (3 / 10);
    },
    plusAge10: function (x) {
      this.ageNew += x;
    },
    minusAge10: function (x) {
      this.ageNew -= x;
    },
    updateXY(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
}).mount("#app");
