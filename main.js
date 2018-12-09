var app = new Vue({
    el: '#app',
    data: {
        todo: null,
        todos: [
            { title: 'Learn the basics of Vue', done: false }
        ],
        filters: [ 'All', 'Todo', 'Done' ],
        selectedFilter: 'All'
    },
    methods: {
        addTodo() {
            if (!this.todo) return;

            this.todos.push({
                title: this.todo,
                done: false
            });

            this.todo = null;
        }
    },
    computed: {
        remaining() {
            return this.todos.filter(todo => !todo.done).length;
        },
        filteredTodos() {
            if (this.selectedFilter === 'All') {
                return this.todos;
            }

            if (this.selectedFilter === 'Todo') {
                return this.todos.filter(todo => !todo.done);
            }

            if (this.selectedFilter === 'Done') {
                return this.todos.filter(todo => todo.done);
            }
        }
    }
});