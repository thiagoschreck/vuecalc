<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <CalcScreen :resultString="result" :calculationsString="calculations" />
    <CalcKeyboard @keyboardclick="keyboardclick" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import CalcKeyboard from "./components/CalcKeyboard.vue";
import CalcScreen from "./components/CalcScreen.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    CalcScreen,
    CalcKeyboard,
  },
  data() {
    return {
      calculations: "0",
      calculating: false,
      result: "0",
    };
  },
  methods: {
    separateTerms(input) {
      let operators = [];
      for (let i = 0; i < input.length; i++) {
        if (["+", "-", "×", "÷"].includes(input[i])) {
          console.log("Pushing operator n" + i + ": " + input[i]); //debug
          operators.push(input[i]);
        }
      }

      input = input.split("+");
      input = input.join(",");
      input = input.split("-");
      input = input.join(",");
      input = input.split("×");
      input = input.join(",");
      input = input.split("÷");
      input = input.join(",");
      input = input.split(",");

      if (!input[input.length - 1]) {
        input.pop();
        operators.pop();
      }

      let output = {
        terms: input,
        operators: operators,
      };

      return output;
    },

    calculate(input) {
      let result = 0;
      let operate = {
        "+": (a, b) => {
          return (parseFloat(a) + parseFloat(b)).toString();
        },
        "-": (a, b) => {
          return (parseFloat(a) - parseFloat(b)).toString();
        },
        "×": (a, b) => {
          return (parseFloat(a) * parseFloat(b)).toString();
        },
        "÷": (a, b) => {
          return (parseFloat(a) / parseFloat(b)).toString();
        },
      };

      let operations = this.separateTerms(input);

      result += operations.terms[0];
      for (let i = 1; i < operations.terms.length; i++) {
        result = operate[operations.operators[i - 1]](
          result,
          operations.terms[i]
        );
      }
      return result;
    },

    type(input) {
      switch (input) {
        case "C": {
          this.calculations = "0";
          this.calculating = false;
          this.result = "0";
          break;
        }
        case "+":
        case "-":
        case "×":
        case "÷": {
          this.result = this.calculate(this.calculations);
          if(!this.calculating){
            this.calculations += " " + input + " ";
            this.calculating = true;
          }
          break;
        }
        case ".": {
          this.type(".");
          break;
        }
        case "=": {
          this.result = this.calculate(this.calculations);
          this.calculating = false;
          break;
        }
        default: {
          if (this.calculations !== "0") {
            this.calculations += input;
            this.calculating = false;
          } else {
            this.calculations = input;
          }
        }
      }
    },

    keyboardclick(data) {
      this.type(data);
    },
  },
};
</script>
