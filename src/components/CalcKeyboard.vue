<template>
  <div class="keyboard">
    <div class="keyboard__container">
      <calc-button text="C" @btnclick="btnclick" />
      <calc-button text="7" @btnclick="btnclick" />
      <calc-button text="4" @btnclick="btnclick" />
      <calc-button text="1" @btnclick="btnclick" />
      <calc-button text="0" @btnclick="btnclick" />
    </div>
    <div class="keyboard__container">
      <calc-button text="+/-" @btnclick="btnclick" />
      <calc-button text="8" @btnclick="btnclick" />
      <calc-button text="5" @btnclick="btnclick" />
      <calc-button text="2" @btnclick="btnclick" />
    </div>
    <div class="keyboard__container">
      <calc-button text="%" @btnclick="btnclick" />
      <calc-button text="9" @btnclick="btnclick" />
      <calc-button text="6" @btnclick="btnclick" />
      <calc-button text="3" @btnclick="btnclick" />
      <calc-button text="." @btnclick="btnclick" />
    </div>
    <div class="keyboard__container">
      <calc-button text="÷" @btnclick="btnclick" />
      <calc-button text="×" @btnclick="btnclick" />
      <calc-button text="-" @btnclick="btnclick" />
      <calc-button text="+" @btnclick="btnclick" />
      <calc-button text="=" @btnclick="btnclick" />
    </div>
  </div>
</template>

<script>
import CalcButton from "./CalcButton.vue";

export default {
  name: "CalcKeyboard",
  components: {
    CalcButton
  },
  methods: {
    btnclick(data){
      this.$emit("keyboardclick", data);
    }
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
