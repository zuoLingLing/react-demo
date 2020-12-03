import React, { Component } from 'react';
import './App.css';
import { Button, Input, List } from 'antd';
import store from './store/index';
import {changeInputAction, addItemAction} from './store/actionCreators'

// class TodoList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = store.getState()
//         this.changeValue = this.changeValue.bind(this)
//         this.storeChange = this.storeChange.bind(this)
//         this.clickMe = this.clickMe.bind(this)
//         store.subscribe(this.storeChange)
//     }
//     render() { 
//         return ( 
//             <div style={{margin:'20px'}}>
//             <div>
//                 <Input  
//                     placeholder={this.state.inputValue} 
//                     style={{marginRight:'10px',width:'300px'}}
//                     onChange={this.changeValue}
//                     value={this.state.inputValue}
//                 />
//                 <Button type='primary'
//                     onClick={this.clickMe}
//                 >
//                     新增
//                 </Button>
//             </div>
//             <div style={{margin:'10px',width:'300px'}}>
//                 <List
//                     bordered
//                     dataSource={this.state.list}
//                     renderItem={(item,index)=>
//                         <List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>
//                     }
//                 />
//             </div>
//         </div>
//          );
//     }
//     changeValue(e){
//         const action = {
//             type: 'inputChange',
//             value: e.target.value
//         }
//         store.dispatch(action)
//     }

//     storeChange(){
//         this.setState(store.getState())
//     }

//     clickMe(){
//         const action = {
//             type: 'addItem'
//         }
//         store.dispatch(action)
//     }

//     deleteItem(index){
//         const action = {
//             type:'deleteItem',
//             value:index
//         }
//         store.dispatch(action)
//     }
// }

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.addItem = this.addItem.bind(this)
        this.changeState = this.changeState.bind(this)
        this.changeValue = this.changeValue.bind(this)
        store.subscribe(this.changeState)
    }
    render() { 
        return ( 
            <div style={{margin:'20px'}}>
                <div>
                    <Input placeholder='请输入' style={{width:'260px',marginRight:'10px'}} value={this.state.inputValue} onChange={this.changeValue}/>
                    <Button type='primary' onClick={this.addItem}>新增</Button>
                </div>
                <div style={{marginTop:'20px',width:'260px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </div>
            </div>
         );
    }

    addItem(e){
        const action = addItemAction()
        store.dispatch(action)

    }
    changeState(){
        this.setState(store.getState())
    }
    changeValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
}
 
export default TodoList;