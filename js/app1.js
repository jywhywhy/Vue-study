// 실습 #1 - 'todo-footer' 컴포넌트 전역 등록
// <p>This is another global child component</p>를 template으로 갖는 컴포넌트를 등록해 보세요.

Vue.component("todo-footer", {
    template: "<p>This is another global child component</p>"
});

var cmp = {
    template: "<p>This is another local child component</p>"
};

var app1 = new Vue({
    el: '#app',
    data: {
        message: "This is a parent component"
    },
    // 실습 #2 - 'todo-list' 컴포넌트 지역 등록
    // <p>This is another local child component</p>를 template으로 갖는 컴포넌트를 등록해 보세요.
    components: {
        "todo-list": cmp
    }

});