const { createApp } = Vue;
createApp({
  // data(), methods(), computed() gibi bileşenlerin bulunduğu alana vue Instance denir!
  data() {
    return {
      ilkDegisken: "Welcome Vue.js",
      ikinciDegisken: "Tekrar Merhaba",
    };
  },
}).mount("#ilk-uygulama");
