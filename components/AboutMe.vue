<template>
 <div align="center">
   <div  class="hidden-sm-and-down">
     <a href="/" tag="span" class="myName GodoB">Bactoria</a>
     <router-link to="/">beta</router-link>
<!--     <div style="font-size: 25px">개발 블로그</div>-->
   </div>
   <div class="hidden-md-and-up GodoB myName2">Bactoria</div>
   <img src="/me2.jpg" width="200px" class="hidden-sm-and-down"/>
   <img src="/me2.jpg" width="130px" class="hidden-md-and-up "/>

  <div class="mu">
     <a class="SNS-icons" :href="icon.link" target="_blank" v-for="icon in icons">
       <img :src="icon.src" width="30px" class="scaleUp"/>
     </a>

  </div>

   <!--<div class="aboutMe" @click="aboutMe"> ABOUT ME </div> <br/>-->
 </div>
</template>

<script>
    export default {
      data() {
        return {
          icons: [{
            "name": "Github", "src": "/GithubIcon.png", "link": "https://github.com/bactoria"
          }, {
            "name": "Facebook",
            "src": "/FacebookIcon.jpg",
            "link": "https://www.facebook.com/profile.php?id=100003593517742"
          }
          ]
        }
      },
      methods: {
        aboutMe() {
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
    font-size: 60px;
    cursor: pointer;
    color: black;
  }
  .myName2 {
    font-size: 30px;
    margin-top: 50px;
    margin-bottom: 5px;
  }

  .asdasd {

    border-bottom: 2px solid #b4e7f8;
    box-shadow: inset 0 -7px 0 #b4e7f8;
    transition: background .15s cubic-bezier(.33,.66,.66,1);

    display: inline;
    color: inherit;
    cursor: pointer;
  }

  .scaleUp {
    &:hover {
      transform: scale(1.15);
    }
  }
</style>
