import React from 'react';
import {Link} from "react-router-dom";

const BenefitCard = (props) => {
    const id = props.id;
    return (
        <div className="benefit">
            <Link to={`/service/${id}`}>
                <div className="benefit__img-wrap">
                    <img src={`http://hlegal/${props.img}`} alt="benefit" className="benefit__img"/>
                </div>
                <h4 className="benefit__title">{props.title}</h4>
               <p className="benefit__content">{props.content}</p>
            </Link>
        </div>
    );
};

export default BenefitCard;