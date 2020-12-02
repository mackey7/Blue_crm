import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { AddTask, FetchTasks } from "../../Actions/TasksActions";
import { ContainerWrapper, Form, AddBtn } from '../../Helpers/Styles/TasksComponent/addTask'

export const AddTaskComponent = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const dispatch = useDispatch();
    const createTaskAction = (task) => dispatch(AddTask(task));

    const onSubmit = async (e) => {
        e.preventDefault()
        let task = {
            title, description, isDone: false
        }
        await createTaskAction(task)
        setTitle('')
        setDescription('')
        await dispatch(FetchTasks());
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