

const app = Vue.createApp({
    data(){
        return{
            newTask: '',
            tasks: [
                {
                    text: 'Uccidere il cane',
                    done: false
                },
                {
                    text: 'Sparare al bagnino',
                    done: false  
                },
                {
                    text: 'Picchiare i carramba',
                    done: false  
                },
            ]
                
            
        }
    },
    methods: {
        addTask(){
            if(this.newTask !== ''){
                const newTaskObject = { text: this.newTask, done: false };
                this.tasks.push(newTaskObject)
                this.newTask = '';
            }else{
                alert('Non hai inserito alcun testo')
            }
            
        },
        deleteTask(index){
            this.tasks.splice(index, 1)
        },
        doneTask(task){
            console.log(task)
            task.done = !task.done
        }
    }
})

app.mount("#app")