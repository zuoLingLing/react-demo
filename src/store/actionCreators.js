import { CHANGE_VALUE, ADD_ITEM } from './actiontype';

export const changeInputAction = (value) => (
    {
        type: CHANGE_VALUE,
        value
    }
),

    addItemAction = () => (
        {
            type: ADD_ITEM
        }
    );