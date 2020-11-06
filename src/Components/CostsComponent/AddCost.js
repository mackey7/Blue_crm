import React, { useState } from 'react'
import { Wrapper, Form } from '../../Helpers/Styles/CostsComponent/AddCost'
import app from '../../base'

export const AddCost = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')



    function onSubmit(e) {
        e.preventDefault()
        app
            .firestore()
            .collection('costs')
            .add({
                name,
                category,
                amount
            })
            .then(() => {
                setName("")
                setAmount("")
                setCategory("")
            })
    }
    return (
        <Wrapper>
            <Form onSubmit={onSubmit} >
                <label for="name">name:</label>
                <input type="text" id="name" name="name" placeholder="name" value={name} onChange={e => setName(e.currentTarget.value)} />
                <label for="category">category:</label>
                <input type="text" id="category" name="category" placeholder="category" value={category} onChange={e => setCategory(e.currentTarget.value)} />
                <label for="amount">amount:</label>
                <input type="text" id="amount" name="amount" placeholder="amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} />
                <input type="submit" value="ADD" />
            </Form>
        </Wrapper>
    )
}