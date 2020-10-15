import React from 'react';
import { Wrapper, Icon } from '../../Helpers/Styles/LeftMenu/index'
import { Link } from 'react-router-dom'
export const LeftMenuComponent = () => {
    return (
        <Wrapper>
            <Link to="/">  <Icon className="fa fa-home"></Icon></Link>
            <Link to="/charts"> <Icon className="fa fa-bar-chart-o"></Icon></Link>
            <Link to="/clients">    <Icon className="fa fa-users"></Icon></Link>


            <Icon className="fa fa-calendar"></Icon>

        </Wrapper >
    )
}