import React from 'react';
import '../styles/style.scss'
import hLogoName from '../img/hlegal_name.svg'
import benefits1 from '../img/benefits1.svg'
import benefits2 from '../img/benefits2.svg'
import benefits3 from '../img/benefits3.svg'
import benefits4 from '../img/benefits4.svg'
import benefits5 from '../img/benefits5.svg'
import benefits6 from '../img/benefits6.svg'

const Home = () => {
    return (
        <>
            <div className="bg-container">
                <header className="header">
                    <div className="bg-gray">
                        <div className="header__container">
                            <div className=" header__language language">
                                <span className="language__item">УК</span>
                                <span className="language__item">РУ</span>
                                <span className="language__item">EN</span>
                            </div>
                            <span className="header__state">Kyiv, Mechnikova str., 14/1</span>
                            <a href="tel:0800211927" className="header__phone-number phone-number">0800 211 927</a>
                            <a href="/#" className="header__social social">
                                <svg className="social__img" width="24" height="25" viewBox="0 0 24 25" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M24 12.5733C24 5.90541 18.6274 0.5 12 0.5C5.37258 0.5 0 5.90541 0 12.5733C0 18.5995 4.38823 23.5943 10.125 24.5V16.0633H7.07813V12.5733H10.125V9.91343C10.125 6.88755 11.9165 5.21615 14.6576 5.21615C15.9705 5.21615 17.3438 5.45195 17.3438 5.45195V8.42313H15.8306C14.3399 8.42313 13.875 9.35379 13.875 10.3086V12.5733H17.2031L16.6711 16.0633H13.875V24.5C19.6118 23.5943 24 18.5995 24 12.5733Z"
                                        fill="white"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="header__container">
                        <a href="/#" className="header__logo logo"><img className="header__logo-img" src={hLogoName}
                                                                        alt="hlegal"/></a>
                        <nav className="nav header__nav">
                            <svg className="nav__hamburger" xmlns="http://www.w3.org/2000/svg" width="32" height="33"
                                 fill="red">
                                <path stroke="#fff" strokeWidth="2" d="M7 10.5h18M7 16.5h18M7 22.5h18"/>
                            </svg>
                            <a href="/#" className="nav__item">about us</a>
                            <a href="/#" className="nav__item">services</a>
                            <a href="/#" className="nav__item">team</a>
                            <a href="/#" className="nav__item">publications</a>
                            <a href="/#" className="nav__item">contact</a>
                        </nav>
                    </div>
                </header>
                <section className="hero">
                    <h2 className="hero__title">you legal solutions provider</h2>
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
                <main className="main">
                    <div className="advantage">
                        <div className="advantage__nav">
                            <span className="advantage__nav-item">Consistent</span>
                            <span className="advantage__nav-item">Customer oriented</span>
                            <span className="advantage__nav-item">Innovative</span>
                            <span className="advantage__nav-item">Business oriented</span>
                        </div>
                        <div className="advantage__content">
                            <h4 className="advantage__title">We turn the idea of legal services</h4>
                            <p className="advantage__text">Consolidating many years of experience and practice, the
                                company's
                                lawyers
                                accompany complex projects and achieve a number of important decisions for the industry.
                                Many
                                of
                                them
                                form the practice of applying the law of the sea in Ukraine.</p>
                        </div>
                    </div>
                    <section className="benefits">
                        <a href="/#" className="benefits__link">Services </a>
                        <h2 className="benefits__title">What can we do better than others?</h2>
                        <div className="benefits__container">
                            <div className="benefit">
                                <div className="benefit__img-wrap">
                                    <img src={benefits1} alt="benefit" className="benefit__img"/>
                                </div>
                                <h4 className="benefit__title">IT and e-commerce</h4>
                                <p className="benefit__content">An endless stream of contracts, tax issues, labor
                                    relations,
                                    corporate
                                    papers -
                                    legal work distracts you from doing business. But there is not much work to do to
                                    hire an
                                    in-house
                                    lawyer.</p>
                            </div>
                            <div className="benefit">
                                <div className="benefit__img-wrap">
                                    <img src={benefits2} alt="benefits" className="benefit__img"/>
                                </div>
                                <h4 className="benefit__title">Comprehensive daily
                                    legal support</h4>
                                <p className="benefit__content">In addition, over time, the work will become the same
                                    type and
                                    uninteresting
                                    for a full-time lawyer. And we know very well how difficult it is to find a good
                                    candidate
                                    with
                                    experience in the field of information technology in Ukraine.</p>
                            </div>
                            <div className="benefit">
                                <div className="benefit__img-wrap">
                                    <img src={benefits3} alt="benefit" className="benefit__img"/>
                                </div>
                                <h4 className="benefit__title">Structuring corporate relationships</h4>
                                <p className="benefit__content">Instead of just providing legal services, we will hire a
                                    lawyer
                                    or a
                                    whole
                                    team
                                    that will fit into the daily life of your company.</p>
                            </div>
                            <div className="benefit">
                                <div className="benefit__img-wrap">
                                    <img src={benefits4} alt="benefit" className="benefit__img"/>
                                </div>
                                <h4 className="benefit__title">Building contractual relations</h4>
                                <p className="benefit__content">Once a week, or week after month, you have your own
                                    lawyer by
                                    your side.
                                    Anyone
                                    in the company can catch it at the coffee maker and just talk about current affairs
                                    instead
                                    of
                                    waiting
                                    for update status.</p>
                            </div>
                            <div className="benefit">
                                <div className="benefit__img-wrap">
                                    <img src={benefits5} alt="benefit" className="benefit__img"/>
                                </div>
                                <h4 className="benefit__title">Protection of business, intellectual property</h4>
                                <p className="benefit__content">And all the other time he will work on new diverse
                                    projects, so
                                    he will
                                    definitely not stop in professional development. One way or another, all Axon
                                    Partners will
                                    work
                                    for
                                    you
                                    instead of a corporate lawyer.</p>
                            </div>
                            <div className="benefit">
                                <div className="benefit__img-wrap">
                                    <img src={benefits6} alt="benefit" className="benefit__img"/>
                                </div>
                                <h4 className="benefit__title">Judicial representation</h4>
                                <p className="benefit__content">Is it a small, medium-sized company or a market leader?
                                    Local
                                    business
                                    or
                                    multinational company? Do you have your own legal department or not?</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Home;