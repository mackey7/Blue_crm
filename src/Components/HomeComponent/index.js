import React, { Fragment } from 'react'
import { CostBox } from './CostBox/costBox'
import { TasksBox } from './TasksBox/TasksBox'
import { DashboardWrapper } from '../../Helpers/Styles/HomePage/index'
export const Dashboard = () => {
    return (
        <DashboardWrapper>

            <CostBox />
            <TasksBox />
        </DashboardWrapper>

    )
}