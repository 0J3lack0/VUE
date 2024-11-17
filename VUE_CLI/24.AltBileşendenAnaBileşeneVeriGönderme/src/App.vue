<template>
  <app-header v-bind:title="title"></app-header>
  <app-article v-bind:users="users"></app-article>
  <app-footer v-bind:title="title"></app-footer>
</template>

<script>
import Header from "./components/header.vue";
import Article from "./components/article.vue";
import Footer from "./components/footer.vue";

export default {
  components: {
    "app-header": Header,
    "app-article": Article,
    "app-footer": Footer,
  },
  data() {
    return {
      title: "ICARDI",
      users: [
        { name: "Çağlar", spec: "Devops", show: false },
        { name: "Onur", spec: "Devops", show: false },
        { name: "Acun", spec: "ağlak", show: false },
        { name: "Moyinyo", spec: "mal", show: false },
        { name: "ICARDI", spec: "Striker", show: false },
        { name: "OSİMHEN", spec: "Sneake", show: false },
      ],
    };
  },
};
</script>

<style></style>
