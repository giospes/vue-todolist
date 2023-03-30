

const app = Vue.createApp({
    data(){
        return{
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
    }
})

app.mount("#app")