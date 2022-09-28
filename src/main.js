import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

//import WBC plugin
import WBC_plugin from "wbc-ui3";

//creation of Vue APP named WBCApp
const WBCApp = createApp(App);

//install plugin to WBCApp before mounted it
WBCApp.use(WBC_plugin, {});

//Mount Vue application to the element id
WBCApp.mount("#app");
