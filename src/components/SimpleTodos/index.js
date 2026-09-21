import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

class SimpleTodos extends Component {
  state = {
    todosList: [
      {
        id: 1,
        title: 'Book the ticket for today evening',
      },
      {
        id: 2,
        title: 'Rent the movie for tomorrow movie night',
      },
      {
        id: 3,
        title: 'Confirm the slot for the yoga session tomorrow morning',
      },
      {
        id: 4,
        title: 'Drop the parcel at Bloomingdale',
      },
      {
        id: 5,
        title: 'Order fruits on Big Basket',
      },
      {
        id: 6,
        title: 'Fix the production issue',
      },
      {
        id: 7,
        title: 'Confirm my slot for Saturday Night',
      },
      {
        id: 8,
        title: 'Get essentials for Sunday car wash',
      },
    ],
    newTodoTitle: '',
    newTodoCount: 1,
  }

  // Write your code here
  handleAddTodo = () => {
    const {newTodoTitle, newTodoCount} = this.state
    const newTodos = Array.from({length: newTodoCount}, (_, i) => ({
      id: Date.now() + i,
      title: newTodoTitle,
      completed: false,
    }))
    this.setState(prevState => ({
      todosList: [...prevState.todosList, ...newTodos],
      newTodoTitle: '',
      newTodoCount: 1,
    }))
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  deleteTodo = id => {
    const {todoList} = this.state
    const updatedTodoList = todoList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todoList: updatedTodoList})
  }

  toggleCompelete = id => {
    const {todosList} = this.state
    const updatedTodoList = todosList.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    this.setState({todosList: updatedTodoList})
  }

  render() {
    const {todoList, newTodoTitle, newTodoCount} = this.state
    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-todo">
            <input
              type="text"
              name="newTodoTitle"
              value={newTodoTitle}
              onChange={this.handleChange}
              placeholder="Enter todo title"
            />
            <input
              type="number"
              name="newTodoCount"
              value={newTodoCount}
              onChange={this.handleChange}
              placeholder="Enter number of todos"
            />
            <button onClick={this.handleAddTodo} type="button">
              Add
            </button>
          </div>
          <ul className="todos-list">
            {todoList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                toggleCompelete={this.toggleCompelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
