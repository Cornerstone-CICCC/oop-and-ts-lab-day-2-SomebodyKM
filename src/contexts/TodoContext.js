export class TodoContext {
    constructor() {
        this.todos = []
        this.listeners = []
    }

    getTodos() {
        return this.todos
    }

    subscribe(listener) {
        this.listeners.push(listener)
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener(this.todos))
    }

    addTodo(text) {
        const todo = {
            id: this.todos.length + 1,
            text,
            completed: false
        }
        this.todos.push(todo)
        this.notifyListeners()
        console.log(this.todos)
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
        this.notifyListeners()
    }

    updateTodo(id) {
        const todo = this.todos.find(todo => todo.id === id)
        if (todo) todo.completed = !todo.completed
        this.notifyListeners()
    }

}