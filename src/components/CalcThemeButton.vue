<template>
  <button class="screen__topbar__themebutton" @click="toggleTheme">
    <img id="theme-image" src="@/assets/light.png" alt="Theme-button" srcset="" />
  </button>
</template>

<script>
export default {
  name: "CalcThemeButton",
  methods: {
    toggleTheme() {
      let currentTheme = document.getElementById("app").getAttribute("data-theme");
      let switchToTheme = "light";
      if(currentTheme === "dark") {
        switchToTheme = "light";
        currentTheme = switchToTheme;
      }
      else if (currentTheme === "light") {
        switchToTheme = "dark";
        currentTheme = switchToTheme;
      }
        document.getElementById("theme-image").src="@/assets/"+currentTheme+".png";
      document.getElementById("app").setAttribute("data-theme", switchToTheme);
    },
  },
};
</script>

<style lang="scss" scoped>
.screen__topbar__themebutton {
  border: none;
  background-color: transparent;
  font-size: 25px;
  & > img {
    max-width: 35px;
  }
}
:focus {
  outline: none;
}
</style>
