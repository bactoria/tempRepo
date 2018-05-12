<template>

  <div style="width: 100%;" class="root">

    <div class="table" align="center">

      <!-- 제목 -->
      <div>
      </div>



        <div style="border-bottom: 7px solid #dddddd;border-radius: 2px; width: 10%; margin-top: 20px"> </div>

      <!-- 내용 -->

<!--  <vue-markdown :source="source" ></vue-markdown>-->

    <vue-markdown class="result-html full-height" :watches="['show','html','breaks','linkify','emoji','typographer','toc']"
                    :source="source" :show="show" :html="html" :breaks="breaks" :linkify="linkify"
                    :emoji="emoji" :typographer="typographer" :toc="toc" v-on:rendered="allRight"

                    v-on:toc-rendered="tocAllRight" toc-id="toc"></vue-markdown>
    </div>

    </div>

</template>


<script>
//  import MarkdownIt from 'markdown-it'
  import VueMarkdown from 'vue-markdown'
  export default {
    head: {
    script: [
        {src: '//bactoria.disqus.com/count.js', id: 'dsq-count-scr', body: true},
      {src: '/js/main.js'},
      {src: '/js/prism.js'}
    ],
      link: [
        { rel: 'stylesheet', href: '/css/main.css' },
        { rel: 'stylesheet', href: '/css/prism.css' }
      ]
    },
    components: {VueMarkdown},
    data () {
      return {
        /*Markdown*/
        source: "## h2 Heading 8-)\n" +
        "### h3 Heading\n" +
        "\n" +
        "## Horizontal Rules\n" +
        "\n" +
        "___\n" +
        "\n" +
        "---\n" +
        "\n" +
        "***\n" +
        "\n" +
        "## Typographic replacements\n" +
        "\n" +
        "Enable typographer option to see result.\n" +
        "\n" +
        "(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n" +
        "\n" +
        "test.. test... test..... test?..... test!....\n" +
        "\n" +
        "!!!!!! ???? ,,  -- ---\n" +
        "\n" +
        "\"Smartypants, double quotes\" and 'single quotes'\n" +
        "\n" +
        "\n" +
        "## Emphasis\n" +
        "\n" +
        "**This is bold text**\n" +
        "\n" +
        "__This is bold text__\n" +
        "\n" +
        "*This is italic text*\n" +
        "\n" +
        "_This is italic text_\n" +
        "\n" +
        "~~Strikethrough~~\n" +
        "\n" +
        "\n" +
        "## Blockquotes\n" +
        "\n" +
        "\n" +
        "> Blockquotes can also be nested...\n" +
        ">> ...by using additional greater-than signs right next to each other...\n" +
        "> > > ...or with spaces between arrows.\n" +
        "\n" +
        "\n" +
        "## Lists\n" +
        "\n" +
        "Unordered\n" +
        "\n" +
        "+ Create a list by starting a line with `+`, `-`, or `*`\n" +
        "+ Sub-lists are made by indenting 2 spaces:\n" +
        "  - Marker character change forces new list start:\n" +
        "    * Ac tristique libero volutpat at\n" +
        "    + Facilisis in pretium nisl aliquet\n" +
        "    - Nulla volutpat aliquam velit\n" +
        "+ Very easy!\n" +
        "\n" +
        "Ordered\n" +
        "\n" +
        "1. Lorem ipsum dolor sit amet\n" +
        "2. Consectetur adipiscing elit\n" +
        "3. Integer molestie lorem at massa\n" +
        "\n" +
        "\n" +
        "1. You can use sequential numbers...\n" +
        "1. ...or keep all the numbers as `1.`\n" +
        "\n" +
        "Start numbering with offset:\n" +
        "\n" +
        "57. foo\n" +
        "1. bar\n" +
        "\n" +
        "\n" +
        "## Code\n" +
        "\n" +
        "Inline `code`\n" +
        "\n" +
        "Indented code\n" +
        "\n" +
        "    // Some comments\n" +
        "    line 1 of code\n" +
        "    line 2 of code\n" +
        "    line 3 of code\n" +
        "\n" +
        "\n" +
        "Block code \"fences\"\n" +
        "\n" +
        "```\n" +
        "Sample text here...\n" +
        "```\n" +
        "Syntax highlighting\n" +
        "\n" +
        "``` javascript\n" +
        "var foo = function (bar) {\n" +
        "  return bar++;\n" +
        "};\n" +
        "\n" +
        "console.log(foo(5));\n" +
        "```\n" +
        "\n" +
        "``` go\n" +
        "package main\n" +
        "\n" +
        "import \"fmt\"\n" +
        "\n" +
        "func main() {\n" +
        "\tfmt.Println(\"Hello, world!\")\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "## Tables\n" +
        "\n" +
        "| Option | Description |\n" +
        "| ------ | ----------- |\n" +
        "| data   | path to data files to supply the data that will be passed into templates. |\n" +
        "| engine | engine to be used for processing templates. Handlebars is the default. |\n" +
        "| ext    | extension to be used for dest files. |\n",
        show: true,
        html: false,
        breaks: true,
        linkify: false,
        emoji: true,
        typographer: true,
        toc: false
      }
    },methods: {
      allRight: function (htmlStr) {
        console.log("markdown is parsed !");
      },
      tocAllRight: function (tocHtmlStr) {
        console.log("toc is parsed :", tocHtmlStr);
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>
