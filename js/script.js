const { createApp } = Vue;

createApp({

    data() {
        return {

            newTodo: "",

            todos: [
                {
                    text: 'Fare i compiti',
                    done: true
                },
                {
                    text: 'Fare la spesa',
                    done: false
                }
            ]
        };
    },

    methods: {
        
        checkDone: function (todo){
            if(todo.done){
                return 'done';
            }
            else {
                return "";
            }
        },

        removeTodo(index){
            this.todos.splice(index, 1)
        },

        addTodo(){
            this.todos.push({
                text: this.newTodo,
                done: false
            })
            this.newTodo= "";
        },

    },

}).mount('#app');
