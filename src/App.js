import React, {Component} from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Hello world",
        completed: false
      },
      {
        id: 2,
        title: "Code some react please",
        completed: false
      },
      {
        id: 3,
        title: "Time to grab a coffee",
        completed: false
      },
      {
        id: 4,
        title: "Check on Tesla order",
        completed: false
      }
    ]
  }

//toggle complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  delToDo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }


  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
       <h1>To Do List - Get Stuff Done!</h1>
       <Todos todos={this.state.todos} markComplete={this.markComplete} delToDo={this.delToDo} />
      </div>
    );
  }
}

export default App;
