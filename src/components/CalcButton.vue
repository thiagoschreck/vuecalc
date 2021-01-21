<template>
  <button class="keyboard__container__button" @click="$emit('btnclick', text)">{{ text }}</button>
</template>

<script>
export default {
  name: "CalcButton",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.keyboard__container__button {
  border-radius: 30px;
  border: none;
  width: 125px;
  height: 125px;
  font-size: 50px;
}
:focus {
  outline: none;
}
</style>
