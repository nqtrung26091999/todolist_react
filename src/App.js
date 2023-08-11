import './App.css';
import TodoItem from './components/TodoItem';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.title = [
      // { title: "Java", isComplete: true },
      // { title: "Javascript" },
      // { title: "PHP" }
    ];
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.title.length > 0 && this.title.map((item, index) => <TodoItem key={index}  item={item} />)}
          {this.title.length === 0 && 'Nothing here'}
        </header>
      </div>
    );
  }
}

export default App;
