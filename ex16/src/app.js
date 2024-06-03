var Header = {template: '<h1>이것은 헤더입니다.</h1>'};
var Body = {template: '<h1>이것은 바디입니다.</h1>'};
var Footer = {template: '<h1>이것은 푸터입니다.</h1>'}

var LoginHeader = {template: '<h1>이것은 로그인 헤더입니다.</h1>'};
var LoginBody = {template: '<h1>이것은 로그인 바디입니다. </h1>'};
var LoginFooter = {template: '<h1>이것은 로그인 푸터입니다.</h1>'};

var router = new VueRouter({
   routes: [
       {
           path: '/',
           components: {
               default: Body,
               header: Header,
               footer: Footer
           }
       },
       {
           path: '/login',
           components: {
               default: LoginBody,
               header: LoginHeader,
               footer: LoginFooter
           }
       }
   ]
});

var app = new Vue({
    router
}).$mount('#app');