new Vue({     // 인스턴스
    el: '#app',         // el 속성
    data: {             // data 속성
        message: "Hello world!"
    },
    beforeCreate: function() {
        console.log("beforeCreate");
    },
    created: function() {
        console.log("created");
    },
    mounted: function () {
        console.log("mounted");
        this.message = "Hello Vue!";    // message값 변경, update를 호출하기 위함
    },
    updated: function () {
        console.log("updated");
    }
})