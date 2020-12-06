import { stat } from 'fs';
import {ADD_ITEM, CHANGE_VALUE, DELETE_ITEM} from './actionType';
const defaultState = {
    value:'',
    list:[
        'React基础',
        'React-router',
        'Redux'
    ]
}

export default (state = defaultState, action)=>{
    if(action.type == CHANGE_VALUE){
        let newState = {...state};
        newState.value = action.value;
        return newState;
    }else if(action.type == ADD_ITEM){
        let newState = {...state};
        newState.list.push(newState.value);
        newState.value = '';
        return newState;
    }else if(action.type == DELETE_ITEM){
        let newState = {...state};
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}