<template>
  <!--<div style="background-color: #7f828b">
    <span v-html="result2"></span>
  </div>-->
<div style="width: 100%;" class="root">
    <div class="table" align="center">

      <!-- 제목 -->
      <div>
        <a :href="'/category/'+post.categoryId">{{post.categoryId}}</a>
      </div>
      <div style="margin-bottom: 10%;">
          <span class="GodoB PostTitle">{{post.title}}</span>
        <!--  <span class="PostDate"> {{post.createdDate.split("T")[0]}} </span>
        -->

        <div style="border-bottom: 7px solid #aaaaaa;border-radius: 2px; width: 15%; margin: 10px"> </div>
        </div>

      <!-- 내용 -->
        <vue-markdown class="markdown GodoM"> {{post.content}} </vue-markdown>
    </div>

  <!-- Disqus 댓글 -->

  <div id="disqus_thread"></div>
  <script>

    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://bactoria.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  </script>
  <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

</div>

</template>
<script>

  /**
   *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
   *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

  var disqus_config = function () {
    this.page.url = "bactoria.me";  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = "1"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };

  (function() { // DON'T EDIT BELOW THIS LINE
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://bactoria.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();

</script>
<script>
  import MarkdownIt from 'markdown-it'
  import VueMarkdown from 'vue-markdown'

  export default {

    middleware: 'post',
    components: {VueMarkdown},
    data () {
      return {
        result2: new MarkdownIt().render(this.$store.state.post.content),
        post: this.$store.state.post,
      }
    }

  }
</script>

<style lang="scss" scoped>

  .root {
    padding-left: 5%;
    padding-right: 7%;
  }

  .PostTitle {
    font-size: 55px;
  }
  .PostDate {
    float: right;
    margin-top: 40px;
    margin-right: 15px;
    font-size: 15px;
    font-family: GodoM;
  }
  .markdown {
    padding: 20px;
    font-size: 25px;
    text-align: left;
  }

  .table {
    background-image: url("/static/backboard.jpg");
    background-repeat: repeat;

    border-radius: 70px;
    margin-top: 20px;
    margin-bottom: 30px;
    padding-top: 40px;
  }

  #disqust_thread {
    margin-top: 20px;
  }

</style>
