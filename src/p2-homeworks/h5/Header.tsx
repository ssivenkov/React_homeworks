import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.linkContainer}>
            <NavLink to={PATH.PRE_JUNIOR}
                     activeClassName={s.activeLink}
                     className={`${s.link} ${s.PreJunior}`}>Pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR}
                     activeClassName={s.activeLink}
                     className={`${s.link} ${s.Junior}`}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}
                     activeClassName={s.activeLink}
                     className={`${s.link} ${s.JuniorPlus}`}>Junior+</NavLink>
            <div className={s.button}> </div>
        </div>
    )
}

export default Header
