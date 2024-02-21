import React from "react";
import {useSelector} from "react-redux";
import './hero.scss';

const Hero = () => {
    const {language} = useSelector((store) => store.language);
    let jsonLang = require(`../../translate/translate_${language}.json`);

    return <section className="hero">
        <h2 className="hero__title">{jsonLang.home.title}</h2>
        <a href="/#" className="hero__scroll">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none">
                <g stroke="#fff" strokeWidth="2" clipPath="url(#a)">
                    <circle cx="21" cy="21" r="20" opacity=".5"/>
                    <path d="m12 18 9 9 9-9"/>
                </g>
                <defs>
                    <clipPath id="a">
                        <path fill="#fff" d="M0 0h42v42H0z"/>
                    </clipPath>
                </defs>
            </svg>
        </a>
    </section>
}
export default Hero;