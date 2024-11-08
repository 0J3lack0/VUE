const { createApp } = Vue;

createApp({
  data() {
    return {
      karakterler: ["Çağlar", "Onur", "Raheem"],
      ozellikler: [
        { name: "Çağlar", age: 33 },
        { name: "Onur", age: 33 },
        { name: "Raheem", age: 28 },
      ],
    };
  },
  methods: {},
  computed: {},
}).mount("#app");
