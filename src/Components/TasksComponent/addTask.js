import React from 'react'
import { ContainerWrapper, Form, AddBtn } from '../../Helpers/Styles/TasksComponent/addTask'
export const AddTask = () => {
    return (
        <ContainerWrapper>
            <Form >
                <label for="fname">Title:</label>
                <input type="text" id="Title" name="Title" />
                <label for="lname">Description</label>
                <textarea id="w3review" name="w3review" rows="4" cols="50" />
                <AddBtn type="submit" value="ADD" />
            </Form>
        </ContainerWrapper>
    )
}