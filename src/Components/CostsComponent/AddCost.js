import React from 'react'

export const AddCost = () => {
    return (
        <div>
            <form >
                <label for="name">name:</label>
                <input type="text" id="name" name="name" />
                <label for="category">category:</label>
                <input type="text" id="category" name="category" />
                <label for="category">category:</label>
                <input type="text" id="category" name="category" />
                <label for="amount">amount:</label>
                <input type="text" id="amount" name="amount" />
                <input type="submit" value="ADD" />
            </form>
        </div>
    )
}