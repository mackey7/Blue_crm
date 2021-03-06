import React, { useState } from 'react'
import { ComponentWrapper, FormWrapper, Col, AddBtn } from '../../Helpers/Styles/ClientsComponent/AddClient'
import { useDispatch } from "react-redux";
import { AddClient } from "../../Actions/ClientsActions";

export const AddClientComponent = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [street, setStreet] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [city, setCity] = useState('')

    const dispatch = useDispatch();
    const createClientAction = (client) => dispatch(AddClient(client));

    const onSubmit = async (e) => {
        e.preventDefault()
        let client = {
            name, surname, email, street, zipCode, city
        }
        await createClientAction(client)
        setName('')
        setSurname('')
        setEmail('')
        setStreet('')
        setZipCode('')
        setCity('')

    }

    return (
        <ComponentWrapper>
            <form onSubmit={onSubmit} >
                <FormWrapper>
                    <Col>
                        <label for="Name">Name:</label>
                        <input type="text" id="Name" name="Name" value={name} onChange={e => setName(e.currentTarget.value)} />

                        <label for="Surname">Surname:</label>
                        <input type="text" id="Surname" name="Surname" value={surname} onChange={e => setSurname(e.currentTarget.value)} />
                    </Col>
                    <Col>
                        <label for="Email">Email:</label>
                        <input type="text" id="Email" name="Email" value={email} onChange={e => setEmail(e.currentTarget.value)} />

                        <label for="Street">Street:</label>
                        <input type="text" id="Street" name="Street" value={street} onChange={e => setStreet(e.currentTarget.value)} />
                    </Col>
                    <Col>
                        <label for="ZipCode">Zip Code:</label>
                        <input type="text" id="ZipCode" name="Zip Code" value={zipCode} onChange={e => setZipCode(e.currentTarget.value)} />

                        <label for="Street">City:</label>
                        <input type="text" id="Street" name="Street" value={city} onChange={e => setCity(e.currentTarget.value)} />
                    </Col>

                </FormWrapper>



                <AddBtn type="submit" value="ADD" />
            </form>
        </ComponentWrapper>
    )
}