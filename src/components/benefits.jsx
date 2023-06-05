import React, {useEffect, useState} from 'react';
import BenefitCard from "./BenefitCard";
import {useDispatch, useSelector} from "react-redux";
import {benefitsLoadingSuccess} from "../store/action/benefitsAction";
import Loader from "./Loader/Loader";
import axios from "axios";

const Benefits = () => {
    const {loading, benefits, error} = useSelector((store) => store.benefits);
    const dispatch = useDispatch();
    const [countPage, setCountPage] = useState(1);

    useEffect(() => {
        axios.get('http://hlegal/api.php?type=services').then(({data}) => {
            dispatch(benefitsLoadingSuccess(data));
            console.log('data', data)
        })
    }, []);


    return (
        <>
            <section className="benefits">
                <h2 className="benefits__title">What can we do better than others?</h2>
                <div className="benefits__container">

                    {loading ? <Loader></Loader>
                        : benefits && benefits['result'].map((service, index) => (
                        <BenefitCard key={`ctgr_${index}`} img={service.img} title={service.title}
                                     content={service.shortDesc} id={service.id}/>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Benefits;