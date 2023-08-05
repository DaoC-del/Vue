<script >
// import {mixin} from "@/mixin";

export default {
  name:`School`,
  data(){
    return {
      name:`秀知院`,
      address:`東京あるところ`,
    }
  },
  // mixins:{
  //   mixin,
  // }
}
</script>

<template>
  <div class=demo>
  <h2>学校名：{{name}}</h2>
  <h2>年齢：{{address}}</h2>
  <button @click="showSchoolName">学校詳細はこちら</button>
  </div>
</template>

<style>
.demo{
  background-color: orange;
}

</style>