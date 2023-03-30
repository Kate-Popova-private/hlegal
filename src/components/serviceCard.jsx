import React from 'react';

const ServiceCard = (props) => {
    return (
        <div className="service__container">
            <div className="service__img-wrap">
                <img src={props.img} alt="service" className="service__img"/>
            </div>
            <h4 className="service__title">{props.title}</h4>
            <p className="service__content">{props.content[0]}</p>
            <p className="service__content">{props.content[1]}</p>
        </div>
    );
};

export default ServiceCard;