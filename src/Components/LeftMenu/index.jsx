import React from 'react';
import { Wrapper, Icon } from '../../Helpers/Styles/LeftMenu/index'
export const LeftMenuComponent = () => {
    return (
        <Wrapper>
            <Icon className="fa fa-home"></Icon>
            <Icon className="fa fa-bar-chart-o"></Icon>
            <Icon className="fa fa-users"></Icon>
            <Icon className="fa fa-calendar"></Icon>

        </Wrapper >
    )
}