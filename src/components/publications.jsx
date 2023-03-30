import React from 'react';
import publication1 from "../img/Publication1.webp";
import publication2 from "../img/Publication2.webp";
import publication3 from "../img/Publication3.webp";

const Publications = () => {
    return (
        <section className="publications">
            <div className="publications__wrap">
                <a href="/#" className="publications__link">Publications</a>
                <h4 className="publications__title">We have something to tell</h4>
                <div className="publications__container">
                    <div className="publication">
                        <img className="publication__img" src={publication1} alt="publication"/>
                        <h5 className="publication__title">Equity associate</h5>
                        <span className="publication__date">April 22</span>
                        <p className="publication__content">I'm a jun on projects. I am a co-owner of a law
                            firm. How it happened.
                            Before entering my parents told me that if I…</p>
                    </div>
                    <div className="publication">
                        <img className="publication__img" src={publication2} alt="publication"/>
                        <h5 className="publication__title">Penalty for the Good Corporation: what will happen to
                            Google and others
                            for
                            violating the GDPR</h5>
                        <span className="publication__date">September 29</span>
                        <p className="publication__content">And why the recovery of 50 million euros could be a
                            fateful precedent
                            According to Mind.ua January 21 National Commission for Data Protection.</p>
                    </div>
                    <div className="publication">
                        <img className="publication__img" src={publication3} alt="publication"/>
                        <h5 className="publication__title">Millennial Testament</h5>
                        <span className="publication__date">August 19</span>
                        <p className="publication__content">What and how modern vloggers, opinion leaders and
                            crypto-millionaires
                            will
                            inherit A typical legacy of the Ukrainian generation X looks like this: an apartment
                            in…</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Publications;