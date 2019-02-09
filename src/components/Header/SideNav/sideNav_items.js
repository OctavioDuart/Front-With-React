import React from 'react';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import './sideNav.css';

const SideNavItems = () => {

    const items = [
        {
            nameClass: 'options',
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            nameClass: 'options',
            icon: 'fire',
            text: 'Membros',
            link: '/membros'
        },
        {
            nameClass: 'options',
            icon: 'play',
            text: 'Vídeos',
            link: '/videos'
        }
    ];

    const showItems = () => {
        return items.map((item, i) => {
            return (
                <div key={i} className={item.nameClass}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon} />
                        {item.text}
                    </Link>
                </div>
            )
        });
    };

    return (
        <div>
            <div className="options">
                {showItems()}
            </div>
        </div>
    )
}

export default SideNavItems;