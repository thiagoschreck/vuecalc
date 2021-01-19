<template>
    <button class="screen__topbar__themebutton">{{ emoji }}</button>
</template>

<script>
export default {
    name: "CalcThemeButton",
    props: {
        emoji: String
    }
}
</script>

<style lang="scss" scoped>
    .screen__topbar__themebutton{
        border: none;
        background-color: white;
        font-size: 25px;
    }
    
</style>
