import {mixin} from "@/mixin";

export default{

    install(Vue){
        //グローバルフィルターを配置する
        //フィルターを利用したいとでパイプをついてそのため、対応する関数は効いてくる。
        Vue.filter('mySlice',function(value){
            return value.slice(0,2)
        })
        //DIY 指令を作る
        Vue.directive('fbind',{
            bind(element,binding){
                element.value=binding.value;
            },
            inserted(element){
                element.focus()
            },
            update(element,binding){
                element.value=binding.value;
            }
        })
        //Mixinを配置する
        //VC中のJSにあるプロパティはmixinの内容より優先的に処理されました。
        // 以下のはグローバルでプロパティを配置するんです。繰り返しのは出来ます。
        //関数で配置できるのはcomponent、mixinなど
        Vue.mixin(mixin)

        //Prototype方法を定義する(VMにもVCにも適用できる)
        Vue.prototype.hello=()=>(alert('test だけ'))
        console.log('@@@omsta')
    }
}
