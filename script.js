Vue.createApp({
    data(){
        return{
            text:"Counter",
            count: 0,
        };
    }, // в дате распалагаються переменные

    methods: {
        add(){
            console.log('Plus')
            this.count++
        },

        subtract(){
            console.log('Minus')
            this.count--
        }
    }
}).mount('#app'); //монтируем по id в html