

const app = Vue.createApp({
    data(){
        return{
            newTask: '',
            tasks: [
                {
                    text: 'Uccidere il cane',
                    done: 'False'
                },
                {
                    text: 'Sparare al bagnino',
                    done: 'False'  
                },
                {
                    text: 'Picchiare i carramba',
                    done: 'False'  
                },
            ]
                
            
        }
    },
    methods: {
        addTask(){
            const newTaskObject = { text: this.newTask, done: false };
            this.tasks.push(newTaskObject)
            this.newTask = '';
        }
    }
})

app.mount("#app")