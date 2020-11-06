import React, { useState } from 'react'
import { ContainerWrapper, Form, AddBtn } from '../../Helpers/Styles/TasksComponent/addTask'
import app from '../../base'
export const AddTask = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    function onSubmit(e) {
        e.preventDefault()
        app
            .firestore()
            .collection('tasks')
            .add({
                title,
                description,
                isDone: false
            })
            .then(() => {
                setTitle('')
                setDescription('')
            })
    }

    return (
        <ContainerWrapper>
            <Form onSubmit={onSubmit}>
                <label htmlFor="Title">Title:</label>
                <input type="text" id="Title" name="Title" value={title} onChange={e => setTitle(e.currentTarget.value)} />
                <label htmlFor="Description">Description</label>
                <textarea id="Description" name="Description" rows="4" cols="50" value={description} onChange={e => setDescription(e.currentTarget.value)} />
                <AddBtn type="submit" value="ADD" />
            </Form>
        </ContainerWrapper>
    )
}