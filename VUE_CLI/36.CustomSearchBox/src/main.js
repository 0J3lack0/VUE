import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
// import Header from "./header.vue";

// const app = createApp(App);
// app.component("app-header", Header);
// app.mount("#app");

const app = createApp(App);

app.config.globalProperties.$filters = {
  upperCaseFilter(title) {
    return title.toUpperCase();
  },
};

app.mount("#app");
