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
  font-size: 6vw;
  max-width: 40vw;
  overflow-x: auto scroll;
  overflow-y: hidden;
  padding-bottom: 3vw;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  &__topbar {
    padding-bottom: 2vw;
    &__themebutton {
      background-color: transparent;
      border: none;
      font-size: 4vw;
      outline: none;
      & > img {
        -webkit-user-drag: none;
        max-width: 4vw;
      }
      :focus {
        outline: none;
      }
    }
  }
}
</style>
