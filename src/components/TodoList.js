import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }

    this.update = this.update.bind(this)
    this.props.todoContext.subscribe(this.update)
    this.todoListElement = null
  }

  update(todo) {
    this.state.todos = todo
    this.todoListElement.innerHTML = ""

    const ul = document.createElement('ul')
    this.state.todos.forEach(todo => {
      const todoItem = new TodoItem({
        todo,
        todoContext: this.props.todoContext
      }).render()
      ul.appendChild(todoItem)
    })
    this.todoListElement.appendChild(ul)

  }

  render() {
    const todoListElement = document.createElement('div')
    todoListElement.className = "todo-list"
    this.todoListElement = todoListElement


    return todoListElement;
  }
}