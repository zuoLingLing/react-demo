import {ADD_ITEM, CHANGE_VALUE, DELETE_ITEM} from './actionType';

export const addItemAction = ()=>{
    return {
        type:ADD_ITEM
    }
},

changeValueAction = (e)=>{
    return {
        type:CHANGE_VALUE,
        value:e.target.value
    }
},

deleteItemAction = (index)=>{
    return{
        type:DELETE_ITEM,
        index:index
    }
}
