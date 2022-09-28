<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>
  <main>
    <h2>WBHtml: Taking accunt of attributes (class or style)</h2>
    <WBHtml
      html='[[bonjour tout le monde|{"style":{"color":"red","backgroundColor":"grey"}}]]'
    ></WBHtml>
    <h2>WBHtml: with multi href and classes</h2>
    <WBHtml
      html="[[ hi mr ! bonjour [[tout|cl0 cl1|subUrl]] all [[tout | cl0 cl1]] le monde comment [[vas tu||https://stackoverflow.com]]? link to [[OBJECT]]]]"
    ></WBHtml>
    <h2>S-WBC: list of items using wrap="&ltli&gt"</h2>
    <WBC :item="[222, true, 111, false, 123]" wrap="li"></WBC>
    <h2>S-WBC: list of items using &lt~div&gt</h2>
    <WBC :item="[222, true, 111, false, 123]" wrap="~div"></WBC>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
