import React from 'react';
import { Link } from 'react-router-dom';
import './buttons.css';


//  @ O componente abaixo recebe uma tratativa complexa 
//  @ para que ele possa ser utilizado em outros componentes 
//  @ de forma que ele seja gerérico
const Button = (props) => {
    let template = null;

    switch (props.type) {
        case 'loadmore':
            template = (
                <div className="btnGeneric"
                    onClick={props.action}
                >
                    {props.txt}
                </div>
            )
            break;
        case 'linkTo':
            template = (
                <Link to={props.linkTo}
                    className="btnGeneric"
                >
                    {props.txt}
                </Link>
            )
            break;
        default:
            template = null;
    }

    return template;
}

export default Button;