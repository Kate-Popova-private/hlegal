import React from 'react';
import hLogoName from "../img/hlegal_name.svg";
import {Link, NavLink, Outlet} from "react-router-dom";
import Footer from "./Footer";

const Header = () => {
    return (
        <>
            <header className="header">
                    <div className="header__container">
                        <div className=" header__language language">
                            <span className="language__item">УК</span>
                            <span className="language__item">РУ</span>
                            <span className="language__item">EN</span>
                        </div>
                        <span className="header__state">Kyiv, Mechnikova str., 14/1</span>
                        <a href="tel:0800211927" className="header__phone-number phone-number">0800 211 927</a>
                        <Link to="/#" className="header__social social">
                            <svg className="social__img" width="24" height="25" viewBox="0 0 24 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 12.5733C24 5.90541 18.6274 0.5 12 0.5C5.37258 0.5 0 5.90541 0 12.5733C0 18.5995 4.38823 23.5943 10.125 24.5V16.0633H7.07813V12.5733H10.125V9.91343C10.125 6.88755 11.9165 5.21615 14.6576 5.21615C15.9705 5.21615 17.3438 5.45195 17.3438 5.45195V8.42313H15.8306C14.3399 8.42313 13.875 9.35379 13.875 10.3086V12.5733H17.2031L16.6711 16.0633H13.875V24.5C19.6118 23.5943 24 18.5995 24 12.5733Z"
                                    fill="white"/>
                            </svg>
                        </Link>
                    </div>
                <div className="header__container">
                    <Link to="/" className="header__logo logo"><img className="header__logo-img" src={hLogoName}
                                                                    alt="hlegal"/></Link>
                    <nav className="nav header__nav">
                        <svg className="nav__hamburger" xmlns="http://www.w3.org/2000/svg" width="32" height="33"
                             fill="red">
                            <path stroke="#fff" strokeWidth="2" d="M7 10.5h18M7 16.5h18M7 22.5h18"/>
                        </svg>
                        <NavLink to="/about" className="nav__item">about us</NavLink>
                        <NavLink to="/services" className="nav__item">services</NavLink>
                        <a href="/#" className="nav__item">team</a>
                        <a href="/#" className="nav__item">publications</a>
                        <a href="/#" className="nav__item">contact</a>
                    </nav>
                </div>
            </header>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Header;