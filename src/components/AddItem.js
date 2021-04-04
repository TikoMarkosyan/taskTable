import React, { useState, useEffect } from 'react';
import '../style/AddItem.css';
import { connect } from 'react-redux'
import { AddTableItem } from '../redux/actions'

function AddItem({ AddTableItem }) {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(1);

    const sumbit = (event) => {
        event.preventDefault();
        if (name !== "" && name !== undefined) {
            setName("");
            setRating(1);
            AddTableItem({ name: name, rate:rating})
        }
    }
    return (
            <div id="Form">
                <h3 id="h3">Add a new item to the table:</h3>
            <form onSubmit={sumbit}>
                  
                <input id="rowName" value={name}
                    type="text" name="Name" placeholder="add your name"
                        onChange={({ target }) => { setName(target.value) }} />

                    <input id="rowRating" value={rating}
                        type="number" name="Rating" min="1"
                        onChange={({ target }) => { setRating(target.value) }} />
                <input type="submit" value="Add Item" id="btnform" />
                </form>
            </div>
    );
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        AddTableItem: (obj) => dispatch(AddTableItem(obj)),
    };
}

export default connect(null, mapDispatchToProps)(AddItem);

