<template>
  <div class="screen">
    <div class="screen__topbar">
      <calc-theme-button emoji="🌙" />
    </div>
    <div class="screen__text">
      <p class="screen__text__history" v-bind:innerHTML="history">
        {{ history }}
      </p>
      <p class="screen__text__result" v-on:btn-click="alert(payload[0])" v-bind:innerHTML="result">{{ result }}</p>
    </div>
  </div>
</template>

<script>
import CalcThemeButton from "./CalcThemeButton.vue";

export default {
  components: { CalcThemeButton },
  name: "CalcScreen",
  props: {
    emoji: String,
  },
  data: function () {
    return {
      history: 0,
      result: 0,
    }
  },
};
</script>

<style lang="scss" scoped>
.screen {
  width: 100%;
  padding: 20px 10%;
  &__topbar {
    padding-bottom: 50px;
  }
  &__text {
    // display: flex;
    & input {
      display: block;
      width: 100%;
      font-size: 30px;
    }
  }
}
</style>
