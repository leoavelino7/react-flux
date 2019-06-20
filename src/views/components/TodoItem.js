import React, { Component } from "react";

class TodoItem extends Component {
    static defaultProps = {
        item: {},
        onRemove: () => {}
    }

    constructor(props) {
        super(props);

        this.remove = this.remove.bind(this);
    }

    remove() {
        const { props } = this;
        props.onRemove(props.item.id);
    }

    render() {
        const { props } = this,
            { item } = props;

        return (
            <li className="todo-list-item">
                <input className="tw-check" type="checkbox" checked={item.isChecked} />
                <input className="tw-input" type="text" disabled={item.isChecked} defaultValue={item.description} />
                <button className="tw-btn" onClick={this.remove}>X</button>
            </li>
        );
    }
}

export default TodoItem;