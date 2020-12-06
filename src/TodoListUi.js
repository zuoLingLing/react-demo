import React,{Component} from 'react';
import { Button, Input, List } from 'antd';
class TodoListUi extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{ margin: '20px' }}>
                <div>
                    <Input value={this.props.inputValue} style={{width:'260px',marginRight:'10px'}} onChange={this.props.changeInputValue}/>
                    <Button onClick={this.props.clickBtn}>新增</Button>
                </div>
                <div style={{width:'260px',marginTop:'10px'}}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item,index) => <List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>}
                    />
                </div>
            </div>
         );
    }
}
 
export default TodoListUi;