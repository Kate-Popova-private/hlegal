import React, {useEffect, useState} from 'react';
import hLogoName from "../assets/img/hlegal_name.svg";
import hLogoName_dark from "../assets/img/hLogoName_dark.svg";
import {Link, NavLink, Outlet, useLocation} from "react-router-dom";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import {useDispatch, useSelector} from "react-redux";
import {languageSelected} from "../store/action/languageAction";

const Header = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const [headerTheme, setHeaderTheme] = useState('');
    const [headerBg, setHeaderBg] = useState('');
    const [transpBg, setTranspBg] = useState(false);

    function changeLanguage(e) {
        dispatch(languageSelected(`${e.target.dataset.language}`));

        console.log(e.target.dataset.language);

    }

    function changeTheme(location) {
        if (location.pathname.startsWith('/publication')) {
            setHeaderBg('notTransparent');
            setTranspBg(true);

        }
        if (location.pathname === '/' || location.pathname.startsWith('/services')) {
            setHeaderTheme('color-dark');
            setHeaderBg('notTransparent');
            setTranspBg(false);

        } else {
            setHeaderTheme('color-white')


        }
    }

    useEffect(() => {
        changeTheme(location);
    }, [location]);

    return (
        <>
            <header
                className={`header${headerBg === 'transparent' ? 'header__remove' : ''} ${transpBg ? 'header__change-bg' : ''}`}>
                <div className="header__container">
                    <div className={`header__language language language_${headerTheme}`}>
                        <span className={`language__item language__item_${headerTheme}`}
                              data-language="UA"
                              onClick={changeLanguage}>УК</span>
                        <span className={`language__item language__item_${headerTheme}`}
                              data-language="RU"
                              onClick={changeLanguage}>РУ</span>
                        <span className={`language__item language__item_${headerTheme}`}
                              data-language="EN"
                              onClick={changeLanguage}>EN</span>
                    </div>
                    <span className="header__state">Kyiv, Mechnikova str., 14/1</span>
                    <a href="tel:0800211927"
                       className={`header__phone-number header__phone-number_${headerTheme} phone-number`}>0800 211
                        927</a>
                    <Link to="/#" className="header__social social">
                        <svg className="social__img" width="24" height="25" viewBox="0 0 24 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            {headerTheme === 'color-dark' ?
                                <path
                                    d="M24 12.5733C24 5.90541 18.6274 0.5 12 0.5C5.37258 0.5 0 5.90541 0 12.5733C0 18.5995 4.38823 23.5943 10.125 24.5V16.0633H7.07813V12.5733H10.125V9.91343C10.125 6.88755 11.9165 5.21615 14.6576 5.21615C15.9705 5.21615 17.3438 5.45195 17.3438 5.45195V8.42313H15.8306C14.3399 8.42313 13.875 9.35379 13.875 10.3086V12.5733H17.2031L16.6711 16.0633H13.875V24.5C19.6118 23.5943 24 18.5995 24 12.5733Z"
                                    fill="white"/>
                                :
                                <path
                                    d="M24 12.5733C24 5.90541 18.6274 0.5 12 0.5C5.37258 0.5 0 5.90541 0 12.5733C0 18.5995 4.38823 23.5943 10.125 24.5V16.0633H7.07813V12.5733H10.125V9.91343C10.125 6.88755 11.9165 5.21615 14.6576 5.21615C15.9705 5.21615 17.3438 5.45195 17.3438 5.45195V8.42313H15.8306C14.3399 8.42313 13.875 9.35379 13.875 10.3086V12.5733H17.2031L16.6711 16.0633H13.875V24.5C19.6118 23.5943 24 18.5995 24 12.5733Z"
                                    fill="#b3b3ba"/>
                            }
                        </svg>
                    </Link>
                </div>
                <div className="header__container">
                    <Link to="/" className="header__logo logo"><img className="header__logo-img"
                                                                    src={headerTheme === 'color-dark' ? hLogoName : hLogoName_dark}
                                                                    alt="hlegal"/>
                        <Breadcrumbs colorTheme={headerTheme}></Breadcrumbs>
                    </Link>
                    <nav className={`nav header__nav nav_${headerTheme}`}>
                        {headerTheme === 'color-dark' ?
                            <svg className={`nav__hamburger nav__hamburger_${headerTheme}`}
                                 xmlns="http://www.w3.org/2000/svg" width="32" height="33">
                                <path stroke="#fff" strokeWidth="2" d="M7 10.5h18M7 16.5h18M7 22.5h18"/>
                            </svg>
                            : <svg className={`nav__hamburger nav__hamburger_${headerTheme}`}
                                   xmlns="http://www.w3.org/2000/svg" width="32" height="33">
                                <path stroke="#323264" strokeWidth="2" d="M7 10.5h18M7 16.5h18M7 22.5h18"/>
                            </svg>
                        }
                        <NavLink to="/about" className="nav__item">about us</NavLink>
                        <NavLink to="/services" className="nav__item">services</NavLink>
                        <a href="/#" className="nav__item">team</a>
                        <NavLink to="/publications" className="nav__item">publications</NavLink>
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