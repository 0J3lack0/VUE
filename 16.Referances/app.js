const { createApp } = Vue;

//global tanımlama:
var one = createApp({
  data() {
    return {
      output: "",
    };
  },
  methods: {
    readRefs: function () {
      console.log(this.$refs);
      console.log("icerik2 innerHTML: ", this.$refs.icerik2.innerHTML);
      console.log("icerik (input box) value: ", this.$refs.icerik.value);
      this.output = this.$refs.icerik2.innerHTML;
    },
  },
}).mount("#app");
