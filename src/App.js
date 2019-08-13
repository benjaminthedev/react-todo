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


  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
       <h1>To Do List - Get Stuff Done!</h1>
       <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
