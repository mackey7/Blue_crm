import React from 'react'
import { TaskItem } from './TaskItem'
import { Wrapper } from '../../Helpers/Styles/TasksComponent/TasksList'


export const TasksList = () => {
    return (
        <Wrapper>
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </Wrapper>
    )
}