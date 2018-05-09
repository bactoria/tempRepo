<template>
<div align="center">
  <div style="font-size: 40px; font-family: BM-HANNA;">
    앙기모띠~
  </div>

  <img src="../static/KakaoTalk_20180507_235451526.gif" width="50%"/>

<v-card v-for="category in categories" :key="category.id" >
  <v-card-title @click="findPosts">
    {{category.name}}
  </v-card-title>
</v-card>

</div>

</template>

<script lang="scss">


</script>

<style lang="scss" scoped>
  @import "../assets/scss/font.scss";

</style>
