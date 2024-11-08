const { createApp } = Vue;

createApp({
  data() {
    return {};
  },
  methods: {
    catchName: function () {
      console.log("İsim alanına birşey yazıldı.");
    },
    catchAge: function () {
      console.log("Yaş alanına birşey yazıldı.");
    },
  },
}).mount("#app");
