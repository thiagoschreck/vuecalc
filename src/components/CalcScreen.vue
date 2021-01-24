<template>
  <div class="screen">
    <div class="screen__topbar">
      <button
        class="screen__topbar__themebutton"
        @click="$darkMode = !$darkMode"
      >
        <img
          id="theme-image"
          :src="require('@/assets/' + ($darkMode ? 'dark' : 'light') + '.png')"
          alt="Theme-button"
        />
      </button>
    </div>
    <div class="screen__text">
      <p
        class="screen__text__history"
        :class="{ focused: !$focusResult, dark: $darkMode }"
        v-html="$operation"
      ></p>
      <p
        class="screen__text__result"
        :class="{ focused: $focusResult, dark: $darkMode  }"
        v-html="$result"
      ></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalcScreen",
  data() {
    return {
      currentTheme: "light",
    };
  },
  methods: {
    themeclick(bool) {
      this.$emit("updateTheme", bool);
    }
  },
};
</script>

<style lang="scss" scoped>
.screen {
  color: grey;
  font-family: "Roboto", sans-serif;
  font-size: 6vh;
  max-width: 40vh;
  overflow-x: auto scroll;
  overflow-y: hidden;
  padding-bottom: 3vh;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  &__topbar {
    padding-bottom: 2vh;
    &__themebutton {
      background-color: transparent;
      border: none;
      font-size: 4vh;
      outline: none;
      & > img {
        -webkit-user-drag: none;
        max-width: 4vh;
      }
      :focus {
        outline: none;
      }
    }
  }
}
</style>
