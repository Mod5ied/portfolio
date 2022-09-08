import { createApp } from "vue";
import { router } from "./routes";
import mitt from "mitt";
import App from "./App.vue";
import "./assets/styles/index.css";

const emitter = mitt();
const app = createApp(App);

app.provide("emitter", emitter);
app.use(router);
app.mount("#app");
