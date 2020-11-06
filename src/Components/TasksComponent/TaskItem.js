import React from 'react'
import { Wrapper, Content, DeleteBtn, Row } from '../../Helpers/Styles/TasksComponent/TaskItem'
import app from '../../base'


export const TaskItem = taskstData => {
    function deleteItem(e) {
        app.firestore()
            .collection('tasks')
            .doc(e.target.getAttribute("data-id"))
            .delete()


    }
    return (
        <Wrapper >
            <Row>
                <input type="checkbox" name="task" value="task" />
                <Content>
                    <h4>{taskstData.taskstData.title}</h4>
                    <p>{taskstData.taskstData.description}</p>
                </Content>
            </Row>
            <DeleteBtn data-id={taskstData.taskstData.id} onClick={(e) => deleteItem(e)} className="fa fa-trash" aria-hidden="true"></DeleteBtn>
        </Wrapper >
    )
}