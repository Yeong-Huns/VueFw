Vue.component('child-component', {
    props: ['propsdata'],
    template: '<p>{{propsdata}}</p>'
});

Vue.component('sibling-component', {
    props: ['propsdata'],
    template: '<p>{{propsdata}}</p>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! 부모 parent component에서 왔어! ',
        anotherMessage: 'Hello Vue.js! passed from Parent Component'
}


})