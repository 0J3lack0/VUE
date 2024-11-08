const { createApp } = Vue;
createApp({
  // data(), methods(), computed() gibi bileşenlerin bulunduğu alana vue Instance denir!
  data() {
    return {
      name: "Çağlar",
      job: "Scientist",
      website: "https://ciftliksistem.com",
      website2: "https://cassplag.comu.edu.tr/",
      websiteTag: '<a href="https://galatasaray.org">HTML TAG Bind edildi.</a>',
    };
  },
  methods: {},
}).mount("#app");
