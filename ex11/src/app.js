//이벤트 버스를 위한 추가 인스턴스 생성
var eventBus = new Vue();

//이벤트를 보내는 컴포넌트
Vue.component('child-component', {
    template: '<div>' +
        '하위 컴포넌트 영역입니다.' +
        '<button v-on:click="showLog">show</button>' +
        '</div>',
    //버튼을 클릭하면 showLog 함수 실행
    methods: {
        showLog: function () {
            eventBus.$emit('triggerEventBus', 100); //triggerEventBus 이벤트 실행 + data(100)
        }
    }
});

var app = new Vue({
    el: '#app',
    created: function (){
        eventBus.$on('triggerEventBus', function(value){
            console.log("이벤트를 전달받음. 전달받은 값 : ", value);
        });
    }
});