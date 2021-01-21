<template>
  <button
    class="screen__topbar__themebutton"
    @click="$emit('themeclick', theme)"
  >
    <img v-bind:src="updateIcon()" alt="" srcset="" />
  </button>
</template>

<script>
export default {
  name: "CalcThemeButton",
  data() {
    return {
      theme: true,
      icon: "../assets/moon.png"
    };
  },
  methods: {
      updateIcon() {
          this.icon = "../assets/moon.png";
          return this.icon;
      }
  }
};

</script>

<style lang="scss" scoped>
.screen__topbar__themebutton {
  border: none;
  background-color: transparent;
  font-size: 25px;
}
</style>
