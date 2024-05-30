Vue.component("child-component", {
    props: ["propsData"],
    template: "<p>{{ propsData }}</p>"
});


var app = new Vue({
    el: "#app",
    data: {
        message: "안녕 뷰! 이 메세지는 부모 컴포넌트로 부터 왔어!"
    }
});

