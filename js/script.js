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

            if(this.newTodo =! "" && this.newTodo.lenght > 4){
                this.todos.push({
                    text: this.newTodo,
                    done: false
                })
                this.newTodo= "";
            }
            else{
                this.newTodo= "";
            }

        },

        addDone(){
            this.todos[index] = true;
        }

    },

}).mount('#app');
