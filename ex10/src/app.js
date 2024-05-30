Vue.component("child-component", {
    template: "<button v-on:click='showLog'>show</button>",
    methods: {
        showLog: function (){
            this.$emit('show-log');
        }
    }
});

var app = new Vue({
    el: "#app",
    data: {
        message: "안녕 뷰 ! 상위 컴포넌트로 부터 왔어"
    },
    methods: {
        printText: function (){
            console.log("이벤트 발생!")
        }
    }
})