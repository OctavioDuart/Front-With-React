import React from 'react';
import FontAwesome from 'react-fontawesome';
import './card_info.css';

const CardInfo = (props) => {
    const memberName = (members, member) => {
        let data = members.find((item) => {
            return item.id === member
        });
        if (data)
            return data.name

    }
    return (
        <div className="cardInfo">
            <span className="memberName">
                {memberName(props.members, props.member)}
            </span>
            <span className="cardInfoDate">
                <FontAwesome name="clock-o" />
                21/05/2018
            </span>
        </div>
    )
}


export default CardInfo;