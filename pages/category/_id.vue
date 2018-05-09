<template>
<div align="center">

  <section style="height: 20px;"> </section>
  <v-card class="card" v-for="post in posts" :key="post.id">
   <div @click="getPost(post.id)">
    <v-card-title class="hanna post-title">
      {{post.title}}
    </v-card-title>
      <vue-markdown class="KoPubDotumMedium postContent"> {{post.content}} </vue-markdown>
   </div>
  </v-card>

</div>
</template>


<script>
  import VueMarkdown from 'vue-markdown'

  export default {

    middleware: 'posts',
    components: {VueMarkdown},
    computed: {
      posts () { return this.$store.state.posts }
    },
    methods: {
      getPost (id) {
        this.$router.push('/post/'+id);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/posts.scss";
  @import "../../assets/scss/font.scss";

  .postContent {
    margin-left: 20px;
    max-height: 100px;
  }
</style>
