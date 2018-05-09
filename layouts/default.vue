<template>

  <v-app id="app">
    <v-toolbar dark class="hidden-md-and-up" >
      <v-toolbar-side-icon
        @click.native.stop = "sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title >
        <router-link to="/" tag="span" style="cursor: pointer">Bactoria</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>


      </v-toolbar-items>
    </v-toolbar>

   <!-- <v-progress-linear :indeterminate="true"></v-progress-linear>-->
    <main>
      <v-content>
        <section id="spacer">
         <!-- <img src="../assets/image/main_top.jpg" width="100%"></img>-->
        </section>

        <section>
          <v-layout row wrap>

            <!-- 왼쪽 -->
            <v-flex sm3 class="hidden-sm-and-down">

              <!-- 왼쪽 메뉴 -->
              <left-menu/>

            </v-flex>

            <v-flex sm1 class="hidden-md-and-up"/>

            <!-- 본문 -->
            <v-flex sm10 md9>

              <!-- 라우팅 -->
              <nuxt />

            </v-flex>

            <!-- 오른쪽 없어짐ㅋ-->
            <v-flex sm1 class="hidden-md-and-up"/>

          </v-layout>
        </section>
      </v-content>

    </main>


  </v-app>
</template>

<script>
import Category from '~/components/Category'
import AboutMe from '~/components/AboutMe'
import LeftMenu from "../components/LeftMenu";

  export default {
    data () {
      return {
        sideNav: false,
        smile: false,
        checked: 'asd',
        iid: '4',
        unchecked: 'qwe',
        itsreal: 'real'

      }
    },
    components: {
      LeftMenu,
      Category, AboutMe
    }
  }
</script>


<style scoped>

  #spacer {
    height: 10%;
  }

</style>
