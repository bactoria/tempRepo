<template>
  <div class="root">
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
  .root {
    margin-left:20%;
  }

</style>
