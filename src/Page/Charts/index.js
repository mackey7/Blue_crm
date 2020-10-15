import React from 'react'
import { TopMenuComponent } from '../../Components/TopMenuComponent/index'
import { LeftMenuComponent } from '../../Components/LeftMenu/index'
import { Content, RightSide } from '../../Helpers/Styles/HomePage/index'

export const ChartsPage = () => {

    return (
        <div>
            <TopMenuComponent />

            <Content>
                <LeftMenuComponent />
                <RightSide>
                    Charts
                </RightSide>
            </Content>
        </div >
    )
}