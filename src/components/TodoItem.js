import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item"
    if (this.props.todo.completed) {
      todoElement.classList.add('completed')
    }

    todoElement.innerHTML = `
    <span>${this.props.todo.text}</span>
    <div class="wrapper">
      <button class="toggle-btn">${this.props.todo.completed ? "Mark Incomplete" : "Mark Complete"}</button>
      <button class="delete-btn">Delete</button>
    </div>
    `

    todoElement.querySelector('.toggle-btn').addEventListener('click', () => {
      this.props.todoContext.updateTodo(this.props.todo.id)
    })

    todoElement.querySelector('.delete-btn').addEventListener('click', () => {
      this.props.todoContext.deleteTodo(this.props.todo.id)
    })

    return todoElement;
  }
}