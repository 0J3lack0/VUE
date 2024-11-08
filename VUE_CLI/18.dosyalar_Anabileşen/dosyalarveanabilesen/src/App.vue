<template>
  {{ title }}
  <button v-on:click="changeTitle">Başlığı Değiştir</button>
</template>

<script>
export default {
  data() {
    return {
      title: "ilk vue.js CLI çalışmam",
    };
  },
  methods: {
    changeTitle: function () {
      this.title = "başlığı değiştirdim";
    },
  },
};
</script>
