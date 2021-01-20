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
  margin-bottom: 15px;
  width: 150px;
  height: 150px;

  font-size: 50px;
  // &__long {

  // }
}
</style>
