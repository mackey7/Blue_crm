import React from 'react'
import { TopMenuComponent } from '../../Components/TopMenuComponent/index'
import { LeftMenuComponent } from '../../Components/LeftMenu/index'
import { Content, RightSide } from '../../Helpers/Styles/HomePage/index'
import { CostsComponent } from '../../Components/CostsComponent/index'
export const CostsPage = () => {
    return (
        <div>
            <TopMenuComponent />

            <Content>
                <LeftMenuComponent />
                <RightSide>
                    <CostsComponent />
                </RightSide>
            </Content>
        </div >
    )
}