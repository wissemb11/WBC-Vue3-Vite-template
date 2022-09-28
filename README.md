# WBC-Vue3-Vite-template

This tutoriel should help get you started developing with WBC-ui3 and Vue 3 in Vite context.

## 1- Create the ecosystem of WBC (vue3 in vite)

```sh
npm create vite@latest
```

follow suggession and choose ssettings according of your needs (vue3 is required). For example:

✔ Project name: <project-name>
✔ Select a framework: › Vue
✔ Select a variant: › Customize with create-vue

Need to install the following packages:
create-vue@latest
Ok to proceed? (y) y

Vue.js - The Progressive JavaScript Framework

✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in /home/.../<project-name>

## 2- WBC Installaton

```sh
npm i wbc-ui3
```

## 2- WBC configuration

In main.js install WBC plugin (WBC_plugin) in your app (WBCApp).

Then, your main.js have this structure

```sh
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import WBC_plugin from "wbc-ui3";

#creation of Vue APP named WBCApp
const WBCApp = createApp(App);

#install plugin to WBCApp before mounted it
WBCApp.use(WBC_plugin, {});

#Mount Vue application to the element id
WBCApp.mount("#app");
```

## -????????

The components WBLink, WBHtml, WBC are registered globally tp the main app. Now, you can explore the power of WBC.

## -????????

From now all globals registered componnents are authomatically injected to WBC.

## -????????

Done. Now run:

```sh
  cd <project-name>
  npm install
  npm run lint
  npm run dev
```

## How to use?

For details guide, visit www.wi-bg.com/WBC

### WBCHtml Component

<WBHtml html="bonjour <b>tout</b><br> le <i>monde</i>"></WBHtml>
<textarea disabled>
<WBHtml html="bonjour <b>tout</b><br> le <i>monde</i>"></WBHtml>
------------------------------
return () => h(WBHtml, { html: "bonjour <b>tout</b><br> le <i>monde</i>" })
</textarea>
<h3>// ********\*\*********WBHtml:string type without props and link******\*\*\*******</h3>
<textarea disabled>
<WBHtml v-bind='{ html: "bonjour tout le monde" }'></WBHtml>
------------------------------
return () => h(WBHtml, { html: "bonjour tout le monde" });</textarea>;
<h3>********\*\*********WBHtml:string type with string props(it is an empty class)******\*\*\*******</h3>
<textarea disabled>
<WBHtml v-bind='{ html: "[[bonjour tout le monde||]]" }'></WBHtml>
-----------------------------
return () => h(WBHtml, { html: "[[bonjour tout le monde||]]" });
</textarea>;
<h3>// ********\*\*********WBHtml:string type with string props(it is a class)******\*\*\*******</h3>
<textarea disabled>
<WBHtml v-bind='{ html: "[[bonjour tout le monde|cl0 cl1]]" }'></WBHtml>
---------------------------
return () => h(WBHtml, { html: "[[bonjour tout le monde|cl0 cl1]]" });
</textarea>;
<h3>// WBHtml:string type with empty string props and internal url (target not '\_blank')
</h3>
<textarea disabled>
<WBHtml v-bind='{ html: "[[bonjour tout le monde||url]]" }'></WBHtml>
----------------------------
return () => h(WBHtml, { html: "[[bonjour tout le monde||url]]" });
</textarea>;
<h3>// ********\*\*********WBHtml:string type with props of a and internal url in new page :target="\_blank"******\*\*\*******</h3>
<textarea disabled>
<WBHtml v-bind='{ html: `[[bonjour tout le monde|{"target":"_blank"}|url]]` }'></WBHtml>
-----------------------------
return () => h(WBHtml, { html: `[[bonjour tout le monde|{"target":"_blank"}|url]]` });
</textarea>;
<h3>// ********\*\*********WBHtml:string type with object props and internal url in new page :target="\_blank"******\*\*\*******</h3>
<textarea disabled>
<WBHtml v-bind='{
                html: `[[bonjour tout le monde|{"style":{"color":"red","backgroundColor":"grey"},"target":"_blank"}|url]]`,
            }'></WBHtml>
------------------------
return () =>
h(WBHtml, {
html: `[[bonjour tout le monde|{"style":{"color":"red","backgroundColor":"grey"},"target":"_blank"}|url]]`,
});
</textarea>
<h3>// ********\*\*********WBHtml:string type with object props and external url in new page :target="\_blank"******\*\*\*******</h3>
<textarea disabled>
<WBHtml v-bind='{
                html: `[[bonjour tout le monde|{"style":{"color":"red","backgroundColor":"grey"},"target":"_blank"}|http:<h3>//www.wi-bg.com]]`
            }'></WBHtml>
-------------------------------
return () =>
h(WBHtml, {
html: `[[bonjour tout le monde|{"style":{"color":"red","backgroundColor":"grey"},"target":"_blank"}|http://www.wi-bg.com]]`,
});
</textarea>
<h3>// ********\*\*********WBHtml:string type with object props and INTERNAL ROUTER url in new page :target="\_blank"******\*\*\*******</h3>
<textarea disabled>
<WBHtml v-bind='{
                html: `[[bonjour tout le monde|{"style":{"color":"red","backgroundColor":"grey"},"target":"_blank"}|{"name":"bla"}]]`,
            }'></WBHtml>
-------------------------
return () =>
h(WBHtml, {
html: `[[bonjour tout le monde|{"style":{"color":"red","backgroundColor":"grey"},"target":"_blank"}|{"name":"bla"}]]`,
});
</textarea>
<h3>// ********\*\*********WBHtml:string type with object props and internal url in new page :target="\_blank"******\*\*\*******</h3>
<WBHtml v-bind='{ html: `[[bonjour tout le monde|{"style":{"color":"red"}}]]` }'></WBHtml>
<textarea disabled>
<WBHtml v-bind='{ html: `[[bonjour tout le monde|{"style":{"color":"red"}}]]` }'></WBHtml>
--------------------------
return () => h(WBHtml, { html: `[[bonjour tout le monde|{"style":{"color":"red"}}]]` });
</textarea>;
<WBHtml v-bind='{
                html: "[[ hi [[]] mr [[||]] ! bonjour [[tout|cl0 cl1|ssss]] alll [[tout|cl0 cl1]] le [[monde]] comment [[vas tu||https://stackoverflow.com]]? link to [[OBJECT]]]]",
            }'></WBHtml>
<textarea disabled>
<WBHtml v-bind='{
                html: "[[ hi [[]] mr [[||]] ! bonjour [[tout|cl0 cl1|ssss]] alll [[tout|cl0 cl1]] le [[monde]] comment [[vas tu||https://stackoverflow.com]]? link to [[OBJECT]]]]",
            }'></WBHtml>
------------------------
return () =>
h(WBHtml, {
html: "[[hi [[]] mr [[||]] ! bonjour [[tout|cl0 cl1|ssss]] alll [[tout|cl0 cl1]] le [[monde]] comment [[vas tu||https://stackoverflow.com]]? link to [[OBJECT]]]]",
});
</textarea>
