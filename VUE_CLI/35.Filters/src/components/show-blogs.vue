<script setup>
const vRainbow = {
  mounted: (el) =>
    (el.style.color = "#" + Math.random().toString().slice(2, 8)),
};
</script>
<template>
  <div id="show-blogs">
    <h1>Tüm Blog Gönderileri</h1>
    <div v-for="blog in blogs" class="single-blog">
      <!-- <li>User: {{ blog.id }}</li> -->
      <h2 v-rainbow>{{ $filters.upperCaseFilter(blog.title) }}</h2>
      <p>{{ blog.body }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blogs: [],
    };
  },
  created() {
    var self = this;
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        headers: {
          "Content-Type": "content/type",
        },
      })
      .then((response) => {
        console.log(response.data);
        this.blogs = response.data.slice(0, 10);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    upperCase: function (title) {
      return title.toUpperCase();
    },
  },
  computed: {
    upperCaseComputed() {
      return (title) => title.toUpperCase();
    },
  },
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #e2e2e2;
  border-radius: 10px;
}
</style>
