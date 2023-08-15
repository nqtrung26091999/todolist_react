import React, { Component } from 'react';
import "./TodoItem.css";
import checkIcon from "../icons/check.png";
import checkCompleteIcon from "../icons/oval.png";

class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let className = 'todolist'; 
        if(item.isComplete) {
            className += ' todolist-complete';
        }
        let url = checkCompleteIcon;
        if(item.isComplete) {
            url = checkIcon;
        }
        return (
            <div className={className}>
                <img src = { url } onClick={onClick}/>
                <p>{ this.props.item.title }</p>
            </div>
        );
    }
}

export default TodoItem;