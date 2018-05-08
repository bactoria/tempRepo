<template>
<div align="center">
  <div>
    About Me
  </div>
<v-card v-for="category in categories" :key="category.id" >
  <v-card-title @click="findPosts">
    {{category.name}}
  </v-card-title>
</v-card>

</div>

</template>

<script lang="scss" scoped>



</script>
