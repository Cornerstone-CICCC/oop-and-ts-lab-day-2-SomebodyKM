import { Component } from "../common/Component.js";

export class AddTodo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const addElement = document.createElement('div')
    addElement.className = "add-todo"
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `

    const input = addElement.querySelector('#todo-input')
    const btn = addElement.querySelector('#todo-add-btn')

    btn.addEventListener('click', () => {
      const text = input.value.trim()
      if (text) {
        this.props.todoContext.addTodo(text)
        input.value = ""
      }
    })

    return addElement;
  }
}