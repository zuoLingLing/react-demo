import React, { Component } from 'react';
import './App.css';
import store from './store/store';
import {addItemAction, changeValueAction, deleteItemAction} from './store/actionChange'
import TodoListUi from './TodoListUi';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.addItem = this.addItem.bind(this)
        this.changeValue = this.changeValue.bind(this)
        this.changeState = this.changeState.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.changeState)
    }
    render() {
        return (
            <TodoListUi 
                inputValue={this.state.value}
                changeInputValue={this.changeValue}
                clickBtn={this.addItem}
                list={this.state.list}
                deleteItem={this.deleteItem}
            ></TodoListUi>
        );
    }
    addItem(){
        const action = addItemAction()
        store.dispatch(action)
    }
    changeValue(e){
        const action = changeValueAction(e)
        store.dispatch(action)
    }

    changeState(){
        this.setState(store.getState())
    }

    deleteItem(index){
        console.log(index);
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList;