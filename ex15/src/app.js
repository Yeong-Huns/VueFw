var Body = {template: '<h1>This is Body</h1>'};
var Header = {template: '<h1>This is Header</h1>'};
var Footer = {template: '<h1>This is Footer</h1>'};

var router = new VueRouter({
    routes: [
        {
            path: '/',
            components: {
                default: Body,
                header: Header,
                footer: Footer
            }
        }
    ]
});

var app = new Vue({
   router
}).$mount('#app');