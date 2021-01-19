<template>
  <div class="keyboard">
    <div class="keyboard__container">
      <calc-button text="C" />
      <calc-button text="7" />
      <calc-button text="4" />
      <calc-button text="1" />
      <calc-button text="0" />
    </div>
    <div class="keyboard__container">
      <calc-button text="+/-" />
      <calc-button text="8" />
      <calc-button text="5" />
      <calc-button text="2" />
    </div>
    <div class="keyboard__container">
      <calc-button text="%" />
      <calc-button text="9" />
      <calc-button text="6" />
      <calc-button text="3" />
      <calc-button text="." />
    </div>
    <div class="keyboard__container">
      <calc-button text="÷" />
      <calc-button text="×" />
      <calc-button text="-" />
      <calc-button text="+" />
      <calc-button text="=" />
    </div>
  </div>
</template>

<script>
import CalcButton from "./CalcButton.vue";

export default {
  name: "CalcKeyboard",
  components: {
    CalcButton
  }
};
</script>

<style lang="scss" scoped>
.keyboard {
  width: 50%;
  margin: 20px 10%;
  display: grid;

  &__container {
    grid-row: 1 / 5;
  }
}
</style>
