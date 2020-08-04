import React, { useState } from 'react';
import { ComponentWrapper, Logo, UserSection, ManagementMenu, ButtonAdd, ButtonSearch, SearchInput, ButtonNotific, UserIcon, ArrowIcon, Hamburger, NotificationMenu, UserSectionMenu } from '../../Helpers/Styles/TopMenuComponent/index'

export const TopMenuComponent = () => {
    const [open, setOpen] = useState(false);
    const [sectionMenuOpen, setSectionMenuOpen] = useState(false);
    const [NotoficationOpen, setNotoficationOpen] = useState(false);
    const [SearchOpen, setSearchOpen] = useState(false);
    const HandleClick = () => {
        open ? setOpen(false) : setOpen(true)
    }
    const HandleMenuClick = () => {
        sectionMenuOpen ? setSectionMenuOpen(false) : setSectionMenuOpen(true)
    }

    const HandleNotificationClick = () => {
        NotoficationOpen ? setNotoficationOpen(false) : setNotoficationOpen(true)
    }
    const HandleSearchClick = () => {
        SearchOpen ? setSearchOpen(false) : setSearchOpen(true)
    }



    return (
        <ComponentWrapper>
            <Logo>
                Blue CRM
            </Logo>
            <Hamburger onClick={HandleClick} open={open} >
                <div></div>
                <div></div>
                <div></div>
            </Hamburger>
            <ManagementMenu open={open}>
                <ButtonAdd>Add <i className="fa fa-plus"></i></ButtonAdd>
                <ButtonSearch onClick={HandleSearchClick} className="fa fa-search"></ButtonSearch>
                <SearchInput SearchOpen={SearchOpen} ></SearchInput>
                <ButtonNotific onClick={HandleNotificationClick} className="fa fa-bell-o"></ButtonNotific>
                <NotificationMenu NotoficationOpen={NotoficationOpen}>
                    <li>Notofication</li>
                    <li>Notofication</li>
                </NotificationMenu>
                <UserSection onClick={HandleMenuClick}>
                    <UserIcon src="../../Images/user-img.jpg" alt="User image" />
                    <ArrowIcon className="fa fa-arrow-down"></ArrowIcon>
                </UserSection>
                <UserSectionMenu MenuOpen={sectionMenuOpen}>
                    <li>Settings</li>
                    <li>menu</li>
                    <li>LogOut</li>
                </UserSectionMenu>
            </ManagementMenu>

        </ComponentWrapper>
    )
}