var comp = {
    template : "<p>이것은 지역 컴포넌트입니다.</p>"
}

Vue.component("todo-footer", {
    template: "<p>이것은 전역 컴포넌트입니다.</p>"
});

var test = new Vue({
    el: "#app",
    data: {
        message : "이건 부모 컴포넌트"
    },
    components : {
        "todo-list" : comp
    }
});