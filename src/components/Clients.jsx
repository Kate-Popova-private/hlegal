import React from 'react';
import client1 from "../img/client1.webp";
import client2 from "../img/client2.webp";
import client3 from "../img/client3.webp";
import client4 from "../img/client4.webp";
import client5 from "../img/client5.webp";
import client6 from "../img/client6.webp";
import client7 from "../img/client7.webp";
import client8 from "../img/client8.webp";
import client9 from "../img/client9.webp";
import client10 from "../img/client10.webp";
import client11 from "../img/client11.webp";
import client12 from "../img/client12.webp";

const Clients = () => {
    return (
        <section className="clients">
            <h4 className="clients__title">They already trust us</h4>
            <div className="clients__container">
                <a href="/#" className="clients__item">
                    <img className="clients__img" src={client1} alt="Hillel"/>
                </a>
                <a href="/#" className="clients__item">
                    <img className="clients__img" src={client2} alt="WannaBiz"/>
                </a>
                <a href="/#" className="clients__item">
                    <img className="clients__img" src={client3} alt="tapgerine"/>
                </a>
                <a href="/#" className="clients__item">
                    <img className="clients__img" src={client4} alt="3D LOOK"/>
                </a>
                <a href="/#" className="clients__item">
                    <img className="clients__img" src={client5} alt="orangear"/>
                </a>
                <a href="/#" className="clients__item">
                    <img className="clients__img" src={client6} alt="adtlligent"/>
                </a>
                <a href="/#" className="clients__item">
                    <img className="clients__img" src={client7} alt="clickky"/>
                </a>
                <a href="/#" className="clients__item">
                    <img className="clients__img" src={client8} alt="eco leasing"/>
                </a>
                <a href="/#" className="clients__item">
                    <img className="clients__img" src={client9} alt="infraTek"/>
                </a>
                <a href="/#" className="clients__item">
                    <img className="clients__img" src={client10} alt="city park"/>
                </a>
                <a href="/#" className="clients__item">
                    <img className="clients__img" src={client11} alt="art-print studio"/>
                </a>
                <a href="/#" className="clients__item">
                    <img className="clients__img" src={client12} alt="ultimate card"/>
                </a>
            </div>
        </section>
    );
};

export default Clients;