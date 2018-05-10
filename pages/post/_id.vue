<template>
  <!--<div style="background-color: #7f828b">
    <span v-html="result2"></span>
  </div>-->

    <div class="table" align="center">
      <div class="GodoB cc">{{title}}</div>
      <vue-markdown class="markdown GodoM"> {{result}} </vue-markdown>
    </div>

</template>

<script>
  import MarkdownIt from 'markdown-it'
  import VueMarkdown from 'vue-markdown'

  export default {

    middleware: 'post',
    components: {VueMarkdown},
    data () {
      return {
        result2: new MarkdownIt().render(this.$store.state.post.content),
        result: this.$store.state.post.content,
        title: this.$store.state.post.title
      }
    }

  }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/font.scss';

  .cc {
    font-size: 55px;
  }

  .markdown {
    padding: 20px;
    font-size: 25px;
    text-align: left;
  }

  .table {

    background-color: #f7f8fb;
    margin: 20px;
  }

</style>
