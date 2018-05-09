<template>
 <div align="center">
   <div>
     <router-link to="/" tag="span" class="myName">Bactoria</router-link>
<!--     <div style="font-size: 25px">개발 블로그</div>-->
   </div>
  <img src="~/assets/image/me2.jpg" width="200px" />

  <div class="mu">
     <a class="SNS-icons" :href="icon.link" target="_blank" v-for="icon in icons">
       <img :src="icon.src" width="30px" class="scaleUp"/>
     </a>
  </div>

  </div>

   <!--<div class="aboutMe" @click="aboutMe"> ABOUT ME </div> <br/>-->

</template>

<script>
    export default {
      data () {
        return {
          icons: [{
            "name": "Github", "src" : "/GithubIcon.png", "link" : "https://github.com/bactoria"}, {
            "name": "Facebook", "src" : "/FacebookIcon.jpg", "link" : "https://www.facebook.com/profile.php?id=100003593517742"}
          ]
        }
      },
      methods: {
        aboutMe () {
          this.$router.push('/about-me')
        }
      }
    }
</script>

<style lang="scss" scoped>

  .mu {
    margin-top: 20px;
  }

  .SNS-icons{
    margin-left: 10px;
    margin-right: 10px;
  }

  .aboutMe {
    max-width: 30%;
    margin: 12px;
    transition: .15s all ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    font-size: 25px;
  }

  .myName {
    font-size: 6rem;
    font-family: Bactoria;
    cursor: pointer;
  }

  .asdasd {

    border-bottom: 2px solid #b4e7f8;
    box-shadow: inset 0 -7px 0 #b4e7f8;
    transition: background .15s cubic-bezier(.33,.66,.66,1);

    display: inline;
    color: inherit;
    cursor: pointer;
  }

  .myName2 {
    font-size: 25px;
  }
  .scaleUp {
    &:hover {
      transform: scale(1.15);
    }
  }
</style>
