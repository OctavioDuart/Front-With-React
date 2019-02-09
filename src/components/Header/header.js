import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav'

const Header = (props) => {


    const navBars = () => (
        <FontAwesome name="bars"
            onClick={props.openHideNav} // Função de callback do componente pai 
            style={{
                color: "#dfdfdf",
                padding: '10px',
                cursor: 'pointer'
            }}
        />
    );

    const logo = () => (
        <Link to="/" className={style.logo} >
            <span className={style.logoTxt}>27 Club</span>
        </Link>
    );
    return (
        <header className={style.header}>
            <SideNav {...props} />
            <div className={style.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;