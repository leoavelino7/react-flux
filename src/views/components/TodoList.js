import React, { Component } from "react";

import TodoItem from "./TodoItem";

class TodoList extends Component {
    static defaultProps = {
        items: []
    }

    render() {
        const { props } = this,
            { items } = props;

        if(items.lenght === 0) {
            return <div>No items</div>
        }

        return (
            <ul className="todo-list">
                {
                    items.map(item => (
                        <TodoItem key={item.id} item={item} />
                    ))
                }
            </ul>
        );
    }
}

export default TodoList;