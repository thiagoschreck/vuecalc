import "./scss/app.scss";
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

var globalData = new Vue({
  data() {
    return {
      darkMode: false,
      operation: "0",
      result: "0",
      focusResult: "true"
    };
  }
});


Vue.mixin({
  computed: {
    $darkMode: {
      get: function () { return globalData.$data.darkMode },
      set: function (darkMode) { globalData.$data.darkMode = darkMode; }
    },
    $result: {
      get: function () { return globalData.$data.result },
      set: function (result) { globalData.$data.result = result; }
    },
    $operation: {
      get: function () { return globalData.$data.operation },
      set: function (operation) { globalData.$data.operation = operation; }
    },
    $focusResult: {
      get: function () { return globalData.$data.focusResult },
      set: function (focusResult) { globalData.$data.focusResult = focusResult; }
    }
  }
});


new Vue({
  render: h => h(App)
}).$mount("#app");
