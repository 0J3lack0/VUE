const { createApp } = Vue;

//global tanımlama:
var one = createApp({
  data() {
    return {};
  },
});
// one instance'ını tanımladık.

one.component("element", {
  template:
    '<p>"Ben element (component one) Tagnin içerisiyim! İSİM: {{name}}"</p> <button v-on:click="changeName">İsim Değiştir</button>',
  data() {
    return {
      name: "Çağlar",
    };
  },
  methods: {
    changeName: function () {
      this.name = "Mithrandir";
    },
  },
});

one.mount("#app-one");

var two = createApp({
  data() {
    return {};
  },
  methods: {},
  computed: {},
});

two.component("element", {
  template:
    '<p>"Ben element (component two) Tagnin içerisiyim! İSİM: {{name}}"</p> <button v-on:click="changeName">İsim Değiştir</button>',
  data() {
    return {
      name: "Çağlar",
    };
  },
  methods: {
    changeName: function () {
      this.name = "Mithrandir";
    },
  },
});

two.mount("#app-two");

//local tanımlama
const elementLocal = {
  template:
    '<h3>Local component tanımlama</h3><p>"Ben element (component three) Tagnin içerisiyim! İSİM: {{name}}"</p> <button v-on:click="changeName">İsim Değiştir</button>',
  data() {
    return {
      name: "Çağlar",
    };
  },
  methods: {
    changeName: function () {
      this.name = "Mithrandir";
    },
  },
};

var three = createApp({
  components: {
    elementlocal: elementLocal,
  },
  data() {
    return {};
  },
}).mount("#app-three");
