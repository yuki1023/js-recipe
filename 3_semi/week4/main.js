new Vue({
    el: "#app",
    data:{
        count:0,
    },
    methods:{
        countUp: function() {
            // this は自分が定義したものが全部入ったオブジェクト
            this.count += 1
        },
    },
})