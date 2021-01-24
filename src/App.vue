<template>
  <div id="app" :class="{ dark: $darkMode }">
    <CalcScreen />
    <CalcKeyboard @keyboardclick="typeEvaluate" />
  </div>
</template>

<script>
import CalcKeyboard from "./components/CalcKeyboard.vue";
import CalcScreen from "./components/CalcScreen.vue";

export default {
  name: "App",
  components: {
    CalcScreen,
    CalcKeyboard,
  },
  data() {
    return {
      isCalculating: false,
      canComma: true,
      canNegate: true,
    };
  },
  methods: {
    typeEvaluate(data) {
      this.type(data);
      if (!this.isCalculating) {
        this.$result = this.calculate(this.$operation);
      }
    },

    type(input) {
      switch (input) {
        case "C": {
          this.$operation = "0";
          this.$result = "0";
          this.$focusResult = true;
          this.isCalculating = false;
          this.canComma = true;
          this.canNegate = true;
          break;
        }
        case "+":
        case "-":
        case "×":
        case "÷": {
          this.$focusResult = false;
          if (!this.canNegate && !this.isCalculating) {
            this.$operation += ")";
          }
          this.canComma = true;
          this.canNegate = true;
          if (!this.isCalculating) {
            if (this.$operation[this.$operation.length - 1] == ".") {
              this.$operation[this.$operation.length - 1] = " " + input + " ";
            } else {
              this.$operation += " " + input + " ";
            }
            this.isCalculating = true;
          } else if (this.$operation && input === "-" && this.canNegate) {
            this.$operation += "(-";
            this.canNegate = false;
            this.isCalculating = true;
          } else if (this.isCalculating) {
            this.$operation = this.$operation.split("");
            this.$operation[this.$operation.length - 2] = input;
            this.$operation = this.$operation.join("");
          }
          break;
        }
        case "%": {
          this.$focusResult = false;
          if (!this.isCalculating) {
            if (!this.canNegate) {
              this.$operation += ")";
            }
            this.canNegate = true;
            this.$operation = "(" + this.$operation + ") ÷ 100";
            this.$result = this.calculate(this.$operation);
          }
          break;
        }
        case "+/-": {
          this.$focusResult = false;
          if (!this.isCalculating) {
            if (!this.canNegate) {
              this.$operation += ")";
            }
            this.canNegate = true;
            this.$operation = "(-" + this.$operation + ")";
          }
          break;
        }
        case ".": {
          this.$focusResult = false;
          if (this.canComma && !this.isCalculating) {
            this.$operation += ".";
            this.canComma = false;
          } else if (this.canComma && this.isCalculating) {
            this.$operation += "0.";
            this.canComma = false;
          }
          break;
        }
        case "=": {
          this.$focusResult = true;
          if (!this.canNegate) {
            this.$operation += ")";
            this.canNegate = true;
          }
          this.$result = this.calculate(this.$operation);
          this.isCalculating = false;
          break;
        }
        default: {
          if (this.$operation !== "0") {
            this.$operation += input;
            this.isCalculating = false;
          } else {
            this.$operation = input;
          }
          this.$focusResult = false;
        }
      }
    },

    calculate(input) {
      let result = 0;
      input = input.replace(/× /g, "*").replace(/÷ /g, "/");
      result = eval(input);
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  border-radius: 5vh;
  border: black solid 1px;
  height: fit-content;
  margin: 2vh auto;
  max-width: fit-content;
  padding: 3vh;
  width: 100%;
}
</style>