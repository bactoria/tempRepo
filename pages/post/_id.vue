<template>
  <!--<div style="background-color: #7f828b">
    <span v-html="result2"></span>
  </div>-->

    <div class="table">
      <vue-markdown class="ass"> {{result}} </vue-markdown>
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
        result: this.$store.state.post.content
      }
    }

  }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/font.scss';

  .ass {
    padding: 20px;
    font-size: 22px;
    font-family: KoPubDotumMedium;
  }

  .table {
    background-color: #f7f8fb;
    padding: 20px;
  }

</style>
