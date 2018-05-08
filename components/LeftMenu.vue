<template>
  <div class="hanna">
    <about-me/>
    <category/>
  </div>
</template>

<script>
  import Category from "./Category";
  import AboutMe from "./AboutMe";
  export default {
      components: {Category, AboutMe}
    }
</script>

<style lang="scss" scoped>

@import '../assets/scss/font.scss';

</style>
