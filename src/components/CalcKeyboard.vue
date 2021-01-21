<template>
  <div class="keyboard">
    <div class="keyboard__container">
      <calc-button class="secondary" text="C" @btnclick="btnclick" />
      <calc-button text="7" @btnclick="btnclick" />
      <calc-button text="4" @btnclick="btnclick" />
      <calc-button text="1" @btnclick="btnclick" />
      <calc-button class="long" text="0" @btnclick="btnclick" />
    </div>
    <div class="keyboard__container">
      <calc-button class="secondary" text="+/-" @btnclick="btnclick" />
      <calc-button text="8" @btnclick="btnclick" />
      <calc-button text="5" @btnclick="btnclick" />
      <calc-button text="2" @btnclick="btnclick" />
    </div>
    <div class="keyboard__container">
      <calc-button class="secondary" text="%" @btnclick="btnclick" />
      <calc-button text="9" @btnclick="btnclick" />
      <calc-button text="6" @btnclick="btnclick" />
      <calc-button text="3" @btnclick="btnclick" />
      <calc-button text="." @btnclick="btnclick" />
    </div>
    <div class="keyboard__container">
      <calc-button class="secondary" text="÷" @btnclick="btnclick" />
      <calc-button class="secondary" text="×" @btnclick="btnclick" />
      <calc-button class="secondary" text="-" @btnclick="btnclick" />
      <calc-button class="secondary" text="+" @btnclick="btnclick" />
      <calc-button class="tertiary" text="=" @btnclick="btnclick" />
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 125px);
  user-select: none;
  gap: 15px;

  &__container {
    display: grid;
    gap: 15px;
  }
}

.long {
  width: calc(200% + 15px); //15px is the column gap
}

</style>
