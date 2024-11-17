<template>
  <!-- <add-blog> </add-blog> -->
  <show-blogs></show-blogs>
</template>

<script>
import addBlog from "./components/add-blog.vue";
import showBlogs from "./components/show-blogs.vue";
export default {
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
