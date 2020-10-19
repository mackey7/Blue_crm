import React from 'react'
import { TopMenuComponent } from '../../Components/TopMenuComponent/index'
import { LeftMenuComponent } from '../../Components/LeftMenu/index'
import { Content, RightSide } from '../../Helpers/Styles/HomePage/index'
import { ClientsComponent } from '../../Components/ClientsComponent/'

export const ClientsPage = () => {


    return (
        <div>
            <TopMenuComponent />

            <Content>
                <LeftMenuComponent />
                <RightSide>
                    <ClientsComponent />
                </RightSide>
            </Content>
        </div >

    )
}