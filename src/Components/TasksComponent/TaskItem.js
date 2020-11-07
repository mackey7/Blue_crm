import React, { useState } from 'react'
import { Wrapper, Content, DeleteBtn, Row } from '../../Helpers/Styles/TasksComponent/TaskItem'
import app from '../../base'


export const TaskItem = taskstData => {

    const [taskStatus, setTaskStatus] = useState(false)
    // console.log(taskStatus)
    function deleteItem(e) {
        app.firestore()
            .collection('tasks')
            .doc(e.target.getAttribute("data-id"))
            .delete()
    }

    function updateItem(e) {
        app.
            firestore()
            .collection("tasks")
            .doc(e.target.getAttribute("data-id"))
            .update({ isDone: e.target.checked });


    }

    return (
        <Wrapper isDone={taskstData.taskstData.isDone} >
            <Row>
                <input data-id={taskstData.taskstData.id} type="checkbox" onChange={e => updateItem(e)} />
                <Content>
                    <h4>{taskstData.taskstData.title}</h4>
                    <p>{taskstData.taskstData.description}</p>
                </Content>
            </Row>
            <DeleteBtn data-id={taskstData.taskstData.id} onClick={(e) => deleteItem(e)} className="fa fa-trash" aria-hidden="true"></DeleteBtn>
        </Wrapper >
    )
}