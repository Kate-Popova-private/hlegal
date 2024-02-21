import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {benefitsLoadingSuccess} from "../../store/action/benefitsAction";
import Loader from "../Loader/Loader";
import axios from "axios";
import {Link} from "react-router-dom";
import './benefits.scss';
import LinkArrow from "../LinkArrow";

const Benefits = () => {
    const {loading, benefits, error} = useSelector((store) => store.benefits);
    const dispatch = useDispatch();

    useEffect(() => {

        axios.get('http://hlegal/api.php?type=services').then(({data}) => {
            dispatch(benefitsLoadingSuccess(data));
            console.log('data', data)
        })
    }, []);


    return (
        <>
            <section className="benefits">
                <LinkArrow link="/services" linkName="services"></LinkArrow>
                <h2 className="benefits__title">What can we do better than others?</h2>
                <div className="benefits__container">
                    {loading ? <Loader></Loader>
                        : benefits && benefits['result'].map((service, index) => (
                        <div className="benefit">
                            <Link to={`/service/${service.id}`}>
                                <div className="benefit__img-wrap">
                                    <img src={`http://hlegal/${service.img}`} alt="benefit" className="benefit__img"/>
                                </div>
                                <h4 className="benefit__title">{service.title}</h4>
                                <p className="benefit__content">{service.shortDesc}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Benefits;