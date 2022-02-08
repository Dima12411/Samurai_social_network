import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className ={s.item}>
                <NavLink to ='/profile' className={(navActive) => navActive.isActive ? s.active : ''}>Profile</NavLink>
            </div>
            <div className ={s.item}>
                <NavLink to ='/dialogs' className={(navActive) => navActive.isActive ? s.active : ''}>Messages</NavLink>
            </div>
            <div className ={s.item}>
                <NavLink to ='/users' className={(navActive) => navActive.isActive ? s.active : ''}>Users</NavLink>
            </div>
            <div className ={s.item}>
                <NavLink to='/news' className={(navActive) => navActive.isActive ? s.active : ''}>News</NavLink>
            </div>
            <div className ={s.item}>
                <NavLink to='/music' className={(navActive) => navActive.isActive ? s.active : ''}>Music</NavLink>
            </div>
            <div className ={s.item}>
                <NavLink to ='/settings' className={(navActive) => navActive.isActive ? s.active : ''}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;