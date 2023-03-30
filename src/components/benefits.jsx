import React, {useEffect} from 'react';
import BenefitCard from "./BenefitCard";
import {collection, getDocs} from "firebase/firestore";
import {ref, getDownloadURL} from "firebase/storage";
import {db, storage} from "../firebase";
import {useDispatch, useSelector} from "react-redux";
import {servicesLoading, servicesLoadingSuccess} from "../store/action/servicesAction";
import Loader from "./Loader/Loader";

const Benefits = () => {
    const {loading, benefits, error} = useSelector((store) => store.benefits);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(servicesLoading());
        (async () => {
            let docs = await getDocs(collection(db, "benefits"));
            let tempArr = [];
            docs.forEach((doc) => {
                tempArr.push({...doc.data(),id:doc.id})
            })
            for (const doc of tempArr) {
                doc.img = await getDownloadURL(ref(storage, `benefits/${doc.img}`));
            }
            dispatch(servicesLoadingSuccess(tempArr));
        })()


    }, [])


    return (
        <>
            <section className="benefits">
                <h2 className="benefits__title">What can we do better than others?</h2>
                <div className="benefits__container">

                    {loading ? <Loader></Loader>
                        : benefits && benefits.map((service, index) => (
                        <BenefitCard key={`ctgr_${index}`} img={service.img} title={service.title} content={service.shortContent} id={service.id}/>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Benefits;