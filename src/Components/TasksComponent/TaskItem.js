import React from 'react'
import { Wrapper, Content, DeleteBtn, Row } from '../../Helpers/Styles/TasksComponent/TaskItem'
export const TaskItem = taskstData => {

    return (
        <Wrapper>
            <Row>
                <input type="checkbox" name="task" value="task" />
                <Content>
                    <h4>{taskstData.taskstData.title}</h4>
                    <p>{taskstData.taskstData.description}</p>
                </Content>
            </Row>
            <DeleteBtn className="fa fa-trash" aria-hidden="true"></DeleteBtn>
        </Wrapper>
    )
}