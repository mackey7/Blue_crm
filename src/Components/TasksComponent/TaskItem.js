import React from 'react'
import { Wrapper, Content, DeleteBtn, Row } from '../../Helpers/Styles/TasksComponent/TaskItem'
import { DeleteTask, FetchTasks } from "../../Actions/TasksActions";
import { useDispatch } from 'react-redux'

export const TaskItem = taskstData => {
    const dispatch = useDispatch();
    const createDeleteTaskAction = (id) => dispatch(DeleteTask(id));


    async function deleteItem(e) {
        e.preventDefault()
        let id =
            e.target.getAttribute("data-id");
        await createDeleteTaskAction(id);
        await dispatch(FetchTasks())
    }



    return (
        <Wrapper isDone={taskstData.taskstData.isDone} >
            <Row>
                <input data-id={taskstData.taskstData.id} type="checkbox" />
                <Content>
                    <h4>{taskstData.taskstData.title}</h4>
                    <p>{taskstData.taskstData.description}</p>
                </Content>
            </Row>
            <DeleteBtn data-id={taskstData.taskstData.id} onClick={(e) => deleteItem(e)} className="fa fa-trash" aria-hidden="true"></DeleteBtn>
        </Wrapper >
    )
}