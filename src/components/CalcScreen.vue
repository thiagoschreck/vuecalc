<template>
  <div class="screen">
    <div class="screen__topbar">
      <calc-theme-button/>
    </div>
    <div class="screen__text">
      <p class="screen__text__history" v-html="calculationsString"></p>
      <p class="screen__text__result" v-html="resultString"></p>
    </div>
  </div>
</template>

<script>
import CalcThemeButton from "./CalcThemeButton.vue";

export default {
  components: { CalcThemeButton },
  name: "CalcScreen",
  props: {
    resultString: {
      type: String,
      default: ""
    },
    calculationsString: {
      type: String,
      default: "0"
    }
  },
  data() {
    return {
      history: 0,
      result: 0
    };
  },
  methods: {
    updateResult: function() {
      console.log("b");
    },
    themeclick(bool){
        this.$emit("updateTheme", bool)
    }
  }
};
</script>

<style lang="scss" scoped>
.screen {
  font-size: 80px;
  font-family: 'Roboto', sans-serif;
  text-align: right;
  width: 100%;
  &__topbar {
    padding-bottom: 50px;
  }
  &__text {
    & input {
      display: block;
      width: 100%;
      font-size: 30px;
    }
  }
}
</style>
