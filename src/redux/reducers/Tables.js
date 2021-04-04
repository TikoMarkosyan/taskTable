import * as type from "../actions/types";

const initialState = {
    headers: [
        {
            title: 'Name',
            dataIndex: 'name',
            width: 120,
            sorter: false,
        },
        {
            title: 'Rating',
            dataIndex: 'rate',
            width: 120,
            sorter: true,
        }
    ],
    data : []          
}


const Tables = (state = initialState, action) => {
    switch (action.type) {
        case type.ADD_ITEM:
            return {
                ...state,
                data: [...state.data, action.playoud],
            }
        case type.GET_DATA:
            return {
                ...state,
                data: action.playoud
            }
        case type.REMOVE_ALL_ITEMS:
            return {
                ...state,
                data: action.playoud
            }
        default:
            return state
    }
}

export default Tables