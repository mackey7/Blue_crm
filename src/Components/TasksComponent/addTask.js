import React from 'react'

export const AddTask = () => {
    return (
        <section>
            <form >
                <label for="fname">Title:</label>
                <input type="text" id="Title" name="Title" />
                <label for="lname">Description</label>
                <textarea id="w3review" name="w3review" rows="4" cols="50" />
                <input type="submit" value="ADD" />
            </form>
        </section>
    )
}