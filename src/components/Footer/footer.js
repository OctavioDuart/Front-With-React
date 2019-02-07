import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

import {CURRENT_YEAR} from '../../hoc/config'

const Footer = () => (
    <div className="footer">
        <Link to="/" className="logo">
            <span className="logoTxt">27 Club</span>
        </Link>
        <div className="right">
            @27 {CURRENT_YEAR} Todos os direitos reservados 
        </div>
    </div>
)


export default Footer;