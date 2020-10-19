import React from 'react'
import { Wrapper, Content, DeleteBtn, Row } from '../../Helpers/Styles/TasksComponent/TaskItem'
export const TaskItem = () => {
    return (
        <Wrapper>
            <Row>
                <input type="checkbox" name="task" value="task" />


                <Content>
                    <h4>Tytuł taska</h4>
                    <p>Opis taska</p>
                </Content>
            </Row>
            <DeleteBtn className="fa fa-trash" aria-hidden="true"></DeleteBtn>
        </Wrapper>
    )
}