<template>
<div align="center" >

  <div class="category">CATEGORY</div>
  <div>
  <v-list align="center" >
   <v-list-tile v-for="category in categories" >
      <v-list-tile-content style="align-items: center">
        <div class= "aboutMe" @click="findPosts(category)">
          {{category.name}}
        </div>
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
    font-size: 32px;
    text-align: center;
    margin-top: 20px;
  }

  .aboutMe {
  &:hover {
     transform: scale(1.1);
   }
    font-size: 25px;
    text-align: center;
    cursor:pointer;
    color: #aaaaaa;
  }
</style>
