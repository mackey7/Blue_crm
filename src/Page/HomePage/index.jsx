import React from 'react';
import { TopMenuComponent } from '../../Components/TopMenuComponent/index'
import { LeftMenuComponent } from '../../Components/LeftMenu/index'
import { Content, RightSide } from '../../Helpers/Styles/HomePage/index'
import { IncomeChartComponent } from '../../Components/HomeComponent/IncomeChartComponent/index'
export const HomePage = () => {
    return (
        <div>
            <TopMenuComponent />

            <Content>
                <LeftMenuComponent />
                <RightSide>
                    <IncomeChartComponent />
                </RightSide>
            </Content>
        </div >
    )
}