import React from 'react'
import { ContainerWrapper, Form, AddBtn } from '../../Helpers/Styles/TasksComponent/addTask'
export const AddTask = () => {
    return (
        <ContainerWrapper>
            <Form >
                <label htmlFor="Title">Title:</label>
                <input type="text" id="Title" name="Title" />
                <label htmlFor="Description">Description</label>
                <textarea id="Description" name="Description" rows="4" cols="50" />
                <AddBtn type="submit" value="ADD" />
            </Form>
        </ContainerWrapper>
    )
}