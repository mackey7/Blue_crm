import React from 'react'
import { Wrapper, Form } from '../../Helpers/Styles/CostsComponent/AddCost'
export const AddCost = () => {
    return (
        <Wrapper>
            <Form >
                <label for="name">name:</label>
                <input type="text" id="name" name="name" placeholder="name" />
                <label for="category">category:</label>
                <input type="text" id="category" name="category" placeholder="category" />
                <label for="amount">amount:</label>
                <input type="text" id="amount" name="amount" placeholder="amount" />
                <input type="submit" value="ADD" />
            </Form>
        </Wrapper>
    )
}