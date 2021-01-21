<template>
  <div id="app">
    <CalcScreen :resultString="result.toString()" :calculationsString="calculations" />
    <CalcKeyboard @keyboardclick="keyboardclick" />
  </div>
</template>

<script>
import CalcKeyboard from "./components/CalcKeyboard.vue";
import CalcScreen from "./components/CalcScreen.vue";

export default {
  name: "App",
  components: {
    CalcScreen,
    CalcKeyboard
  },
  data() {
    return {
      calculations: "0",
      isCalculating: false,
      canComma: true,
      canNegate: true,
      result: "0"
    };
  },
  methods: {
    calculate(input) {
      let result = 0;
      input = input.replace(/× /g,"*").replace(/÷ /g,"/");
      result = eval(input);
      return result;
    },

    type(input) {
      switch (input) {
        case "C": {
          this.calculations = "0";
          this.isCalculating = false;
          this.canComma = true;
          this.canNegate = true;
          this.result = "0";
          break;
        }
        case "+":
        case "-":
        case "×":
        case "÷": {
          if(!this.canNegate && !this.isCalculating) {
            this.calculations += ")";
          }
          this.canComma = true;
          this.canNegate = true;
          if (!this.isCalculating) {
            if(this.calculations[this.calculations.length - 1] == "."){
              this.calculations[this.calculations.length - 1] = " " + input + " ";
            } else {
              this.calculations += " " + input + " ";
            }
            this.isCalculating = true;
          }
          else if(this.isCalculating && input === "-" && this.canNegate){
              this.calculations += "-(";
              this.canNegate = false;
              this.isCalculating = true;
          }
          else if(this.isCalculating) {
            this.calculations = this.calculations.split("");
            this.calculations[(this.calculations.length-2)] = input;
            this.calculations = this.calculations.join("");
          }
          break;
        }
        case "%": {
          if(!this.isCalculating) {
            if(!this.canNegate) {
              this.calculations += ")";
            }
            this.canNegate = true;
            this.calculations = "(" + this.calculations + ") ÷ 100";
            this.result = this.calculate(this.calculations);
          }
          break;
        }
        case "+/-": {
          if(!this.isCalculating) {
            if(!this.canNegate) {
              this.calculations += ")";
            }
            this.canNegate = true;
            this.calculations = "(-" + this.calculations + ")";
          }
          break;
        }
        case ".": {
          if(this.canComma && !this.isCalculating){
            this.calculations += ".";
            this.canComma = false;
            }
          else if(this.canComma && this.isCalculating) {
            this.calculations += "0.";
            this.canComma = false;
          }
          break;
        }
        case "=": {
          if(!this.canNegate) {
            this.calculations += ")";
            this.canNegate = true;
          }
          this.result = this.calculate(this.calculations);
          this.isCalculating = false;
          break;
        }
        default: {
          if (this.calculations !== "0") {
            this.calculations += input;
            this.isCalculating = false;
          } else {
            this.calculations = input;
          }
        }
      }
    },

    keyboardclick(data) {
      this.type(data)
      if(!this.isCalculating){
        this.result = this.calculate(this.calculations);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    display: grid;
    max-width: 70px;
  }
</style>