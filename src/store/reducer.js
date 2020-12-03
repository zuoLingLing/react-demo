import {CHANGE_VALUE, ADD_ITEM} from './actiontype';
const defaultStatus = {
    inputValue:'',
    list:[
        'React基础',
        'React hooks',
        'Redux'
    ]
}

export default (state=defaultStatus,action)=>{
    if(action.type==CHANGE_VALUE){
        let newState = {...state};
        newState.inputValue = action.value;
        return newState;
    }else if(action.type==ADD_ITEM){
        let newState = {...state};
        newState.list.push(newState.inputValue);
        newState.inputValue = ""
        console.log(newState);
        return newState;
    }
    return state;
}