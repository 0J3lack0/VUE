const { createApp } = Vue;
createApp({
  // data(), methods(), computed() gibi bileşenlerin bulunduğu alana vue Instance denir!
  data() {
    return {
      surname: "Çoban",
      a: 3,
      b: 5,
    };
  },
  methods: {
    calc: function (name, dayTime) {
      return "Have a Nice " + dayTime + " " + name + " " + this.surname;
    },
    sum: function () {
      return this.a + this.b + 1;
    },
  },
}).mount("#ilk-uygulama");
