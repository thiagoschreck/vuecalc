<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <CalcScreen emoji="🌙" :history="0" :result="0" />
    <CalcKeyboard />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import CalcKeyboard from "./components/CalcKeyboard.vue";
import CalcScreen from "./components/CalcScreen.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    CalcScreen,
    CalcKeyboard
  }
};
</script>
