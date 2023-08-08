export const mixin={
    data(){
        return {
            x:100,
            y:200
        }
    },
    methods:{
        showSchoolName() {
            alert(this.address+`の`+this.name)
        }
    }
}