import React from 'react'
import { TopMenuComponent } from '../../Components/TopMenuComponent/index'
import { LeftMenuComponent } from '../../Components/LeftMenu/index'
import { Content, RightSide } from '../../Helpers/Styles/HomePage/index'
import { TasksComponent } from '../../Components/TasksComponent'

export const TasksPage = () => {
    return (
        <div>
            <TopMenuComponent />

            <Content>
                <LeftMenuComponent />
                <RightSide>
                    <TasksComponent />
                </RightSide>
            </Content>
        </div >

    )
}