import React, { Fragment } from 'react'
import { CostBox } from './CostBox/costBox'
import { TasksBox } from './TasksBox/TasksBox'
export const Dashboard = () => {
    return (
        <Fragment>

            <CostBox />
            <TasksBox />
        </Fragment>

    )
}