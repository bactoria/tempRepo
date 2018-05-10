<template>
<div align="center">

  <section style="height: 20px;"> </section>
  <v-card class="card" v-for="post in posts" :key="post.id">
     <a class="none_" :href="'/post/'+post.id">
    <div class="hanna title">
      {{post.title}}
    </div >
       <div align="right" class= "GodoM" style="padding-right: 10px;">
        {{post.createdDate.split('T')[0]}}
       </div>
     </a>
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

  .none_{
    text-decoration: none;
  }

  .title {
    font-size: 100px;
    padding-top: 1.5rem;
  }

</style>
