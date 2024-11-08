<template>
  <app-header></app-header>
  <app-article></app-article>
  <app-footer></app-footer>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Article from "./components/article.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-article": Article,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
