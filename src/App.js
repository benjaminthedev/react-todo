import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Hello world",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Code some react please",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Time to grab a coffee",
        completed: false
      },
      {
        id: uuid.v4(),
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

  //Add To Do 
  addTodo = (title) => {
    //console.log(title);
    const newTodo = {
      id: uuid.v4(),
      title: title, 
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo ]})
  }


  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <h1>To Do List - Get Stuff Done!</h1>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delToDo={this.delToDo} />
            </React.Fragment>
          )} />

          <Route path="/about" component={About} />
        </div> 
        </div>
      </Router>
    );
  }s
}

export default App;
