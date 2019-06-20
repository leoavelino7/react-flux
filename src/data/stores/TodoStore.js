import {
    TodoService
} from "./data/services/TodoService";

let _todoList = [];

function createItem(description) {
    return TodoService.create({
            description,
            isChecked: false
        })
        .then(newItem => _todoList.push(newItem));
}

function updateItem(newItem) {
    const itemIndex = _todoList.findIndex(item => item.id === newItem.id);

    _todoList[itemIndex] = newItem;
    return TodoService.update(newItem);
}

function removeItem(id) {
    const itemIndex = _todoList.findIndex(item => item.id === id);

    _todoList.splice(itemIndex, 1);

    return TodoService.remove(id);
}

function clearAll() {
    const todo = [],
        done = [];

    _todoList.forEach(item => {
        (item.isChecked) ? done.push(item): todo.push(item);
    });

    done.forEach(item => removeItem(item.id));
    return _todoList = todo;
}