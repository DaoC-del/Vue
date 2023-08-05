<script >
// export default を使用して Vue コンポーネントのオプションオブジェクトをエクスポートしています。オプションオブジェクトには以下が含まれます：
// name：コンポーネントの名前。開発中には必須ではありませんが、再帰的なコンポーネントや Vue Devtools のデバッグなどの場合に、コンポーネントの名前を指定すると便利です。
// data()：コンポーネントのデータ。これは関数であり、コンポーネントのデータを含むオブジェクトを返します。
// props：コンポーネントのプロパティ。これはオブジェクトであり、コンポーネントが受け取る外部のプロパティを定義し、プロパティを検証します。
// methods：コンポーネントのメソッド。これはオブジェクトであり、コンポーネント内で呼び出せるメソッドを含みます。
// 上記の他にも、computed、watch、created、mounted などの他のオプションも
// import {mixin} from "@/mixin";
export default {
  name:`Student`,
  data(){
    return {
      name:`四宮輝夜`,
      age:`15`,
    }
  },
  // props:[`sex`,`wage`]
  props:{
    sex:{
      // required かつ特定Typeを設定されたら、もし該当属性は転送されないまた
      // データタイプが違う場合、該当値は処理されるが、「Vue warn」がコンソールに表示されます。
      type:String,
      required:true,
      default: "fm"
    },
    wage:{
      type:Number,
      default:999,
    },
    position:{
      type:String,
    }
  },
}
</script>

<template>
  <div>
    <h2>生徒名：{{name}}</h2>
    <h2>年齢：{{age}}</h2>
    <h2>性別：{{sex}}</h2>
    <h2>給料：{{wage+1111}}</h2>
    <h2>職種：{{position}}</h2>
  </div>
</template>

<style>


</style>