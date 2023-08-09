// 할 일 #1
// sibling-component를 이름으로 하는 새로운 컴포넌트를 아래에 등록해 보세요.
// options : template, props
Vue.component("sibling-component", {
    template: "<p>{{ propsdata2 }}</p>",
    props: ["propsdata2"]
})

Vue.component("child-component", {
    props: ["propsdata"],
    template: "<p>{{ propsdata }}</p>"
});

var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue! passed from Parent Component",
        anotherMessage: "임의의 문자열"
        // 할 일 #2
        // data 속성을 1개 더 지정하고 (예: anotherMessage) 임의의 문자열을 값으로 대입해 보세요.
        // 새로 지정한 data 속성은 위 sibling-component에 props로 전달합니다.
    }
})