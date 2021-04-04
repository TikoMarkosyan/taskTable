import * as type from "./types.js";

export const AddTableItem =  obj => {
    return (dispatch) => {
        dispatch({ type: type.ADD_ITEM, playoud: obj });
    }
}

export const DeleteTableItems = (list, remuvelist) => {
    return (dispatch) => {
        const myDeletedArray = list;
        const objDeletedIndex = myDeletedArray.filter(obj =>
            !remuvelist.find(itemToDelete => itemToDelete.tableData.id === obj.tableData.id)
        );
        list = objDeletedIndex;
        dispatch({ type: type.REMOVE_ALL_ITEMS, playoud: list });
    }
}