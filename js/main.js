const App = {
    data() {
        return {
            date: '',
            addForm: {
                name: '',
                measure: 1,
                portion: 100,
                kcal: 100,
                qty: 1
            },
            diary: [
                {
                    date: 'date',
                    time: '00:11',
                    name: 'Хлебушко',
                    kcal: 350
                },
                {
                    date: 'date',
                    time: '00:12',
                    name: 'Энергетос',
                    kcal: 240
                }
            ]
        }
    }, //data
    methods: {
        add() {
            this.diary.push(this.addForm)
        }
    }, //methods
    computed: {
        addKcal() {
            let kcal = this.addForm.kcal || 0
            let qty = (this.addForm.qty || 0) / 100
            if (this.addForm.measure == 1) {
                qty = this.addForm.qty * this.addForm.portion / 100
            }

            let result = kcal * qty
            return result;
        }
    },
    created() {
        fetch('http://h95313ly.beget.tech/read.php', { mode: 'no-cors' })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    },
}

Vue.createApp(App).mount('#app')
