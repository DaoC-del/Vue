<!--<template>-->
<!--  <div id="app">-->
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  </div>-->
<!--</template>-->
<template>
  <div id="app">
    <School/>
<!--    <Student sex="女性" :wage="10000+1111"/>-->
<!--    <Student sex="女性" :wage="10000+1111" position="会長"/>-->
<!--    <Student  :wage=10000+1 position="会長"/>-->
<!--    <Student sex="m" :wage=10000+1 position="会長"/>-->
<!--    <hr>-->
<!--    該当属性の前に「:」付いたら、値は「JS式」として転送されます-->
    <Student  :wage=10000+1 position="会長" sex="fm"/>
    <hr>
    <Student sex="m"  position="会長"/>
    <hr>
    <Student :sex=85  position="会長"/>
<!--    <Student sex="女性" wage="10000+1111"/>-->
    <button @click="vm_check">こちら</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
  import School from './components/School.vue'
  import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    School,
    Student,
  },
  methods:{
    vm_check(){
      console.log(this);
    },
  }
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  //color: #2c3e50;
  //margin-top: 60px;
}
</style>
