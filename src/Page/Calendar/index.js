import React from 'react'
import { TopMenuComponent } from '../../Components/TopMenuComponent/index'
import { LeftMenuComponent } from '../../Components/LeftMenu/index'
import { Content, RightSide } from '../../Helpers/Styles/HomePage/index'
import { CalendarComponent } from '../../Components/CalendarComponent'
export const CalendarPage = () => {
    return (

        <div>
            <TopMenuComponent />

            <Content>
                <LeftMenuComponent />
                <RightSide>
                    <CalendarComponent />
                </RightSide>
            </Content>
        </div >
    )
}
