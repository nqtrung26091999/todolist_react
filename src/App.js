import './App.css';
import TodoItem from './components/TodoItem';
import React, { Component } from 'react';
import CheckedAll from './icons/down-arrow.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoList: [
        { title: "Java - Back-end", isComplete: true },
        { title: "Javascript" },
        { title: "PHP - Back-end" }
      ]
    }

    this.onEnterEvent = this.onEnterEvent.bind(this);
    this.onChangeKey = this.onChangeKey.bind(this);
  }

  onClickItem(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoList } = this.state;
      const index = todoList.indexOf(item);

      this.setState({
        todoList: [
          ...todoList.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoList.slice(index + 1)
        ]
      });

    }
  }

  onEnterEvent(event) {
    let text = event.target.value;
    if(event.keyCode === 13) { // enter key
      if(!text) {
        return;
      }
      text = text.trim();
      if(!text) {
        return;
      }
  
      this.setState({
        newItem:'',
        todoList: [
          { title: text, isComplete: false },
          ...this.state.todoList
        ]
      });
    }
  }

  onChangeKey(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  render() {
    const { todoList, newItem } = this.state;
    return (
      <div className="App">
          <div className='Header'>
            <img src={CheckedAll}/>
            <input 
              placeholder='Add a item'
              value={newItem}
              onChange={this.onChangeKey}
              onKeyUp={this.onEnterEvent}/>
          </div>
          { todoList.length && todoList.map((item, index) =>
            <TodoItem
              key={index}
              item={item}
              onClick={this.onClickItem(item)} />)}
          { todoList.length === 0 && 'Nothing here' }
      </div>
    );
  }
}

export default App;
