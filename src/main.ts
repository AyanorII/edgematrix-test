import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCakeCandles,
  faEarthAmericas,
  faEnvelope,
  faLocationDot,
  faMars,
  faPhone,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router";

const app = createApp(App);
library.add(
  faMars,
  faVenus,
  faEnvelope,
  faCakeCandles,
  faPhone,
  faLocationDot,
  faEarthAmericas
);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
