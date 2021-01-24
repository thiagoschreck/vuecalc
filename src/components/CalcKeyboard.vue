<template>
  <div class="keyboard">
    <div class="keyboard__container">
      <button
        class="keyboard__container__button secondary" 
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', 'C')"
      >
        C
      </button>
      <button
        class="keyboard__container__button"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '7')"
      >
        7
      </button>
      <button
        class="keyboard__container__button"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '4')"
      >
        4
      </button>
      <button
        class="keyboard__container__button"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '1')"
      >
        1
      </button>
      <button
        class="keyboard__container__button long"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '0')"
      >
        0
      </button>
    </div>
    <div class="keyboard__container">
      <button
        class="keyboard__container__button secondary"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '+/-')"
      >
        +/-
      </button>
      <button
        class="keyboard__container__button"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '8')"
      >
        8
      </button>
      <button
        class="keyboard__container__button"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '5')"
      >
        5
      </button>
      <button
        class="keyboard__container__button"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '2')"
      >
        2
      </button>
    </div>
    <div class="keyboard__container">
      <button
        class="keyboard__container__button secondary"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '%')"
      >
        %
      </button>
      <button
        class="keyboard__container__button"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '9')"
      >
        9
      </button>
      <button
        class="keyboard__container__button"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '6')"
      >
        6
      </button>
      <button
        class="keyboard__container__button"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '3')"
      >
        3
      </button>
      <button
        class="keyboard__container__button"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '.')"
      >
        .
      </button>
    </div>
    <div class="keyboard__container">
      <button
        class="keyboard__container__button secondary"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '÷')"
      >
        ÷
      </button>
      <button
        class="keyboard__container__button secondary"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '×')"
      >
        ×
      </button>
      <button
        class="keyboard__container__button secondary"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '-')"
      >
        -
      </button>
      <button
        class="keyboard__container__button secondary"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '+')"
      >
        +
      </button>
      <button
        class="keyboard__container__button tertiary"
        :class="{ dark: $darkMode }"
        @click="$emit('keyboardclick', '=')"
      >
        =
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalcKeyboard",
  methods: {}
};
</script>

<style lang="scss" scoped>
.keyboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 9vh);
  max-width: 100%;
  max-height: 100%;
  user-select: none;
  gap: 1vh;

  &__container {
    display: grid;
    gap: 1vh;

    &__button {
      border-radius: 3vh;
      border: none;
      font-size: 3.5vh;
      height: 9vh;
      max-height: 100vh;
      max-width: 100vh;
      width: 9vh;
    }
    :focus {
      outline: none;
    }
  }
}

@media (max-width: 768px) {
  .keyboard {
    grid-template-rows: repeat(5, 9vh);
  }
}

.long {
  width: calc(200% + 1vh); //1vw is the column gap
}
</style>
