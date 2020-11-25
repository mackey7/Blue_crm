import React from 'react'
import { AddTaskComponent } from './addTask'
import { TasksList } from './TasksList'

export const TasksComponent = () => {

    return (
        <div>
            <AddTaskComponent />
            < TasksList />
        </div>
    )
}