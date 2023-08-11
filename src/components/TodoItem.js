import React, { Component } from 'react';
import "./TodoItem.css";

class TodoItem extends Component {
    render() {
        const {item} = this.props;
        let className = 'todolist'; 
        if(item.isComplete) {
            className += ' todolist-complete';
        }
        return (
            <div className={className}>
                <p>this.props.item.title</p>
            </div>
        );
    }
}

export default TodoItem;