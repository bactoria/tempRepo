<template>
<div align="center" >

  <div class="category GodoB">CATEGORY</div>
  <div>
  <v-list align="center" >
   <v-list-tile v-for="category in categories" :key="category.id">
      <v-list-tile-content class="GodoB" style="align-items: center;">
        <a class="categoryA"  :href="'/category/' + category.id" tag="1">
          {{category.name}}
        </a>

      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</div>
</div>

</template>

<script>
  import {mapGetters} from 'vuex'

  export default {

    middleware: 'category',

    computed:
      mapGetters (['categories']),
    methods: {
      findPosts (category) {
        this.$router.push('/category/'+category.id);
      }
    }

  }
</script>

<style lang="scss" scoped>

  .center{
    text-align: center;
  }

  .category {
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
  }

  .categoryA {

    &:hover {
      transform: scale(1.3);
      color: #000000;
    }

    text-decoration: none;
    font-size: 15px;
    text-align: center;
    cursor:pointer;
    color: #aaaaaa;
  }
</style>
