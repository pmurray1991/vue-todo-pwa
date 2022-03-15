import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSort,faSortDown,faSortUp } from '@fortawesome/free-solid-svg-icons';
// import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

library.add(faSort);
library.add(faSortDown)
library.add(faSortUp)

createApp(App).component('font-awesome-icon',FontAwesomeIcon).use(store).use(router).mount("#app");
