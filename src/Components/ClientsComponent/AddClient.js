import React from 'react'

export const AddClient = () => {
    return (
        <section>
            <form >
                <label for="Name">Name:</label>
                <input type="text" id="Name" name="Name" />

                <label for="Surname">Surname:</label>
                <input type="text" id="Surname" name="Surname" />


                <label for="Email">Email:</label>
                <input type="text" id="Email" name="Email" />

                <label for="Street">Street:</label>
                <input type="text" id="Street" name="Street" />


                <label for="ZipCode">Zip Code:</label>
                <input type="text" id="ZipCode" name="Zip Code" />

                <label for="Street">City:</label>
                <input type="text" id="Street" name="Street" />






                <input type="submit" value="ADD" />
            </form>
        </section>
    )
}