const { createApp } = Vue;

var one = createApp({
  data() {
    return {
      title: "Multiple Instance 1",
    };
  },
  methods: {},
  computed: {
    greet: function () {
      return "App 1 Başlığı";
    },
  },
}).mount("#app-one");

var two = createApp({
  data() {
    return {
      title: "Multiple Instance 2",
    };
  },
  methods: {
    changeTitle: function () {
      one.title = " 1. Instance başlığı değiştirildi!";
    },
  },
  computed: {
    greet: function () {
      return "App 2 Başlığı";
    },
  },
}).mount("#app-two");
