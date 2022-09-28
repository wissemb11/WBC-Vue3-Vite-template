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

✔ Add TypeScript? Yes  
✔ Add JSX Support? Yes  
✔ Add Vue Router for Single Page Application development? Yes  
✔ Add Pinia for state management? Yes  
✔ Add Vitest for Unit Testing? Yes  
✔ Add Cypress for both Unit and End-to-End testing? Yes  
✔ Add ESLint for code quality? Yes  
✔ Add Prettier for code formatting? Yes

Scaffolding project in /home/.../<project-name>

## 2- WBC Installaton

```sh
npm i wbc-ui3
```

## 3- WBC configuration

In main.js install WBC plugin (WBC_plugin) in your app (WBCApp).

Then, your main.js have this structure

```sh
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

#import WBC plugin
import WBC_plugin from "wbc-ui3";

#creation of Vue APP named WBCApp
const WBCApp = createApp(App);

#install plugin to WBCApp before mounted it
WBCApp.use(WBC_plugin, {});

#Mount Vue application to the element id
WBCApp.mount("#app");
```

## The contribution

1- The componnents WBLink, WBHtml, WBC are registered globally to the main app. Now, you can explore the power of WBC.

2- All globals registered componnents are authomatically injected to WBC.

## Run project

Done. Now run:

```sh
  cd <project-name>
  npm install
  npm run lint
  npm run dev
```

## How to use WBC?

For details guide, visit www.wi-bg.com/WBC

### WBHtml: Componnent and Examples

```sh
Componnent name:'WBHtml'
props:['html']
syntax:
"<WBHtml htm="[[<htm_content>|<classes or style>|<external_or_internal_link>]]"></WBHtml>
```

#### WBHtml: Taking account of HTML syntax

| HTML Layout                                            | options API                                                        | Composition API                                                               |
| ------------------------------------------------------ | ------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| `<span>bonjour <b>tout</b><br> le <i>monde</i></span>` | `<WBHtml html="bonjour <b>tout</b><br> le <i>monde</i>"></WBHtml>` | `return () => h(WBHtml, { html: "bonjour <b>tout</b><br> le <i>monde</i>" })` |

#### WBHtml: Taking accunt of attributes (class or style)

| HTML Layout                                                                      | options API                                                                                                 | Composition API                                                                                                           |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `<span class="cl0 cl1">bonjour tout le monde</span>`                             | `<WBHtml v-bind='{ html: "[[bonjour tout le monde ` \| ` cl0 cl1]]" }'></WBHtml>`                           | ` return () => h(WBHtml, { html: "[[bonjour tout le monde`\|`cl0 cl1]]" });`                                              |
| `<span style="color: red; background-color: grey;">bonjour tout le monde</span>` | `<WBHtml html= '[[bonjour tout le monde `\|`{"style":{"color":"red","backgroundColor":"grey"}}]]></WBHtml>` | `return () => h(WBHtml, { html: '[[bonjour tout le monde `\|` {"style":{"color":"red","backgroundColor":"grey"}} ]]' });` |

#### WBHtml: stylish html hyper-link to new page :target="\_blank"

| HTML Layout                                                                                                             | options API                                                                                                                        | Composition API                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `<a target="_blank" href="url" style="color: red; background-color: grey;" _pageexpand_="24">bonjour tout le monde</a>` | `<WBHtml html='[[bonjour tout le monde "style":{"color":"red","backgroundColor":"grey"},"target":"\_blank"} `\|` url]]'></WBHtml>` | `return () => h(WBHtml, { html: '[[bonjour tout le monde `\|` {"style":{"color":"red","backgroundColor":"grey"}} ]]' });` |

N.B. WBHtml text c an be linked to interanl route (for example vue-router4)

#### WBHtml: with multi href and classes

| HTML Layout                                                                                                                                                                                                              | options API                                                                                                                                                                                 | Composition API                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<span>hi mr ! bonjour <a class="cl0 cl1" href="ssss" _pageexpand_="40">tout</a> all <span class="cl0 cl1">tout</span> le monde comment <a class="" href="https://stackoverflow.com">vas tu</a>? link to OBJECT </span>` | `<WBHtml html="[[ hi mr ! bonjour [[tout `\|`cl0 cl1`\|`subUrl]] all [[tout` \| `cl0 cl1]] le monde comment [[vas tu`\|` `\|` https://stackoverflow.com]]? link to [[OBJECT]]]]"></WBHtml>` | `return () =>h(WBHtml, {html: "[[hi mr ! bonjour [[tout`\|`cl0 cl1`\|`subUrl]] alll [[tout`\|`cl0 cl1]] le [[monde]] comment [[vas tu`\|\|`https://stackoverflow.com]]? link to [[OBJECT]]]]"});` |

### WBLink: Componnent and Examples

```sh
Componnent name:'WBLink'
props:['to', 'text']
attributes:any attributes of the Anchor tag
syntax:
"<WBLink to="http://stackoverflow.com" text="This is a Link"></WBLink>
```

### WBLink: Css stylish href with classes and attributes to open in the same onglet

| HTML Layout                                                                                                        | options API                                                                                                               | Composition API                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `<a href="http://stackoverflow.com" class="cls0 cls1" style="color: red;" _pageexpand_="4">This is a red link</a>` | `<WBLink to='http://stackoverflow.com' text='This is a red link' style=" { color: 'red'; }", class='cls0 cls1'></WBLink>` | `return () => h(WBLink, { to: "http://stackoverflow.com", text: "This is a red link", style: { color: "red" }, class: "cls0 cls1" });` |

N.B.

- To open in another ongglet use prperty **target="\_blank"**
- To use router-link, the props to have to be an object.

### WBC: Componnent and Examples

```sh
Componnent name:'WBC'
props:['to', 'item','key']
attributes:any attributes of html tag/component/page...
syntax:
"<WBLink to="http://stackoverflow.com" text="This is a Link"></WBLink>
```

- WBC is a Vue componnent which consists of writing, generalizing, controlling, generating and mixing html, css, js (support events too), dom, vuetify by writing only js or json objects. In addition, theses objects provide interaction with the backend as well.

- WBC is a VueJs Componnent with three props (item wrap and key). It aims to be used for more complex componnents with the minimum html/css codes. It is fully controllable by js or JSON object.

- WBC is reactive with the dom, dynamic, support events and can interact with backend.

- each WBC component has its own headers and footers slots...

- WBC support external source componnents (like Vuetify or bootstrap-vue..).
  It have to be injected while the installation of the WBC plugin of vue app.

```sh
import WBC_plugin from "wbc-ui3";
import * as  object_of_componnents from <external_source>

#creation of Vue APP named WBCApp
const WBCApp = createApp(App);

#install plugin to WBCApp before mounted it
WBCApp.use(WBC_plugin, object_of_componnents);
```

- Global registered componnents are authomatically registered to WBC.

The can be classified from particular to general, in terms of the item and the props in:

- S-WBC: Simple case
- L-WBC: List of WBC
- GL-WBC: General List of WBC
- GWBC: General WBC
- GWBSC : General Simple Compnent
- GWBNC : General Nested Compnent

For details guide, visit www.wi-bg.com/WBC

### S-WBC: list of items using a tag

| HTML Layout | options API | Composition API |
| ----------- || --------------- |
|`<li>222</li> <li><input type="checkbox" disabled=""></li> <li>111</li> <li><input type="checkbox" disabled=""></li> <li>123</li>` | `<WBC :item="[222,true,111,false,123]" wrap="li"></WBC>`|`return () => h(WBC, { item: [222,true,111,false,123],wrap:'li' })`|

**N.B: Some rules**

- WBC rules are based on type of item props and the global wrap. For example:
- if item is bollean => checkbox with its value is rendered
- if item is a list and wrap=`"<p>"` then here the WBC render each item list as a paragraph (ADJACENT)
- if item is a list and the wrap includes '~' (wrap=`"<~div>"`) then here the WBC render EMBEDDED item div list.

### GWBC: When item props is an object

In that case, WBC become a caviar, theses operations can be dynamically used throw the object js:

- hide/show the componnent
- stylish the componnent
- add headers and footers for this component
- Link the component to urls
- add events to components
- ranging and changing the layout of the componnents easly like a puszzle game
- interact with the backend
  <!--
  | HTML Layout | options API | Composition API |
  | ----------- | ----------- | --------------- |
  | ???         |             |                 |
   -->

  For full details guide, visit www.wi-bg.com/WBC
