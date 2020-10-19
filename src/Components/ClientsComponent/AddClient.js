import React from 'react'
import { ComponentWrapper, FormWrapper, Col, AddBtn } from '../../Helpers/Styles/ClientsComponent/AddClient'
export const AddClient = () => {
    return (
        <ComponentWrapper>
            <form >
                <FormWrapper>
                    <Col>
                        <label for="Name">Name:</label>
                        <input type="text" id="Name" name="Name" />

                        <label for="Surname">Surname:</label>
                        <input type="text" id="Surname" name="Surname" />
                    </Col>
                    <Col>
                        <label for="Email">Email:</label>
                        <input type="text" id="Email" name="Email" />

                        <label for="Street">Street:</label>
                        <input type="text" id="Street" name="Street" />
                    </Col>
                    <Col>
                        <label for="ZipCode">Zip Code:</label>
                        <input type="text" id="ZipCode" name="Zip Code" />

                        <label for="Street">City:</label>
                        <input type="text" id="Street" name="Street" />
                    </Col>

                </FormWrapper>



                <AddBtn type="submit" value="ADD" />
            </form>
        </ComponentWrapper>
    )
}