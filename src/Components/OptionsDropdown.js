
import React from 'react';

const OptionsDropdown = ({ BookDetails: Book, ChangeBookChelf }) => {

    const UpdateShelf = (event) => {
        ChangeBookChelf(Book, event.target.value)
    };
    
    return (
        <div className="book-shelf-changer options-dropdown">
            <select onChange={UpdateShelf} value={Book.shelf ? Book.shelf : "none"}>
                
                <option value="" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option> 
            </select>
        </div>
    )
}
export default OptionsDropdown;