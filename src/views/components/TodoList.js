import React, { Component } from "react";

import TodoItem from "./TodoItem";

class TodoList extends Component {
    static defaultProps = {
        items: [],
        onRemove: () => {}
    }

    constructor(props) {
        super(props);

        this.remove = this.remove.bind(this);
    }

    remove(id) {
        const { props } = this;
        props.onRemove(id);
    }

    render() {
        const { props } = this,
            { items } = props;

        if(items.length === 0) {
            return <div>No items</div>
        }

        return (
            <ul className="todo-list">
                {
                    items.map(item => (
                        <TodoItem key={item.id} item={item} onRemove={this.remove} />
                    ))
                }
            </ul>
        );
    }
}

export default TodoList;