const { createApp } = Vue;
createApp({
  // data(), methods(), computed() gibi bileşenlerin bulunduğu alana vue Instance denir!
  data() {
    return {
      name: "Çağlar",
      job: "Scientist",
      age: "33",
      clothes: {
        hat: true,
        pants: "jeans",
        tshirt: false,
      },
      skills: ["Driver", "Developer", "Swimmer", "Gamer"],
    };
  },
}).mount("#ilk-uygulama");
