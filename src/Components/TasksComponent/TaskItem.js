import React from 'react'
import { Wrapper, Content } from '../../Helpers/Styles/TasksComponent/TaskItem'
export const TaskItem = () => {
    return (
        <Wrapper>

            <input type="checkbox" name="task" value="task" />


            <Content>
                <h4>Tytuł taska</h4>
                <p>Opis taska</p>
            </Content>
        </Wrapper>
    )
}