import { createApp } from "vue";
import App from "./App.vue";

window.loadApp = async (json) => {
  const data = JSON.parse(json);
  const app = createApp(App, data);
  app.mount("#app");
}

