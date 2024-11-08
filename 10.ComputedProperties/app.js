const { createApp } = Vue;

createApp({
  data() {
    return {
      // properties yani bu kısımda tanımladığımız değişkenler ne zaman güncellenirse Vue.js tüm değikenleri kontrol ediyor! Diğer değişkenlerde de bir değişiklik olup olmadığını... Bu nedenle elimizde birden fazla method varsa sadece tek bir değişken değiştiğinde tüm methodlar tetiklenecektir. Bu durumu istemediğimiz işlemleri computed instance'ında gerçekleştirebiliriz.
      age: 20,
      a: "",
      b: "",
    };
  },
  methods: {
    aYaEkle: function () {
      // console.log("a kontrol edili.");
      return this.a + this.age;
    },
    bYeEkle: function () {
      // console.log("b kontrol edildi.");
      return this.b + this.age;
    },
  },
  computed: {
    aYaEkleComp: function () {
      console.log("a kontrol edili.");
      return this.a + this.age;
    },
    bYeEkleComp: function () {
      console.log("b kontrol edildi.");
      return this.b + this.age;
    },
  },
}).mount("#app");
