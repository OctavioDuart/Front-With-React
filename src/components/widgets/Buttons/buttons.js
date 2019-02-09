import React from 'react';
import './buttons.css';


//  @ O componente abaixo recebe uma tratativa complexa 
//  @ para que ele possa ser utilizado em outros componentes 
//  @ de forma que ele seja gerérico
const Button = (props) => {
    let template = null;

    switch (props.type) {
        case 'loadmore':
            template =(
                <div className="btnGeneric"
                    onClick={props.action}
                >
                    {props.txt}
                </div>
            )
            break;
        default:
            template = null;
    }

    return template;
}

export default Button;